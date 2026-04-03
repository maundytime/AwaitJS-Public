---
name: await-js-dsl
description: Write AwaitJS iOS widgets in TSX with a custom SwiftUI-style DSL, native bridges, modifiers, timelines, and intents.
---

# AwaitJS DSL

This repo exposes type declarations only. When writing widgets, treat the `.d.ts` files as the contract and do not assume any private implementation details.
Make sure TypeScript from `package.json` is installed.

## Agent Scope

- Read `README.md`, `skill.md`, `runtime/*.d.ts`, `types/*.d.ts`, and `widget/index.tsx` first.
- By default, only modify `widget/index.tsx`.
- `skill.md` and all `.d.ts` files are public contracts. Do not modify them and do not guess private capabilities outside this repo.
- Run `npx tsc --noEmit` after editing.

## Files

- `runtime/await.d.ts`: importable components and JSX entry.
- `runtime/pre-script.d.ts`: global native bridge APIs and `Await.define` types.
- `types/prop.d.ts`: component props and modifier types.
- `types/global.d.ts`: global types.
- `types/jsx.d.ts`: JSX constraints.

## Basic Rules

- Import components only from `await`.
- Do not write native HTML tags. `JSX.IntrinsicElements` is `never`, so `<div>` and `<span>` are invalid.
- Register widgets with `Await.define({...})`.
- Express view styling through props and modifiers. Do not use CSS, `style` objects, React hooks, or React state.
- This is a declaration-only environment. If you need to confirm whether something exists, check the `.d.ts` files directly instead of guessing.
- Widgets run inside a widget environment, not a full app page. Keep both the view tree and timeline small by default.
- Design permission-related behavior as “already authorized by the host” or “currently unavailable”. Do not put first-run authorization flows inside the widget.

## Minimal Template

```tsx
import {
	Text,
	ZStack,
} from 'await';

function widget() {
	return (
		<ZStack>
			<Text value='Hello, World!' />
		</ZStack>
	);
}

Await.define({
	widget,
});
```

## Components And Types

- Check `runtime/await.d.ts` for the component list.
- Check `types/prop.d.ts` for props and modifiers.
- Check `runtime/pre-script.d.ts` for global native bridge APIs such as `Await`, `AwaitStore`, `AwaitNetwork`, `AwaitFile`, `AwaitEnv`, and `AwaitUI`.

## Widget Structure

- The widget signature can be `function widget(entry: WidgetEntry<T>)`.
- The return value is `NativeView`.
- `children` are flattened, and `undefined` children are ignored.
- `id` is a special field passed through to the native side. Use stable `id` values when you need stable animated transitions.

## Modifier Order

- Modifier order is semantic in this DSL.
- Later modifiers wrap earlier ones.
- `background` and `padding` are not interchangeable like in CSS.

```tsx
<ZStack background='white' padding={8} />
```

This creates an outer transparent ring of `8` around the white background.

```tsx
<ZStack padding={8} background='white' />
```

This makes the background include the padding area.

For chips, pills, and card-like blocks, prefer `padding -> background` by default.

## Timeline

- `widgetTimeline(context)` is optional.
- It returns `{entries, update?}`.
- `entries` is an array containing `date`.
- If the widget does not need time-driven updates, you can omit `widgetTimeline` and only define `widget`.
- If the UI only shows a current state, prefer no `widgetTimeline` or a single entry. Do not create many entries without a real need.
- If the goal is to refresh as fast as the system allows, use `update: new Date()`. Do not hardcode minute intervals below the practical system limit.

```tsx
import {Text} from 'await';

function widget({text}: {text: string}) {
	return <Text value={text} />;
}

function widgetTimeline() {
	const date = new Date();
	const text = 'Hello';
	return {
		entries: [{date, text}],
	};
}

Await.define({
	widget,
	widgetTimeline,
});
```

## Intents And Interaction

- Register interaction functions under `widgetIntents`.
- Generate `intent` values from the result of `Await.define(...)`.
- Parameters must be encodable values.
- If you need continuous movement or interaction transitions, give visual entities stable `id` values.

```tsx
import {Button, Text} from 'await';

function tap(step: number) {
	const count = AwaitStore.num('count', 0);
	AwaitStore.set('count', count + step);
}

function widget() {
	return (
		<Button intent={app.tap(1)}>
			<Text value='Add' />
		</Button>
	);
}

const app = Await.define({
	widget,
	widgetIntents: {tap},
});
```

## Data And Capabilities

- Use `AwaitStore` for persistent state.
- Use `AwaitNetwork.request(...)` for networking. Do not use `fetch`.
- Use `AwaitFile` when you need file access.
- Use `AwaitEnv` when you need the widget `id` or `tag`.

## Decision Order

1. Check `runtime/await.d.ts` to see whether the component exists.
2. Check `types/prop.d.ts` to see whether the prop or modifier is valid.
3. Check `runtime/pre-script.d.ts` to see whether the native bridge API exists.
4. If it is not in the `.d.ts` files, treat it as unavailable.

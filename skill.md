---
name: await-js-dsl
description: 使用自定义的 SwiftUI 风格 DSL（原生桥接、修饰符、时间线、Intent）编写 AwaitJS iOS 小组件 TSX。
---

# AwaitJS DSL

这里提供的是类型接口，写小组件时，以这里的 `.d.ts` 为准，不要假设内部实现细节。
确保 `package.json` 中的 typescript 已经安装。

## 目录

- `runtime/await.d.ts`：可导入组件与 JSX 入口。
- `runtime/pre-script.d.ts`：全局原生桥接能力与 `Await.define` 类型。
- `types/prop.d.ts`：组件 props 与 modifier 类型。
- `types/global.d.ts`：全局类型。
- `types/jsx.d.ts`：JSX 约束。

## 基本规则

- 只能从 `await` 导入组件。
- 不能写原生 HTML 标签。`JSX.IntrinsicElements` 是 `never`，所以不能用 `<div>`、`<span>`。
- 小组件入口通过 `Await.define({...})` 注册。
- 视图样式靠 props 和 modifier 表达，不写 CSS，不写 `style` 对象，不写 React hooks/state。
- 这里是声明环境。想确认字段是否可用，直接查 `.d.ts`，不要猜。

## 最小模板

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

## 组件与类型

- 组件列表看 `runtime/await.d.ts`。
- props 和 modifier 看 `types/prop.d.ts`。
- 全局原生桥接能力看 `runtime/pre-script.d.ts`，常用的有 `Await`、`AwaitStore`、`AwaitNetwork`、`AwaitFile`、`AwaitEnv`、`AwaitUI`。

## 组件写法

- `widget` 签名可写成 `function widget(entry: WidgetEntry<T>)`。
- 返回值是 `NativeView`。
- `children` 会被扁平化，`undefined` 子节点会被忽略。
- `id` 是特殊字段，会透传到原生侧；需要稳定动画过渡时，给元素加稳定的 `id`。

## Modifier 顺序

- 本 DSL 的 modifier 顺序有语义。
- 后写的 modifier 包在外面。
- `background` 和 `padding` 不可按 CSS 习惯看成等价。

```tsx
<ZStack background='white' padding={8} />
```

这会在白色背景外再包一层 `8` 的透明留白。

```tsx
<ZStack padding={8} background='white' />
```

这会让背景把 padding 区域一起包进去。

做标签块、胶囊块、卡片块时，默认优先用 `padding -> background`。

## 时间线

- 可选实现 `widgetTimeline(context)`。
- 返回 `{entries, update?}`。
- `entries` 是带 `date` 的数组。
- 不需要时间驱动更新时，可以只写 `widget`，省略 `widgetTimeline`。

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

如果界面只是展示一个当前状态，优先不实现 `widgetTimeline`，或者只生成单个 entry，不要无意义地生成很多 entries。

## Intent 与交互

- 交互函数放在 `widgetIntents` 里注册。
- 通过 `Await.define(...)` 的返回值生成 `intent`。
- 参数必须是可编码值。

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

## 数据与能力

- 持久化状态用 `AwaitStore`。
- 网络请求用 `AwaitNetwork.request(...)`，不要写 `fetch`。
- 需要读文件时用 `AwaitFile`。
- 需要区分 widget 的 `id` 和 `tag` 时看 `AwaitEnv`。

## 写代码时的判断顺序

1. 先看 `runtime/await.d.ts` 有没有这个组件。
2. 再看 `types/prop.d.ts` 这个字段是不是合法。
3. 再看 `runtime/pre-script.d.ts` 有没有对应原生桥接能力。
4. 如果 `.d.ts` 里没有，就当它不存在。

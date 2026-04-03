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

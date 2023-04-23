type Props = {
	text: string | undefined;
};

export function Author(props: Props) {
	const { text } = props;
	return (
		<div id="author" className="author">
			<span>- {text}</span>
		</div>
	);
}

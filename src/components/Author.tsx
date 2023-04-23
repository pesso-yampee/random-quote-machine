type Props = {
	text: string;
	color: string;
};

export function Author(props: Props) {
	const { text, color } = props;
	return (
		<div id="author" className="author">
			<span style={{ color: color }}>- {text}</span>
		</div>
	);
}

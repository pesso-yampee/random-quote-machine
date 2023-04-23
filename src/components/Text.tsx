type Props = {
	color: string;
	text: string;
};

export function Text(props: Props) {
	const { color, text } = props;

	return (
		<p className="text" style={{ color: color }}>
			{text}
		</p>
	);
}

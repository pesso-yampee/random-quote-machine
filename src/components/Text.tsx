type Props = {
	text: string | undefined;
};

export function Text(props: Props) {
	const { text } = props;

	return (
		<p className="text">
			{text}
		</p>
	);
}

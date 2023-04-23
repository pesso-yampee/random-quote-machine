import { useDispatch } from "react-redux";

type Props = {
	color: string;
};

export function NewQuoteButton(props: Props) {
	const { color } = props;
	const dispatch = useDispatch();
	return (
		<button
			type="button"
			className="btn"
			style={{
				backgroundColor: color
			}}
			// onClick={dispatch()}
		>
			New Quote
		</button>
	);
}

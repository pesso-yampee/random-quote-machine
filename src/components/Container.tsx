import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NewQuoteButton } from "./NewQuoteButton";
import { Author } from "./Author";
import { QuoteBox } from "./QuoteBox";
import { Text } from "./Text";
import { Tumblr } from "./Tumblr";
import { Twitter } from "./Twitter";
import type { AppDispatch, RootState } from "../redux/store";
import { setColorSlice } from "../redux/setColorSlice";
import { fetchAnimeQuotes } from "../redux/setQuoteSlice";

export function Container() {
	const dispatch = useDispatch<AppDispatch>();
	const stateColor: string = useSelector(
		(state: RootState) => state.setColor.color
	);
	const stateColors: string[] = useSelector(
		(state: RootState) => state.setColor.colors
	);

	const { addColor } = setColorSlice.actions;

	// DOMがレンダーされる直前に実行
	useEffect(() => {
		dispatch(addColor());
	});
	useEffect(() => {
		dispatch(fetchAnimeQuotes());
	});

	const quouteData = useSelector((state: RootState) => {
		return state.setQuote.data;
	});
	return (
		<div className="container" style={{ backgroundColor: stateColor }}>
			<QuoteBox
				Author={<Author text="Eleanor Roosevelt" color={stateColor} />}
				NewQuoteButton={<NewQuoteButton color={stateColor} />}
				Text={<Text text={quouteData.quote} color={stateColor} />}
				Tumblr={<Tumblr color={stateColor} />}
				Twitter={<Twitter color={stateColor} link="#" />}
			/>
		</div>
	);
}

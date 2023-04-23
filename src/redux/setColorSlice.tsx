import { createSlice } from "@reduxjs/toolkit";

export type initialStateProps = {
	color: string;
	colors: [string, string, string, string, string, string];
};

const initialState: initialStateProps = {
	color: "", // ランダムな値を引っ張ってくる
	colors: ["red", "blue", "yellow", "green", "pink", "gray"]
};

export const setColorSlice = createSlice({
	name: "setColor",
	initialState,
	reducers: {
		addColor: (state) => {
			const randomIndex = Math.floor(Math.random() * state.colors.length);
			state.color = state.colors[randomIndex];
		}
	}
});

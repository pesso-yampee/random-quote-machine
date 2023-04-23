import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAnimeQuotes = createAsyncThunk(
	"/animeQuotes/fetchAnimeQuotes",
	async () => {
		const data = await fetch(
			"https://animechan.vercel.app/api/random/anime?title=naruto"
		)
			.then((response) => response.json());
		console.log(data);
		return data;
	}
);

type initialStateProps = {
	data: {
		anime: string;
		character: string;
		quote: string;
	};
};

const initialState: initialStateProps = {
	data: {
		anime: "",
		character: "",
		quote: ""
	}
};

export const setQuoteSlice = createSlice({
	name: "setQuote",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchAnimeQuotes.fulfilled, (state, action) => {
			state.data = action.payload;
		});
	}
});

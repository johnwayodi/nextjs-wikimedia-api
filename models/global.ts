import axios from "axios";
import { get } from "lodash";
import { createModel } from "@rematch/core";
import { RootModel } from "@/models";
import { API_URL } from "@/utils";

export type Article = {
  pageid: number;
  normalizedtitle: string;
  description: string;
  extract: string;
  timestamp: string;
  views?: number;
  rank?: number;
  thumbnail?: { source: string; height: number; width: number };
  originalimage?: { source: string; height: number; width: number };
};

export type FeaturedArticle = {
  text: string;
  pages: Article[];
  year: number;
};

type GlobalState = {
  featured: Array<FeaturedArticle>;
};

export const global = createModel<RootModel>()({
  state: {
    featured: [],
  } as GlobalState, // typed complex state
  reducers: {
    // handle state changes with pure functions
    saveFeatured(state, payload: FeaturedArticle[]) {
      return { ...state, featured: payload };
    },
  },
  effects: (dispatch) => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    async getFeaturedSelected(payload: { date: string }, state) {
      const response = await axios.get(
        `${API_URL}/feed/onthisday/selected/${payload.date}`
      );
      const result = get(response.data, "selected", []);
      dispatch.global.saveFeatured(result);
    },
  }),
});

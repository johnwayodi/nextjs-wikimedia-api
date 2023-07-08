import axios from "axios";
import { get } from "lodash";
import { createModel } from "@rematch/core";
import { RootModel } from "@/models";
import { API_URL, DATE_FORMAT } from "@/utils";
import dayjs from "dayjs";

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
  selectedDate: dayjs.Dayjs;
};

export const global = createModel<RootModel>()({
  state: {
    featured: [],
    selectedDate: dayjs(),
  } as GlobalState, // typed complex state
  reducers: {
    // handle state changes with pure functions
    saveDate(state, payload: dayjs.Dayjs) {
      return { ...state, selectedDate: payload };
    },
    saveFeatured(state, payload: FeaturedArticle[]) {
      return { ...state, featured: payload };
    },
  },
  effects: (dispatch) => ({
    // handle state changes with impure functions.
    setSelectedDate(payload: { date: dayjs.Dayjs }, state) {
      dispatch.global.saveDate(payload.date);
    },
    // use async/await for async actions
    async getFeaturedSelected(payload: { date: dayjs.Dayjs }, state) {
      const formattedDate = payload.date.format("MM/DD");
      const response = await axios.get(
        `${API_URL}/feed/onthisday/selected/${formattedDate}`
      );
      const result = get(response.data, "selected", []);
      dispatch.global.saveFeatured(result);
    },
  }),
});

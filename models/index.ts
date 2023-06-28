import { init, Models, RematchDispatch, RematchRootState } from "@rematch/core";

import { global } from "./global";

export interface RootModel extends Models<RootModel> {
  global: typeof global;
}

export const models: RootModel = {
  global,
};

export const store = init({
  models,
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;

import { createAction } from "./create-action";

export interface InitSuccess {
  readonly token: string;
}

export const INIT = createAction("INIT");

import { INIT, InitSuccess } from "../actions/init";

interface State {
  readonly token: string;
}

interface Action {
  readonly type: string;
}

interface InitSuccessAction extends Action {
  readonly payload: InitSuccess;
}

function onInitSuccess(state: State, action: InitSuccessAction) {
  return {
    ...state,
    token: action.payload.token
  };
}

const STATE = {
  token: ""
};

export function me(state: State = STATE, action: Action): State {
  switch (action.type) {
    case INIT.SUCCESS:
      return onInitSuccess(state, action as InitSuccessAction);

    default:
      return state;
  }
}

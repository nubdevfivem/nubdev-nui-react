/* Context Api State to Store */

import React, {
  useReducer,
  createContext,
  Dispatch,
  ReducerAction,
  useContext,
  FC,
} from 'react';

export interface Action {
  type: string;
  payload: any;
}

export interface ContextState {
  theme: any;
}

interface StateContextValue {
  state: ContextState;
  dispatch: Dispatch<ReducerAction<typeof reducer>>;
}

const initalState: ContextState = {
  theme: 'white',
};

export const StateContext = createContext<StateContextValue>({
  state: initalState,
  dispatch: () => {},
});

const reducer = (state: ContextState, action: Action) => {
  switch (action.type) {
    case 'SET_THEME':
      return { ...state, theme: action.payload };
      
    default:
      throw new Error();
  }
};

interface Props {
  children: React.ReactNode;
}

export const StateProvider: FC<Props> = (props) => {
  const [state, dispatch] = useReducer(reducer, initalState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {props.children}
    </StateContext.Provider>
  );
};

export const useStateProvider = () => {
  const { state, dispatch } = useContext(StateContext);
  return { state, dispatch };
};

export default StateProvider;

import { ReactElement, createContext, useCallback, useReducer } from "react";

type StateType = {
	token: string | null;
};

const initState: StateType = { token: null };

const enum REDUCER_ACTION_TYPE {
	SET_TOKEN,
}

type ReducerAction = {
	type: REDUCER_ACTION_TYPE;
	payload?: string;
};

const reducer = (state: StateType, action: ReducerAction): StateType => {
	switch (action.type) {
		case REDUCER_ACTION_TYPE.SET_TOKEN:
			return { ...state, token: action.payload ?? "" };

		default:
			throw new Error();
	}
};

const useAuthContext = (initState: StateType) => {
	const [state, dispatch] = useReducer(reducer, initState);

	const setToken = useCallback(
		(token: string) =>
			dispatch({ type: REDUCER_ACTION_TYPE.SET_TOKEN, payload: token }),
		[],
	);

	return { state, setToken };
};

type UseAuthContextType = ReturnType<typeof useAuthContext>;

const initContextState: UseAuthContextType = {
	state: initState,
	setToken: () => {},
};

export const AuthContext = createContext<UseAuthContextType>(initContextState);

type ChildrenType = {
	children?: ReactElement | ReactElement[] | undefined;
};

export const AuthProvider = ({ children }: ChildrenType): ReactElement => {
	return (
		<AuthContext.Provider value={useAuthContext(initState)}>
			{children}
		</AuthContext.Provider>
	);
};

import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

export type InitialContent = { home: Record<string, unknown>; ux: Record<string, unknown> };

// One store per rendered application; never share mutable state between renders.
export function makeStore(content: InitialContent) {
  const sagaMiddleware = createSagaMiddleware();
  const initial = rootReducer(undefined, { type: "@@INIT" });
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: {
      ...initial,
      home: { ...initial.home, screenData: content.home, isLoading: false },
      ux: { ...initial.ux, screenData: content.ux, isLoading: false },
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
  });
  if (typeof window !== "undefined") sagaMiddleware.run(rootSaga);
  return store;
}

export type AppStore = ReturnType<typeof makeStore>;

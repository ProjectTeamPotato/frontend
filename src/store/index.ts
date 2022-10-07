import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import rootSaga from "./sagas";

export default function configureMainStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware, logger],
    devTools: process.env.NODE_ENV !== "production",
  });
  sagaMiddleware.run(rootSaga);
  return { store };
}

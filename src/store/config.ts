import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import popupSlice from "./slices/popupSlice";

const rootReducer = combineReducers({
    popup: popupSlice.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type Rootstate = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<Rootstate> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
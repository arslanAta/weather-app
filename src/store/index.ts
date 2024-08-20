import { configureStore } from "@reduxjs/toolkit";
import { weatherapi } from "./weather/weather.api";

export const store = configureStore({
    reducer:{
        [weatherapi.reducerPath]:weatherapi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(weatherapi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
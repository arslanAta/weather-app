import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IWeather } from "../../models/models";

const apiKey = "a6d95e2d4c9261bb42b97f86f5344487"

export const weatherapi = createApi({
    reducerPath:'weather/api',
    baseQuery:fetchBaseQuery({
        baseUrl:"https://api.openweathermap.org/data/2.5/"
    }),
    endpoints:build=>({
        getWeather:build.query<IWeather,string>({
            query:(city)=>({
                url:'weather',
                params:{
                    q:city,
                    appid:apiKey,
                    units:"metric"    
                }
            })
        })
    })
})
export const {useGetWeatherQuery} = weatherapi
 
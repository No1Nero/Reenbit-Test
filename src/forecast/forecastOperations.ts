import axios from "axios"
import { ITrip } from "../models/TripModel";
import {Dispatch, SetStateAction} from 'react';
import { IForecast } from "../models/ForecastModel";

interface getForecastForTripProps {
    selectedTrip: ITrip | null,
    setForecast: Dispatch<SetStateAction<IForecast[]>>,
};

interface getForecastForTodayProps {
    city: string,
    setSelectedTrpForecast: Dispatch<SetStateAction<IForecast | null>>,
};

export const getForecastForToday = ({city, setSelectedTrpForecast}: getForecastForTodayProps) => {
    axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?unitGroup=metric&include=days&key=9FEN6GRH2BJCSWCDF4XSWJRA4&contentType=json`)
    .then(response => setSelectedTrpForecast(response.data.days[0]));
};

export const getForecastForTrip = ({selectedTrip, setForecast}: getForecastForTripProps ) => {
    axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${selectedTrip!.city}/${selectedTrip!.forDate}/${selectedTrip!.toDate}?unitGroup=metric&include=days&key=9FEN6GRH2BJCSWCDF4XSWJRA4&contentType=json`)
    .then(response => setForecast(response.data.days));
};
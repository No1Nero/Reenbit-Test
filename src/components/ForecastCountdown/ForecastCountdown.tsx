import { useEffect, useState } from 'react';
import { ITrip } from '../../models/TripModel';
import s from './ForecastCountdown.module.css';
import { IForecast } from '../../models/ForecastModel';
import { getForecastForToday } from '../../forecast/forecastOperations';
import ForecastIcon from '../ForecastIcon/ForecastIcon';
import CountdownTimer from '../CountdownTimer/CountdownTimer';

interface ForecastCountdownProps {
    selectedTrip: ITrip | null,
};

export default function ForecastCountdown({selectedTrip}: ForecastCountdownProps) {
    const [selectedTripForecast, setSelectedTrpForecast] = useState<IForecast | null>(null);

    useEffect(() => {
        if (selectedTrip) {
            getForecastForToday({city: selectedTrip.city, setSelectedTrpForecast});
        }
    }, [selectedTrip]);

    return (
        <div className={s.forecast_container}>
            {selectedTripForecast &&
                <div className={s.forecast_div}>
                    <div className={s.forecast_wrapper}>
                        <p className={s.forecast_datetime}>{selectedTripForecast.datetime}</p>
                        <div className={s.icon_forecast_container}>
                            <ForecastIcon icon={selectedTripForecast.icon} size={120} />
                            <span className={s.forecast_temp}>{selectedTripForecast.temp}°</span>
                        </div>
                        <p className={s.forecast_city}>{selectedTrip?.city}</p>
                    </div>
                    <CountdownTimer tripDate={selectedTrip!.forDate} />
                </div>
            }
        </div>
    );
};
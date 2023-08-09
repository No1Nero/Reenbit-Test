import { IForecast } from '../../models/ForecastModel';
import ForecastIcon from '../ForecastIcon/ForecastIcon';
import s from './TripForecastItem.module.css';

interface TripForecastItemProps {
    dayForecast: IForecast,
};

export default function TripForecastItem({dayForecast}: TripForecastItemProps) {
    const {datetime, icon, tempmax, tempmin} = dayForecast;
    return (
        <div className={s.forecast_item_container}>
            <p>{datetime}</p>
            <ForecastIcon icon={icon}/>
            <p>{tempmax}° / {tempmin}°</p>
        </div>
    );
};
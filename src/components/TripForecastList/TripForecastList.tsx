import { useEffect, useState } from 'react';
import { ITrip } from '../../models/TripModel';
import s from './TripForecastList.module.css';
import { getForecastForTrip } from '../../forecast/forecastOperations';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TripForecastItem from '../TripForecastItem/TripForecastItem';
import { IForecast } from '../../models/ForecastModel';

interface TripForecastProps {
    selectedTrip: ITrip | null
};

export default function TripForecastList({selectedTrip}: TripForecastProps) {
    const [forecast, setForecast] = useState<IForecast[]>([]);
    var settings = {
        slidesToShow: 7,
        slidesToScroll: 1,
        swipe: true,
        draggable: true,
        accessibility: true,
        arrows: false,
        dots: false,
        infinite: false,
        pauseOnHover: false,
        swipeToSlide: true
    }

    useEffect(() => {
        if (selectedTrip) {
            getForecastForTrip({selectedTrip, setForecast});
        }
    }, [selectedTrip]);
    
    return (
        <div>
            <p className={s.forecast_header}>Week</p>
            {forecast.length !== 0 &&
            <div>
                <Slider className={s.forecast_slider} {...settings}>
                    {forecast.map((dayForecast) => (
                        <div key={dayForecast.datetimeEpoch}>
                            <TripForecastItem dayForecast={dayForecast} />
                        </div>
                    ))}
                </Slider>
            </div>
            }
        </div>
    );
};
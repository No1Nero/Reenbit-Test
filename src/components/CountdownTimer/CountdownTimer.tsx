import { useState, useEffect } from 'react';
import s from './CountdownTimer.module.css';

interface CountdownTimerProps {
    tripDate: string,
};


export default function CountdownTimer({tripDate}: CountdownTimerProps) {
    const [[diffDays, diffHours, diffMinutes, diffSeconds], setDiff] = useState([0, 0, 0, 0]);

    useEffect(() => {
        const futureDateTrip: any = new Date(tripDate);

        const interval = setInterval(() => {
            const currentDate: any = new Date();
            const timeDifference = futureDateTrip - currentDate;

            if(timeDifference <= 0) {
                setDiff([0, 0, 0, 0]);
            } else {
                setDiff([
                    Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
                    Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)),
                    Math.floor((timeDifference % (1000 * 60)) / 1000)
                ]);
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [tripDate]);

    return (
        <div className={s.countdown_container}>
            <div className={s.countdown_time_container}>
                <p className={s.countdown_time}>{diffDays}</p>
                <p className={s.countdown_title}>DAYS</p>
            </div>
            <div className={s.countdown_time_container}>
                <p className={s.countdown_time}>{diffHours}</p>
                <p className={s.countdown_title}>HOURS</p>
            </div>
            <div className={s.countdown_time_container}>
                <p className={s.countdown_time}>{diffMinutes}</p>
                <p className={s.countdown_title}>MINUTES</p>
            </div>
            <div className={s.countdown_time_container}>
                <p className={s.countdown_time}>{diffSeconds}</p>
                <p className={s.countdown_title}>SECONDS</p>
            </div>
        </div>
    );
};
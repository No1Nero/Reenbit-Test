import {Dispatch, SetStateAction} from 'react';
import { ITrip } from '../../models/TripModel';
import classNames from 'classnames';
import s from './TripsItem.module.css';

interface TripItemProps {
    trip: ITrip,
    selectedTrip: ITrip | null,
    onSetSelectedTrip: Dispatch<SetStateAction<ITrip | null>>
};

export default function TripsItem({trip, selectedTrip, onSetSelectedTrip}: TripItemProps) {
    const {id, image, forDate, toDate, city} = trip;

    return (
        <div onClick={() => onSetSelectedTrip(trip)} className={selectedTrip?.id === id ? classNames(s.selected_trip_item_wrapper, s.item_container) : s.item_container}>
            <img className={s.item_image} alt={city} src={image} />
            <div className={s.item_data_container}>
                <p className={s.item_city}>{city}</p>
                <p className={s.item_date}>{forDate} - {toDate}</p>
            </div>
        </div>
    );
};


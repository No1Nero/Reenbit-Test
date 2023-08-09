import TripsItem from '../TripsItem/TripsItem';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from './TripsList.module.css';
import { useEffect, useState, Dispatch, SetStateAction } from 'react';
import Modal from '../Modal/Modal';
import { ITrip } from '../../models/TripModel';
import {BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs';

interface TripListProps {
    trips: ITrip[],
    selectedTrip: ITrip | null,
    onSetSelectedTrip: Dispatch<SetStateAction<ITrip | null>>,
};
export default function TripsList({trips, onSetSelectedTrip, selectedTrip}: TripListProps) {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [pageIndex, setPageIndex] = useState(0);
    const [visibleTrips, setVisibleTrips] = useState<ITrip[]>([]);
    
    useEffect(() => {
        setVisibleTrips(trips.slice(pageIndex, pageIndex + 3));
    }, [pageIndex, trips]);

    return (
        <>
        {openModal && <Modal onSetOpenModal={setOpenModal}/>}
        <div className={s.trips_list_container}>
            <div className={s.slider_container}>
                <button onClick={() => setPageIndex(pageIndex => pageIndex - 1)} disabled={pageIndex === 0} className={s.slider_arrow}><BsArrowLeftShort size={25} /></button>
                {visibleTrips.map(trip => (
                    <div key={trip.id}>
                        <TripsItem selectedTrip={selectedTrip} onSetSelectedTrip={onSetSelectedTrip} trip={trip}/>
                    </div>
                ))}
                <button onClick={() => setPageIndex(pageIndex => pageIndex + 1)} disabled={pageIndex + 2 >= trips.length - 1} className={s.slider_arrow}><BsArrowRightShort size={25} /></button>
            </div>
            <div onClick={() => setOpenModal(true)} className={s.add_trip_container}>
                <p className={s.add_trip_plus}>+</p>
                <p className={s.add_trip_title}>Add trip</p>
            </div>
        </div>
        </>
    );
};

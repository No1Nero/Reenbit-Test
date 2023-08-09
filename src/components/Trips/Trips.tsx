import { useEffect, useState, Dispatch, SetStateAction } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import SearchBar from '../Searchbar/Searchbar';
import TripsList from '../TripsList/TripsList';
import s from './Trips.module.css';
import { ITrip } from '../../models/TripModel';
import TripForecastList from '../TripForecastList/TripForecastList';
import FilterByDate from '../FilterByDate/FilterByDate';

interface TripsProps {
    selectedTrip: ITrip | null,
    onSetSelectedTrip: Dispatch<SetStateAction<ITrip | null>>,
};
export default function Trips({selectedTrip, onSetSelectedTrip}: TripsProps) {
    const [searching, setSearching] = useState<string>('');
    const [filteredTrips, setFilteredTrips] = useState<ITrip[]>([]);
    const [sortByDateStatus, setSortByDateStatus] = useState<boolean>(false);
    const [toggleSortedTrips, setToggleSortedTrips] = useState<ITrip[]>([]);
    const {trips} = useTypedSelector((state) => state);

    useEffect(() => {
        setFilteredTrips(trips.filter((trip) => trip.city.toLowerCase().includes(searching.toLowerCase())));
    }, [searching, trips]);

    useEffect(() => {
        if (sortByDateStatus) {
            setToggleSortedTrips([...filteredTrips].sort((a, b): any => {
                const aDate: any = new Date(a.forDate);
                const bDate: any = new Date(b.forDate);
                return aDate - bDate;
            }));
        } else {
            setToggleSortedTrips(filteredTrips);
        }
    }, [sortByDateStatus, filteredTrips]);

    return (
        <div className={s.trips_container}>
            <p className={s.header}>Weather <strong>Forecast</strong></p>
            <div className={s.search_filter_container}>
                <SearchBar searching={searching} onSetSearching={setSearching} />
                <FilterByDate setSortByDateStatus={setSortByDateStatus} sortByDateStatus={sortByDateStatus} />
            </div>
            <TripsList selectedTrip={selectedTrip} onSetSelectedTrip={onSetSelectedTrip} trips={toggleSortedTrips}/>
            <TripForecastList selectedTrip={selectedTrip} />
        </div>
    );
};
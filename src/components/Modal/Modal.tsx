import React, { Dispatch, SetStateAction, useContext, useState } from 'react';
import {RxCross2} from 'react-icons/rx';
import s from './Modal.module.css';
import { MockTripsContext } from '../../context/MockTripsContext';
import { IMock } from '../../models/MockModel';
import Select from 'react-select';
import { store } from '../../store/store';
import { useActions } from '../../hooks/useActions';

interface ModalProps {
    onSetOpenModal: Dispatch<SetStateAction<boolean>>
};
export default function Modal({onSetOpenModal}: ModalProps) {
    const [selectedCity, setSelectedCity] = useState<IMock | null>(null);
    const [startDayTrip, setStartDayTrip] = useState<string>('');
    const [endDayTrip, setEndDayTrip] = useState<string>('');
    const mockTrips: IMock[] = useContext(MockTripsContext);
    const  {trips} = store.getState();
    const {addTrip} = useActions();

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const {value, name} = e.currentTarget;
        switch(name) {
            case 'startDate':
                setStartDayTrip(value);
                break;

            case 'endDate':
                setEndDayTrip(value);
                break;

            default:
                return;
        };
    };

    const confirmTrip = () => {
        const obj = {
            id: trips.length + 1,
            image: selectedCity!.image,
            forDate: startDayTrip,
            toDate: endDayTrip,
            city: selectedCity!.value,
        };
        addTrip(obj);
        onSetOpenModal(false);
    };

    return (
        <div className={s.modal_window}>
            <div className={s.modal_blur} onClick={() => onSetOpenModal(false)} />
            <div className={s.modal_content}>
                <div className={s.modal_header_container}>
                    <p>Create trip</p>
                    <button onClick={() => onSetOpenModal(false)} className={s.modal_exit_button}><RxCross2 size={25} /></button>
                </div>
                <div className={s.modal_inputs_container}>
                    <div className={s.modal_input_container}>
                        <p className={s.modal_input_title}>City</p>
                        <Select placeholder='Please select a city' defaultValue={selectedCity} onChange={setSelectedCity} options={mockTrips} />
                    </div>
                    <div className={s.modal_input_container}>
                        <p className={s.modal_input_title}>Start date</p>
                        <input className={s.modal_input} onChange={handleChange} value={startDayTrip} name='startDate' type='date' placeholder='Select date' max={(new Date(new Date().getTime() + 15 * 24 * 60 * 60 * 1000)).toISOString().split('T')[0]} min={(new Date(new Date().getTime() + 1 * 24 * 60 * 60 * 1000)).toISOString().split('T')[0]} />
                    </div>
                    <div className={s.modal_input_container}>
                        <p className={s.modal_input_title}>End date</p>
                        <input className={s.modal_input} onChange={handleChange} value={endDayTrip} name='endDate' type='date' placeholder='Select date' max={(new Date(new Date().getTime() + 15 * 24 * 60 * 60 * 1000)).toISOString().split('T')[0]} min={(new Date(new Date().getTime() + 1 * 24 * 60 * 60 * 1000)).toISOString().split('T')[0]} />
                    </div>
                </div>
                <div className={s.button_container}>
                    <button onClick={() => onSetOpenModal(false)} className={s.modal_button_cancel}>Cancel</button>
                    <button onClick={confirmTrip} disabled={!selectedCity || !startDayTrip || !endDayTrip} className={s.modal_button_save}>Save</button>
                </div>
            </div>
        </div>
    );
};
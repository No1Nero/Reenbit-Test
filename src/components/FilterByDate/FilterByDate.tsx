import { Dispatch, SetStateAction } from 'react';
import {AiOutlineCalendar} from 'react-icons/ai';
import classNames from 'classnames';
import s from './FilterByDate.module.css';

interface FilterByDateProps {
    setSortByDateStatus: Dispatch<SetStateAction<boolean>>,
    sortByDateStatus: boolean,
};

export default function FilterByDate({setSortByDateStatus, sortByDateStatus}: FilterByDateProps) {
    return (
        <div onClick={() => setSortByDateStatus(status => !status)} className={sortByDateStatus ? classNames(s.sort_button, s.sort_button_active) : s.sort_button}>
            <AiOutlineCalendar size={30} />
        </div>
    );
};

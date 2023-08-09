import { Dispatch, SetStateAction } from 'react';
import s from './Searchbar.module.css';
import {AiOutlineSearch} from 'react-icons/ai';

interface SearchBarProps {
    searching: string,
    onSetSearching: Dispatch<SetStateAction<string>>
};
export default function SearchBar({onSetSearching, searching}: SearchBarProps) {
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        onSetSearching(e.currentTarget.value);
    };
    return (
        <div>
            <form className={s.searchbar_form}>
                <button onClick={(e: React.FormEvent<HTMLButtonElement>) => e.preventDefault()} className={s.searchbar_button} type='submit'><AiOutlineSearch size={25} /></button>
                <input value={searching} onChange={handleChange} className={s.searchbar_input} placeholder='Search your trip' type='text'  />
            </form>
        </div>
    );
};
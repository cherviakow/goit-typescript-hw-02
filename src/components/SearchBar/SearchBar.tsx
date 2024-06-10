import { ChangeEvent, FormEvent, useState } from "react";
import css from './SearchBar.module.css'
import { FaSearch } from 'react-icons/fa';
import React from "react";

type SearchResultProps = {
    onSubmit: (inputValue: string) => void;
}

const SearchBar: React.FC<SearchResultProps> = ({onSubmit}) => {
   const [search, setSearch] = useState('');

const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(search.trim());
        setSearch('');
    }    

const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    }
        return (
            <header className={css.searchBar}>
            <form onSubmit={handleSubmit} className={css.form}>
                <button type="submit" className={css.btn}><FaSearch size='12px' /></button>
                <input
                    onChange={handleInputChange}
                    value={search}
                    type="text"
                    className={css.input}
                    placeholder="Search photos"
                />
            </form>
        </header>
        );
    }
 
export default SearchBar;
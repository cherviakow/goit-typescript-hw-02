import { ChangeEvent, useState } from "react";
import css from './SearchBar.module.css'
import { FaSearch } from 'react-icons/fa';
import React from "react";

// const SearchBar = ({onSubmit}) => {
//    const [search, setSearch] = useState('');

//    const searchResult = event => {
//         setSearch(event.currentTarget.value);
//     }

// const handleSubmit = event => {
//     event.preventDefault();
//     onSubmit(search.trim());
//     setSearch('');

//     console.log('click');
// } 

type searchResult = {
    setSearch: (inputValue: string) => void;
}

const SearchBar: React.FC<searchResult> = ({onSubmit}) => {
   const [search, setSearch] = useState('');

const handleSubmit = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        onSubmit(search.trim());
        setSearch('');

        console.log('click');
    }    



        return (
            <header className={css.searchBar}>
                <form onSubmit={handleSubmit} action="submit" className={css.form}>
                    <button className={css.btn}><FaSearch size='12px'/></button>
                    <input onChange={searchResult}  type="text" className={css.input}
                    placeholder="Search photos"/>
            
                </form>

            </header>
        );
    }
 
export default SearchBar;
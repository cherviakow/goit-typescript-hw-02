
import css from './button.module.css'
import React from 'react';

interface ButtonProps {
onClick: () => void;
}



export const Button: React.FC<ButtonProps> = ({onClick}) => {
    return (
        <button className={css.buttonLoad} type="button" onClick={onClick}>
            Load More
        </button>
    )
}


import { RotatingLines } from 'react-loader-spinner';
import css from './Loader.module.css';
import React from 'react';

interface LoaderProps {

}


export const Loader: React.FC<LoaderProps> = () => {
    return (
      <div className={css.loader}>
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </div>
    );
  };
import React from 'react'
import {ReactComponent as SearchIcon} from './search.svg';
import style from './Search.module.scss';



type Props = {}

export const Search = (props: Props) => {
  const handlerSubmit = (e: React.FormEvent<EventTarget>) => {
    console.log(`button search e`, e);
    e.preventDefault();
  }

  return (
    <form className={style.search} onSubmit={handlerSubmit}>
      <input type="search" className={style.search} name="search" id="search" />
      <button className={style.btn} type="submit" title="push submit button">
        <SearchIcon />
      </button>
    </form>
  )
};

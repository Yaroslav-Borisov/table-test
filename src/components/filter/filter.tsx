import style from './filter.module.css';
import { useAppDispatch } from '../../hooks/redux';
import { userSlice } from '../../store/reducers/UserSlice';
import { useState } from 'react';

export const Filter = () => {
	const dispatch = useAppDispatch();
    const [searchText, setSearchText] = useState('');

    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value.trim().toLowerCase());
	};

    const search = () => {
        dispatch(userSlice.actions.setSearchText(searchText));
    };


    return (
        <div className={style['filter']}>
			<input onChange={inputChangeHandler} value={searchText} type="text" placeholder="Что ищем?" />
			<div className={style['button']} onClick={() => search()}>Найти</div>
		</div>
    );
};
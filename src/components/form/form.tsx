/* eslint-disable no-case-declarations */
/* eslint-disable no-useless-escape */

import { useState } from 'react';
import style from './form.module.css';
import { useInput } from '../../hooks/useInput';
import { EMAIL_ERROR, EMPTY_STRING_ERR, ID_ERROR, LETTER_ERROR, PHONE_ERROR } from '../../constants';
import { useAppDispatch } from '../../hooks/redux';
import { userSlice } from '../../store/reducers/UserSlice';
import { converFormDataToUser } from '../../utils/utils';


export const Form = () => {
    const dispatch = useAppDispatch();
    const [isOpen, setIsOpen] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const formData = Object.fromEntries(form);
        setIsOpen(false);
        
        const newUser = converFormDataToUser(formData);

        dispatch(userSlice.actions.addNewUser(newUser));
        dispatch(userSlice.actions.setCurrentPage(1));
    };

    const id = useInput('', {isEmpty: true, isNumber: true}, isOpen);
    const firstname = useInput('', {isEmpty: true, isLetter: true}, isOpen);
    const lastname = useInput('', {isEmpty: true, isLetter: true}, isOpen);
    const email = useInput('', {isEmpty: true, isEmail: true}, isOpen);
    const phone = useInput('', {isEmpty: true, isPhone: true}, isOpen);

    return (<>
    {isOpen ?
        <form className={style['form']} onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="user-id">Id: </label>
            {(id.isDirty && id.isEmpty) && <div className={style['error']}>{EMPTY_STRING_ERR}</div>}
            {(id.isDirty && id.isNumber) && <div className={style['error']}>{ID_ERROR}</div>}
            <input value={id.value} onChange={(e) => id.onChange(e)} onBlur={() => id.onBlur()} id="user-id" type="text" name='id'></input>

            <label htmlFor="user-firstname">Firstname: </label>
            {(firstname.isDirty && firstname.isLetter) && <div className={style['error']}>{LETTER_ERROR}</div>}
            {(firstname.isDirty && firstname.isEmpty) && <div className={style['error']}>{EMPTY_STRING_ERR}</div>}
            <input value={firstname.value} onChange={(e) => firstname.onChange(e)} onBlur={() => firstname.onBlur()} id="user-firstname" type="text" name='firstName'></input>
            
            <label htmlFor="user-lastname">Lastname: </label>
            {(lastname.isDirty && lastname.isLetter) && <div className={style['error']}>{LETTER_ERROR}</div>}
            {(lastname.isDirty && lastname.isEmpty) && <div className={style['error']}>{EMPTY_STRING_ERR}</div>}
            <input value={lastname.value} onChange={(e) => lastname.onChange(e)} onBlur={() => lastname.onBlur()} id="user-lastname" type="text" name='lastName'></input>

            <label htmlFor="user-email">Email: </label>
            {(email.isDirty && email.isEmpty) && <div className={style['error']}>{EMPTY_STRING_ERR}</div>}
            {(email.isDirty && email.emailError) && <div className={style['error']}>{EMAIL_ERROR}</div>}
            <input value={email.value} onChange={(e) => email.onChange(e)} onBlur={() => email.onBlur()} id="user-email" type="text" name='email'></input>
            
            <label htmlFor="user-phone">Phone: </label>
            {(phone.isDirty && phone.isEmpty) && <div className={style['error']}>{EMPTY_STRING_ERR}</div>}
            {(phone.isDirty && phone.isPhone) && <div className={style['error']}>{PHONE_ERROR}</div>}
            <input value={phone.value} onChange={(e) => phone.onChange(e)} onBlur={() => phone.onBlur()} id="user-phone" type="text" name='phone'></input>

            <button disabled={!email.inputValid || !id.inputValid || !phone.inputValid || !firstname.inputValid || !lastname.inputValid} className={style['button']} type='submit'>Добавить в таблицу</button>
        </form>
        :
        <button className={style['button']} onClick={() => setIsOpen(true)}>Добавить</button>
    }
    </>);
};
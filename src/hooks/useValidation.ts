/* eslint-disable no-useless-escape */
/* eslint-disable no-case-declarations */
import { useEffect, useState } from 'react';


export const useValidation = (value: string, validations: object) => {
    const [isEmpty, setEmpty] = useState(true);
    const [emailError, setEmailError] = useState(false);
    const [isNumber, setNumber] = useState(false);
    const [isPhone, setPhone] = useState(false);
    const [isLetter, setLetter] = useState(false);
    const [inputValid, setInputValid] = useState(false);

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true);
                    break;
                case 'isEmail':
                    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                    re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true);
                    break;
                case 'isNumber':
                    isNaN(Number(value)) ? setNumber(true) : setNumber(false);
                    break;
                case 'isPhone':
                    (!isNaN(Number(value)) && String(value).length === 10) ? setPhone(false) : setPhone(true);
                    break;
                case 'isLetter':
                    const reg = /[а-яА-ЯёЁ, a-zA-Z]+/;
                    reg.test(value) ? setLetter(false) : setLetter(true);
                    break;

            }
        }
    }, [value]);

    useEffect(() => {
        isEmpty || emailError || isNumber || isPhone || isLetter ? setInputValid(false) : setInputValid(true);
    }, [isEmpty, emailError, isNumber, isPhone, isLetter]);

    return { isEmpty, emailError, isNumber, isPhone, isLetter, inputValid };
};
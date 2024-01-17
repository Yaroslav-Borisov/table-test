import { useState, useEffect } from 'react';
import { useValidation } from './useValidation';

export const useInput = (initialValue: string, validations: object, isOpen: boolean) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setDirty] = useState(false);

    const valid = useValidation(value, validations);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const onBlur = () => {
        setDirty(true);
    };

    useEffect(() => {
        if (!isOpen) {
            setValue('');
            setDirty(false);
        }
    }, [isOpen]);

    return { value, onChange, onBlur, isDirty, ...valid };
};
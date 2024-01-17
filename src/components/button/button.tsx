import { useAppDispatch } from '../../hooks/redux';
import { fetchUsers } from '../../store/reducers/ActionCreators';
import style from './button.module.css';
import { ButtonPropsType } from './button.props';

export const Button = ({children, dataSize, setStart}: ButtonPropsType) => {
	const dispatch = useAppDispatch();

    const clickHandler = () => {
        setStart(true);
        dispatch(fetchUsers(dataSize));
    };

    return (
        <div className={style['button']} onClick={clickHandler}>
            {children}
        </div>
    );
};
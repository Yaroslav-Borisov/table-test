import { TableBodyRowPropsType } from './tableBodyRow.props';
import { nanoid } from 'nanoid';
import style from './tableBodyRow.module.css';
import { useAppDispatch } from '../../hooks/redux';
import { userSlice } from '../../store/reducers/UserSlice';

export const TableBodyRow = ({value, columns}: TableBodyRowPropsType) => {

    const dispatch = useAppDispatch();

    const click = (id: number, email: string) => {
        const targetKeys = {id: id, email: email};
        dispatch(userSlice.actions.setTargetUser(targetKeys));
    };

    return (
        <>
            {value.map((item) => (
                <tr key={nanoid()} onClick={() => click(item.id, item.email)}>
                    {columns.map((col) => (
                        <td key={col.field} className={style['table-data']}>{item[col.field] || ''}</td>
                    ))}
                </tr>
            ))}
        </>
    );
};
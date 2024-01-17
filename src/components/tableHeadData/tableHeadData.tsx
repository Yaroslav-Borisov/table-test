import { TableHeadDataPropsType } from './tableHeadData.props';
import style from './tableHeadData.module.css';
import { SortType } from '../../constants';
import { TriangleIcon } from '../triangleIcon/triangleIcon';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { userSlice } from '../../store/reducers/UserSlice';


export const TableHeadData = ({column}: TableHeadDataPropsType) => {
    const dispatch = useAppDispatch();
	const {sort} = useAppSelector(state => state.userReducer);

    const setSortData = () => {
        dispatch(userSlice.actions.setSortField(column.field));
    };

    return (
        <th key={column.field} className={style['table-header']} onClick={() => setSortData()}>
			<span className={style['header-text']}>{column.header}</span>
            {sort.sortingField === column.field ? <TriangleIcon sortName={sort.sortType}/> : <TriangleIcon sortName={SortType.None}/>}
		</th>
    );
};
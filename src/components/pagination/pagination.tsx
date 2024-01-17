import { PaginationPropsType } from './pagination.props';
import { useAppDispatch } from '../../hooks/redux';
import { userSlice } from '../../store/reducers/UserSlice';
import style from './pagination.module.css';

const Pagination = ({itemsPerPage, totalItems, currentPage}: PaginationPropsType) => {
	const pageNumbers = [];
	const dispatch = useAppDispatch();

	for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<div>
			<ul className={style['pagination']}>
				{pageNumbers.map((number) => 
				<li className={`${style.item} ${currentPage === number ? style.active : ''}`} key={number} onClick={() => dispatch(userSlice.actions.setCurrentPage(number))}>
					{number}
				</li>)}
			</ul>
		</div>
	);
};

export default Pagination;
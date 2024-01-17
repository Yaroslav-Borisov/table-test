import { TablePropsType } from './table.props';
import style from './table.module.css';
import { TableHeadData } from '../tableHeadData/tableHeadData';
import { TableBodyRow } from '../tableBodyRow/tableBodyRow';


const Table = ({value, columns}: TablePropsType) => {
	return (
		<table className={style['table']}>
			<thead>
				<tr>
					{columns.map((col) => (
						<TableHeadData column={col} key={col.field}/>
					))}
				</tr>
			</thead>
			<tbody>
				<TableBodyRow value={value} columns={columns}/>
			</tbody>
		</table>
	);
};

export default Table;
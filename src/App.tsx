import { useState } from 'react';
import './App.css';
import Table from './components/table/table';
import Pagination from './components/pagination/pagination';
import { useAppSelector } from './hooks/redux';
import { Filter } from './components/filter/filter';
import { UserInfo } from './components/userInfo/userInfo';
import { COLUMNS } from './constants';
import { StartButtons } from './components/startButtons/startButtons';
import { Form } from './components/form/form';

const App = () => {
	const {isLoading, error, currentUsers, sortedUsers, usersPerPage, currentPage, targetUser} = useAppSelector(state => state.userReducer);
	const [start, setStart] = useState(false);

	return (
		<>	
			{!start ? <StartButtons setStart={setStart}/> :
				<>
					{error && <h3>{error}</h3>}
					{isLoading && <h3>Идёт загрузка...</h3>}
					{isLoading || error ? <></> :  
					<>
						<Pagination totalItems={sortedUsers.length} itemsPerPage={usersPerPage} currentPage={currentPage}/>
						<div className='form-filter-wrapper'>
							<Form/>
							<Filter/>
						</div>
						<Table value={currentUsers} columns={COLUMNS}></Table>
						<UserInfo user={targetUser}/>
					</>}
				</>
			}
		</>
	);
};

export default App;

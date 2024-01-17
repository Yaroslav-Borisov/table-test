import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser, ISortData, TargetKeysType } from '../../types/types';
import { fetchUsers } from './ActionCreators';
import { getCurrentItems, getFilteredItems, getSortedItems } from '../../utils/utils';
import { SORT_TYPE_MAP, SortType } from '../../constants';

interface UserState {
    users: IUser[];
    sortedUsers: IUser[];
    isLoading: boolean;
    error: string;
    currentPage: number;
    currentUsers: IUser[];
    usersPerPage: number;
    sort: ISortData;
    search: string;
    targetUser: IUser;
}

const initialState: UserState = {
    users: [],
    sortedUsers: [],
    isLoading: false,
    error: '',
    currentPage: 1,
    currentUsers: [],
    usersPerPage: 50,
    sort: {
        sortType: SortType.None,
        sortingField: ''
    },
    targetUser: {
        id: 0,
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: {
            streetAddress: '',
            city: '',
            state: '',
            zip: ''
        },
        description: ''
    },
    search: ''
};

export const userSlice = createSlice({
    name: 'user', initialState,
    reducers: {
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload;
            state.currentUsers = getCurrentItems(state.sortedUsers, state.currentPage, state.usersPerPage);
        },
        setSortField(state, action: PayloadAction<string>) {
            if (action.payload !== state.sort.sortingField) {
                state.sort.sortType = SortType.None;
            }
            state.sort.sortingField = action.payload;
            state.sort.sortType = SORT_TYPE_MAP[state.sort.sortType];
            state.sortedUsers = getSortedItems(state.users, state.sort.sortType, state.sort.sortingField) as IUser[];
            state.currentUsers = getCurrentItems(state.sortedUsers, state.currentPage, state.usersPerPage);
        },
        setTargetUser(state, action: PayloadAction<TargetKeysType>) {
            const targetItem = state.users.find(item => item.id === action.payload.id && item.email === action.payload.email);
            state.targetUser = JSON.parse(JSON.stringify(targetItem)) as IUser;
        },
        setSearchText(state, action: PayloadAction<string>) {
            state.search = action.payload;
            state.sortedUsers = getFilteredItems(state.users, state.search) as IUser[];
            state.currentUsers = getCurrentItems(state.sortedUsers, state.currentPage, state.usersPerPage);
        },
        addNewUser(state, action: PayloadAction<IUser>) {
            state.users = [action.payload, ...state.users];
            state.sortedUsers = state.users;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchUsers.fulfilled.type, (state, action: PayloadAction<IUser[]>) => {
                state.isLoading = false;
                state.error = '';
                state.users = action.payload;
                state.sortedUsers = state.users;
                state.currentUsers = getCurrentItems(state.users, state.currentPage, state.usersPerPage);
            })
            .addCase(fetchUsers.pending.type, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchUsers.rejected.type, (state, action: PayloadAction<string>) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export default userSlice.reducer;
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit/react';
import { IUser } from '../../types/types';
import { BASE_URL } from '../../constants';

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (rows, thunkAPI) => {
        try {
            const response = await axios.get<IUser[]>(`${BASE_URL}/?rows=${rows}&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`);
            return response.data;
        } catch (error) {
            if (error instanceof Error) {
                return thunkAPI.rejectWithValue('Не удалось загрузить...');
            }
        }
    }
);
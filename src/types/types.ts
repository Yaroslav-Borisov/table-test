/* eslint-disable @typescript-eslint/no-explicit-any */
import { SortType } from '../constants';

export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: {
        streetAddress: string;
        city: string;
        state: string;
        zip: string;
    };
    description: string;
}

export interface ISortData {
    sortType: SortType,
    sortingField: string
}

export type TableValueType = {
    [key: string]: any
}

export type TableColumnType = {
    column: {
        field: string,
        header: string
    }
}

export type TargetKeysType = {
    id: number,
    email: string
}

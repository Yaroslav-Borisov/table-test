import { COLUMNS, SortType } from '../constants';
import { IUser, TableValueType } from '../types/types';

export const getCurrentItems = (items: IUser[], currentPage: number, itemsPerPage: number) => {
    const lastItemIndex = currentPage * itemsPerPage;
    const firstItemIndex = lastItemIndex - itemsPerPage;

    return items.slice(firstItemIndex, lastItemIndex);
};


export const getSortedItems = (items: TableValueType[], sortType: SortType, sortingField: string) => {
    switch (sortType) {
        case SortType.None:
            return items;
        case SortType.Ascending:
            if (sortingField !== 'id') {
                return items.slice().sort((a, b) => a[sortingField].localeCompare(b[sortingField]));
            } else {
                return items.slice().sort((a, b) => a.id - b.id);
            }
        case SortType.Descending:
            if (sortingField !== 'id') {
                return items.slice().sort((a, b) => b[sortingField].localeCompare(a[sortingField]));
            } else {
                return items.slice().sort((a, b) => b.id - a.id);
            }
    }
};

export const getFilteredItems = (items: IUser[], searchText: string) => {
    if (searchText === '') {
        return items;
    } else {
        const keys = COLUMNS.map(col => col.field);

        const targetItems = items.map((item) => {
            const obj: TableValueType = {};

            keys.forEach((key: string) => {
                obj[key] = (item[key as keyof typeof item]);
            });

            return obj;
        });

        const filteredItems = targetItems.filter((item) => {
            const str = Object.values(item).join(' ').toLowerCase();

            return str.includes(searchText);
        });

        return filteredItems;
    }
};

export const formatPhoneNumber = (p: string) => {
    const formatedPhone = `(${p[0]}${p[1]}${p[2]})${p[3]}${p[4]}${p[5]}-${p[6]}${p[7]}${p[8]}${p[9]}`;
    return formatedPhone;
};

export const converFormDataToUser = (formData: TableValueType) => {
    const user = {
        id: Number(formData.id),
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formatPhoneNumber(formData.phone),
        address: {
            streetAddress: '',
            city: '',
            state: '',
            zip: ''
        },
        description: ''
    };

    return user;
};




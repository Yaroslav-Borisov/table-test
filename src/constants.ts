export enum SortType {
    None = 'None',
    Ascending = 'Ascending',
    Descending = 'Descending'
}

export const SORT_TYPE_MAP = {
    [SortType.None]: SortType.Ascending,
    [SortType.Ascending]: SortType.Descending,
    [SortType.Descending]: SortType.None
};

export const COLUMNS = [
    { field: 'id', header: 'id' },
    { field: 'firstName', header: 'firstname' },
    { field: 'lastName', header: 'lastname' },
    { field: 'email', header: 'email' },
    { field: 'phone', header: 'phone' }
];

export const BASE_URL = 'http://www.filltext.com';

export const BIG_DATA_ROWS = 1000;

export const SMALL_DATA_ROWS = 32;

export const EMPTY_STRING_ERR = 'Поле не может быть пустым';

export const ID_ERROR = 'Id должно быть числом';

export const EMAIL_ERROR = 'Некорректный email';

export const PHONE_ERROR = 'Некорректный phone';

export const LETTER_ERROR = 'Можно использовать только буквы';





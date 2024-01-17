interface TableColumnsType {
    field: string,
    header: string
}

interface TableValueType {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any
}

export interface TablePropsType {
    value: TableValueType[],
    columns: TableColumnsType[]
}
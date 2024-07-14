export type Module = {
    name: string,
    owner: string,
    stars: number
    [key:string]: number|string|boolean|null|string[]|undefined
}
export type SortType = 'ascending' | 'descending'

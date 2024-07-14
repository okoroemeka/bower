import {createContext} from "react";
import {Module, SortType} from "../types.ts";

type ContextProps = {
    modules: Module[],
    loading: boolean,
    error:unknown,
    currentPage: number,
    handleNext: () => void,
    handlePrev: () => void,
    handleSearch: (arg:string) => void,
    handleSortClick: (arg:SortType) => void,
    searchParam: string|null,
    numberOfPages: number
}

export const GetModulesContext = createContext<ContextProps>({
    modules: [],
    loading: false,
    error: null,
    currentPage: 1,
    handleNext: () => {},
    handlePrev: () => {},
    handleSearch: (arg:string) => {},
    handleSortClick: (arg:SortType) => {},
    searchParam: null,
    numberOfPages: 0
})
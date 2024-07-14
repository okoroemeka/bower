import {PropsWithChildren, useEffect, useState} from "react";
import {Module, SortType} from "../types.ts";
import {formatModuleList, getModules, getModulesByPage, PAGE_SIZE, searchModules, sortModules} from "../utils";
import {GetModulesContext} from "../context";


export function GetModulesProvider({children}: PropsWithChildren) {
    const {modules, loading, error} = useGetModules()
    const [searchParam, setSearchParam] = useState('')

    const  searchResult = searchModules(modules, searchParam)

    const numberOfPages = Math.ceil(searchResult.length / PAGE_SIZE)

    const {currentPage, handleNext, handlePrev} = usePagination(numberOfPages)
    const [sortType, setSortType] = useState<SortType|null>(null)

    const sortedModules = sortModules(searchResult, sortType)
    const modulesByPage = getModulesByPage(currentPage, sortedModules)
    const formattedModules = formatModuleList(modulesByPage);

    const values = {
        modules:formattedModules,
        loading,
        error,
        currentPage,
        handleNext,
        handlePrev,
        searchParam,
        handleSearch: setSearchParam,
        handleSortClick: setSortType,
        numberOfPages
    }

    return (
        <GetModulesContext.Provider value={values}>
            {children}
        </GetModulesContext.Provider>
    )
}


function useGetModules(){
    const [modules, setModules] = useState<Module[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {

        (async ()=>{
            try {
                setLoading(true)
                const response = await getModules()
                setModules(response satisfies Module[])
            } catch (e) {
                setError(e)
            }
            setLoading(false)
        })()


    }, [])

    return {modules, loading, error}
}

const usePagination = (numberOfPages: number) => {
    const [currentPage, setCurrentPage] = useState(1)

    const handleNext = () => {
        if(currentPage === numberOfPages) return
        setCurrentPage((prev) => prev + 1)
    }

    const handlePrev = () => {
        if(currentPage === 1) return
        setCurrentPage((prev) => prev - 1)
    }

    return {currentPage, handleNext, handlePrev}
}
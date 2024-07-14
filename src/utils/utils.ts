import {Module, SortType} from "../types.ts";

export const PAGE_SIZE = 5

export function formatModuleList(modules: Module[]) {
    return modules.map((module) => {
        return {
            name: module.name,
            owner: module.owner,
            stars: module.stars
        }
    })
}

export const searchModules = (modules: Module[], searchParam: string) => {
    if (!searchParam.length) return modules

    return modules.filter((module) => {
        return module.name.includes(searchParam)
    })
}

export const sortModules = (modules: Module[], sortType: SortType|null) => {
    if (sortType === null) return modules
    return modules.sort((a, b) => {
        if(sortType === 'ascending') {
            return a.stars - b.stars
        }
        else {
            return b.stars - a.stars
        }
    })
}

export const getModules = async () => {
    try {
        const response = await fetch(`https://libraries.io/api/search?q=grunt&api_key=e2ec4ef90ba8ac29894dfe8329c7a9e9`)
        return await response.json()
    } catch (error) {
        return error
    }
}

export const getModulesByPage = (page: number, modules: Module[]) => {
    const boundary = page * PAGE_SIZE
    if (boundary > modules.length) return modules.slice(boundary - PAGE_SIZE, modules.length)

    return modules.slice(boundary - PAGE_SIZE, boundary)
}
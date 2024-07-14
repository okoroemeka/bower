import {formatModuleList, getModulesByPage, searchModules, sortModules} from "../utils";
import {formattedModule, mockModule, sortedModule} from "./mocks.ts";

it('should return the correct data format', () => {
    const modules = formatModuleList(mockModule)
    expect(modules).toEqual(formattedModule)
});

it('should return the target of search if it exists',()=>{
    const modules = formatModuleList(searchModules(mockModule, 'org.webjars.npm:grunt'))
    expect(modules).toEqual([
        {
            name: 'org.webjars.npm:grunt',
            owner: 'karma-runner',
            stars: 12261
        }
    ])
})

it('should return all modules if searchParam is empty',()=>{
    const modules = formatModuleList(searchModules(mockModule, ''))
    expect(modules).toEqual(formattedModule)
})
//
it('should return no module search param matches no module name', () => {
    const modules = formatModuleList(searchModules(mockModule, 'no match'))
    expect(modules).toEqual([])
});

it('should sort modules in ascending order', () => {
    const modules = formatModuleList(sortModules(mockModule, 'ascending'))
    expect(modules).toEqual(sortedModule)
})

it('should sort modules in descending order', () => {
    const modules = formatModuleList(sortModules(mockModule, 'descending'))
    expect(modules).toEqual(sortedModule.reverse())
})

it('should just 5 modules for the first page', () => {
    const modules = formatModuleList(getModulesByPage(1, mockModule))
    expect(modules.length).toEqual(5)
})

it('should get the remaining module for the last page', () => {
    const modules = formatModuleList(getModulesByPage(2, mockModule))
    expect(modules.length).toEqual(1)
});
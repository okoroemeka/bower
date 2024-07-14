import {useGetModulesContext} from "../../hooks";
import {ChangeEvent} from "react";
import styles from "./content.module.css";

function Search() {
    const {handleSearch} = useGetModulesContext();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        handleSearch(value)
    }
    return (
        <input className={styles.search_input} type="text" placeholder="Search for modules" onChange={handleChange}/>
    );
}

export default Search;
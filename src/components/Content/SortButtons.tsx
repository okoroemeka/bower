import {useGetModulesContext} from "../../hooks";
import styles from "./content.module.css";
import Button from "./Button.tsx";

function SortButtons(){
    const {handleSortClick} = useGetModulesContext();

    return (
        <div className={styles.sort_area}>
            <label>Sort by stars</label>
            <div className={styles.sort_buttons_wrapper}>
                <Button handleClick={()=>handleSortClick('ascending')}>↑</Button>
                <Button handleClick={()=>handleSortClick('descending')}>↓</Button>
            </div>
        </div>

    );

}

export default SortButtons;
import {useGetModulesContext} from "../../hooks";
import styles from "./content.module.css";
import {Module} from "../../types.ts";

function ModuleList() {
    const {modules, loading, error} = useGetModulesContext();

    if (loading) return <div className={styles.loading}>Loading...</div>

    if (error) return <div>Error...</div>

    return (
        <div className={styles.module_list}>
            <div className={styles.module_list_item}>
                <p>Name</p>
                <p>Stars</p>
                <p>Owner</p>
            </div>
            {modules.map((module, i) => <ModuleListItem key={i} {...module}/>)}
        </div>
    );
}

function ModuleListItem({name, stars, owner}: Module){
    return (
        <div className={styles.module_list_item}>
            <p>{name}</p>
            <p>{stars}</p>
            <p>{owner??'N/A'}</p>
        </div>
    );

}

export default ModuleList;
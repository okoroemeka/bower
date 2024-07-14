import styles from "./content.module.css";

function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <h2>Modules</h2>
            <ul>
                <li>Module 1</li>
                <li>Module 2</li>
                <li>Module 3</li>
            </ul>
        </aside>
    );
}

export default Sidebar;
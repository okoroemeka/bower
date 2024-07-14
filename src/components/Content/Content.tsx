import styles from './content.module.css';
import Pagination from "./Pagination.tsx";
import ModuleList from "./ModuleList.tsx";
import Search from "./Search.tsx";
import SortButtons from "./SortButtons.tsx";
import Sidebar from "./Sidebar.tsx";
import {GetModulesProvider} from "../../providers";

export function Content() {
    return (
        <main className={styles.content}>
            <Sidebar />
            <GetModulesProvider>
                <ContentSection />
            </GetModulesProvider>
        </main>
    );
}

function ContentSection() {
    return (
        <section className={styles.content_section}>
            <SearchWrapper />
            <ModuleList  />
            <Pagination />
        </section>
    );
}

function SearchWrapper (){
    return (
        <div className={styles.search_wrapper}>
            <Search />
            <SortButtons />
        </div>
    );
}




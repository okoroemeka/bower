import styles from './appContent.module.css'
import {Header} from "../Header";
import {Footer} from "../Footer";
import {Content} from "../Content";


export function AppContent() {
    return (
        <div className={styles.main}>
            <Header />
            <Content />
            <Footer />
        </div>
    );
}

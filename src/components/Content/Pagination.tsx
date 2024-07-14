import {useGetModulesContext} from "../../hooks";
import styles from "./content.module.css";
import Button from "./Button.tsx";

function Pagination() {
    const {handleNext, handlePrev, numberOfPages, currentPage, loading, error} = useGetModulesContext();

    if (loading||error) return null

    const isShowNextButton = currentPage < numberOfPages;
    const isShowPrevButton = currentPage > 1;

    if(numberOfPages===0) return null

    return (
        <div className={styles.pagination}>
            {isShowPrevButton && <Button handleClick={handlePrev} isDisable={!isShowPrevButton}>← Previous</Button>}
            <p className={styles.page_count}>{currentPage} of {numberOfPages}</p>

            {isShowNextButton &&<Button handleClick={handleNext} isDisable={!isShowNextButton}>Next →</Button>}
        </div>
    );
}

export default Pagination;
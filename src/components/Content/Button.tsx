import {PropsWithChildren} from "react";
import styles from "./content.module.css";

type ButtonProps = {
    handleClick: () => void
    isDisable?: boolean
};

function Button({children, handleClick, isDisable=false}:PropsWithChildren<ButtonProps>) {
    return (
        <button className={styles.button} onClick={handleClick} disabled={isDisable}>{children}</button>
    );

}

export default Button;
import { useState } from "react";
import data from "../../Data/tabldata";
import Tablitem from "./Tablitem";

import styles from "./table.module.css";

const Tabllist = () => {
    const [ state, setState ] = useState([...data]);

    const handleClick = ({target}) => {
        const result = target.textContent;
        setState(prevState => {
        const newArray = prevState.map(elem => elem.title === result ?
             { ...elem, active: true } : { ...elem, active: false })
        return newArray;
        })
    };

    const elem = state.map(({title, active}) => 
    <li className={active ? `${styles.active} ${styles.item}` : styles.item} 
    onClick={handleClick} 
    key={title}>{title}</li>)


    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                {elem}
            </ul>
            <Tablitem data={state}/>
        </div>
    )
};

export default Tabllist;
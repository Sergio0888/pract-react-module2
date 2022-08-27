import { useState } from "react";

import styles from "./cards.module.css";

const Cards = () => {
    const [ state, setState ] = useState(['Karl Urban', 'Jack Quaid', 'Antony Starr', 'Dominique McElligott']);

    const onClick = (index) => {
        setState(prevState => {
            const newArray = prevState.filter((item,ind) => ind !== index);
            return newArray;
        })
    }

    const element = state.map((item,index) => 
    <div key={index} className={styles.box}>
    <p className={styles.text}>{item}</p>
    <button onClick={() => onClick(index)} className={styles.btn} type="button">Delete</button>
    </div>)

    return (
        <div >
            {element}  
        </div>
    );
};

export default Cards;
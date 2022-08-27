import { useState } from "react";

import styles from "./product.module.css";

const Product = () => {

    const [state] = useState(["Часы, надеждные, как пружина от дивана", `Золотая цепь, "за которую" не заплатили`, "Полоченный Роллс-Ройс"])

    const handleClick = ({ target }) => {
        if (target.nodeName === "P") {
            const arrOfText = document.querySelectorAll("#text")
            arrOfText.forEach((item) => {
                item.classList.remove(styles.check)
            return target.classList.add(styles.check);
            })
            return
        }
    };

    const element = state.map((item,index) => 
        <div key={index}>
            <p id="text" className={styles.text}>{item}</p>
        </div>
        )

    return (
        <div onClick={(e) => handleClick(e)} className={styles.mainbox}>
            {element}   
        </div>
    )
};

export default Product;

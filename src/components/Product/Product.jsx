import { Component } from "react";

import styles from "./product.module.css"

class Product extends Component {

    state = {
        items: ["Часы, надеждные, как пружина от дивана", `Золотая цепь, "за которую" не заплатили`, "Полоченный Роллс-Ройс"]
    }

    handleClick = ({ target }) => {
        if (target.nodeName === "P") {
            const arrOfText = document.querySelectorAll("#text")
            console.dir(arrOfText);
            arrOfText.forEach((item) => {
                item.classList.remove(styles.check)
            return target.classList.add(styles.check);
            })
            return
        }
    }

    render() {
        const { handleClick } = this;
        const { items } = this.state;
        const element = items.map((item,index) => 
            <div key={index}>
                <p id="text" className={styles.text}>{item}</p>
            </div>
        )
        return (
            <div onClick={(e) => handleClick(e)} className={styles.mainbox}>
                {element}   
            </div>
    )}
}

export default Product;
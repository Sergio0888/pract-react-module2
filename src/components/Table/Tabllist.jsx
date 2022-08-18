import { Component } from "react";
import data from "../../Data/tabldata";
import Tablitem from "./Tablitem";

import styles from "./table.module.css"

class Tabllist extends Component {

    state = {
        tabs: data
    }

    handleClick = ({target}) => {
        const result = target.textContent;
        this.setState({

          tabs: this.state.tabs.map(elem => elem.title === result ?
             { ...elem, active: true } : { ...elem, active: false })
        })
    }

    render() {
        const { handleClick } = this;
        const { tabs } = this.state; 

        const elem = tabs.map(({title, active}) => 
        <li className={active ? `${styles.active} ${styles.item}` : styles.item} 
        onClick={handleClick} 
        key={title}>{title}</li>)

        return (
        <div className={styles.container}>
            <ul className={styles.list}>
                {elem}
            </ul>
            <Tablitem data={tabs}/>
        </div>
           

        )
    }
}

export default Tabllist;
import { Component } from "react";

import styles from "./cards.module.css";

class Cards extends Component {
    state = {
        actors: ['Karl Urban', 'Jack Quaid', 'Antony Starr', 'Dominique McElligott']
    }

    onClick = ({ nativeEvent }) => {
        const { actors } = this.state;
        const name = nativeEvent.path[1].children[0].innerHTML;
        const filtredActors = actors.filter(item => item !== name)
        
        this.setState({
            actors: filtredActors
        })
    }

    render() {
        const { onClick } = this;
        const { actors } = this.state;

        const element = actors.map((item,index) => 
        <div key={index} className={styles.box}>
        <p key={index} className={styles.text}>{item}</p>
        <button onClick={(e) => onClick(e)} className={styles.btn} type="button">Delete</button>
        </div>)

        return (
            <div >
               {element}  
            </div>
        )}
}

export default Cards;
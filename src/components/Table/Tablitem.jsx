 import styles from "./table.module.css"
 
 const Tablitem = ({data}) => {
    const elem = data.map(item => item.active === true && item.text)

    return (
        <p className={styles.text}>{elem}</p>
    )
 }

 export default Tablitem;
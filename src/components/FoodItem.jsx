import styles from "../css/FoodItem.module.css"
export default function FoodItem({food,setFoodId}){
    return(
        <div className={styles.itemContainer}>
            <img className= {styles.itemImage}src={food.image} alt="" />
            <div className={styles.itemContent}>
                <p className={styles.itemName}>{food.title}</p>
            </div>
            <div className={styles.buttonContainer}>
            <button onClick={()=>{setFoodId(food.id)}} className={styles.itemButton}>View recipe</button>
            </div>
        </div>
    )
}
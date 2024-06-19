import styles from "../css/Container.module.css"
export default function Container({children}){
    return <div className="parentContainer">{children}</div>
}
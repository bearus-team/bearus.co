import {NextPage} from "next";
import styles from "./Main.module.css";
import {Props} from "../index";


const Page = (props: Props) => {
    return (<> <div className={styles.Info}>
        <h1 className={props.isActive ? styles.animation : ''} style={{color: "white"}}>Project Mercury</h1>
    </div>
    </>)
}
export default Page
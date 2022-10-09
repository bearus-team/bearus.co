import {NextPage} from "next";
import styles from './Main.module.css'

const Page : NextPage = () => {
    return (<> <div className={styles.Info}>
            <h1 style={{color: "white"}}>BearUs.Co</h1>
        </div>
    </>)
}
export default Page
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
    return (
        <div className={styles.landingPage}>
            <div className={styles.mainDiv}>
                <h2>Every Day To-Do Lists</h2>
                <Link to="/todolist" className={styles.Button}>
                    Enter Here...
                </Link>
            </div>
            <div className={styles.quote}>
                <p>“Subtracting from your list of priorities is as important as adding to it.”
                    ― Frank Sonnenberg, </p>
            </div>
        </div>
    );
};

export default LandingPage;
import styles from './Main.module.css';

function Main() {

    return (
        <div>
            <div className={styles.row}>
                <div className={styles.imageWrapper}>
                    <img className={styles.menuImage} src="/images/이달의 식당.jpg" alt="이달의 식당" />
                    <div className={styles.imageOverlay}>
                        <p className={styles.overlayText}>이달의 식당</p>
                    </div>
                </div>
                <div className={styles.imageWrapper}>
                    <img className={styles.menuImage} src="/images/이달의 식당.jpg" alt="픽스타 매거진"/>
                    <div className={styles.imageOverlay}>
                        <p className={styles.overlayText}>픽스타 매거진</p>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className={styles.row}>
                <img src="/images/이달의 식당.jpg" />
                <img src="/images/이달의 식당.jpg" />
            </div>
            <hr></hr>
            <div className={styles.row}>
                <img src="/images/이달의 식당.jpg" />
                <img src="/images/이달의 식당.jpg" />
                <img src="/images/이달의 식당.jpg" />
            </div>
        </div>

    );
}

export default Main;
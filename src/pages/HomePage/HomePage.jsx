import { Link } from 'react-router-dom';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.HomePage}>
      <div className={styles.container}>
        <h1 className={styles.logo}>TaskDo </h1>
        <p className={styles.sublogo}>Manage You Task Checklist Easily</p>
        <Link className={styles.link} to="/todos">
          Lets Start
        </Link>
      </div>
    </div>
  );
};

export default HomePage;

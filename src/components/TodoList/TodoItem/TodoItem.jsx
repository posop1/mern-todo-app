import styles from './TodoItem.module.scss';
import { IoMdTrash } from 'react-icons/io';
import { IoMdCheckmark } from 'react-icons/io';

const TodoItem = ({ _id, title, completed }) => {
  return (
    <div className={styles.TodoItem}>
      <div className={styles.text}>
        <IoMdTrash className={styles.bin} />
        <h3>{title}</h3>
      </div>
      <IoMdCheckmark className={styles.check} />
    </div>
  );
};

export default TodoItem;

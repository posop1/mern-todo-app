import styles from './TodoForm.module.scss';
import { AiOutlinePlus } from 'react-icons/ai';

const TodoForm = () => {
  return (
    <form className={styles.todoForm} onSubmit={(e) => e.preventDefault()}>
      <input type="text" placeholder="Task title..." className={styles.form__input} />
      <input type="text" placeholder="Task discription..." className={styles.form__input} />
      <button className={styles.form__button}>
        <AiOutlinePlus className={styles.icon} />
        Add New Task
      </button>
    </form>
  );
};

export default TodoForm;

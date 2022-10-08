import styles from './TodoForm.module.scss';

const TodoForm = () => {
  return (
    <form className={styles.todoForm}>
      <input type="text" placeholder="Task title..." className={styles.form__input} />
      <input type="text" placeholder="Task discription..." className={styles.form__input} />
      <button className={styles.form__button}>Add New Task</button>
    </form>
  );
};

export default TodoForm;

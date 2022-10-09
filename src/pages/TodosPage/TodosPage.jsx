import TodoForm from '../../components/TodoForm/TodoForm';
import TodoList from '../../components/TodoList/TodoList';
import styles from './TodosPage.module.scss';

const TodosPage = () => {
  return (
    <div className={styles.TodosPage}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h1>TaskDo</h1>
        </div>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
};

export default TodosPage;

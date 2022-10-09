import TodoItem from './TodoItem/TodoItem';
import styles from './TodoList.module.scss';

const todos = [
  {
    _id: '634134806a4beb0449be1503',
    title: 'fuck me121212',
    body: 'test.........................',
    completed: true,
    createdAt: '2022-10-08T08:27:44.858Z',
    updatedAt: '2022-10-08T08:38:03.988Z',
    __v: 0,
  },
  {
    _id: '634134806a4beb0449be1501',
    title: 'fuck me',
    body: 'test.........................',
    completed: false,
    createdAt: '2022-10-08T08:27:44.336Z',
    updatedAt: '2022-10-08T08:27:44.336Z',
    __v: 0,
  },
  {
    _id: '6341347f6a4beb0449be14ff',
    title: 'fuck me',
    body: 'test.........................',
    completed: false,
    createdAt: '2022-10-08T08:27:43.819Z',
    updatedAt: '2022-10-08T08:27:43.819Z',
    __v: 0,
  },
  {
    _id: '634132882a310bbdf9e58ace',
    title: 'fuck me',
    body: 'test.........................',
    completed: false,
    createdAt: '2022-10-08T08:19:20.891Z',
    updatedAt: '2022-10-08T08:19:20.891Z',
    __v: 0,
  },
];

const TodoList = () => {
  return (
    <div className={styles.TodoList}>
      {todos.map((todo, i) => (
        <TodoItem key={i} _id={todo._id} title={todo.title} completed={todo.completed} />
      ))}
    </div>
  );
};

export default TodoList;

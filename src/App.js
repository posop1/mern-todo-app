import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import TodosPage from './pages/TodosPage/TodosPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todos" element={<TodosPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;

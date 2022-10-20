import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ListTaskPage, AddTaskPage } from './pages';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <ListTaskPage />,
    },
    {
      path: '/add-task',
      element: <AddTaskPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}

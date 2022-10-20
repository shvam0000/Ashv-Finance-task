import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const AddTask = () => {
  const [taskName, setTaskName] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskPrority, setTaskPrority] = useState('');
  const [taskCategory, setTaskCategory] = useState('');

  const history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskName, taskDate, taskDescription, taskPrority, taskCategory);
    axios({
      method: 'post',
      url: 'http://localhost:3001/tasks',
      data: {
        name: taskName,
        date: taskDate,
        description: taskDescription,
        priority: taskPrority,
        category: taskCategory,
      },
    })
      .then((res) => {
        console.log(res);
        alert('Task added successfully');
        history.push('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="flex justify-end px-10 py-10 items-center">
        <Link to="/">
          <button className="bg-black text-white p-4 rounded-xl">Back</button>
        </Link>
      </div>
      <span className="flex justify-center items-center mt-10">
        Create a new task
      </span>
      <form className="mx-80 mt-24" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Name of the task
          </label>
          <input
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter the name of the bug"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="date"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Date of task creation
          </label>
          <input
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
            type="date"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter the date of creation of task"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Describe the task
          </label>
          <input
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter the description of the task"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="priority"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Priority of the task
          </label>
          <input
            value={taskPrority}
            onChange={(e) => setTaskPrority(e.target.value)}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter the priority of the task (high / low / medium)"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="category"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Category of the task
          </label>
          <input
            value={taskCategory}
            onChange={(e) => setTaskCategory(e.target.value)}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter the category of the task"
            required
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTask;

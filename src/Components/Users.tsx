import { useState } from "react";
import { users } from "../Data/Users";
import { decrement } from '../Redux/counterSlice';
import { useDispatch } from "react-redux";

const Users = () => {
  const [usersList, setUsersList] = useState(users);
  const usersNum = 5;
  const totalPages = Math.ceil(usersList.length / usersNum);
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();

  const pageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * usersNum;
  const usersInPage = usersList.slice(startIndex, startIndex + usersNum);

  const deletion = (id: number) => {
    const filtered = usersList.filter((user) => user.id !== id);
    setUsersList(filtered);
    dispatch(decrement());
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="min-w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-4 py-2 sm:px-6 sm:py-3">ID</th>
            <th scope="col" className="px-4 py-2 sm:px-6 sm:py-3">Name</th>
            <th scope="col" className="px-4 py-2 sm:px-6 sm:py-3">Username</th>
            <th scope="col" className="px-4 py-2 sm:px-6 sm:py-3">Delete</th>
          </tr>
        </thead>
        <tbody>
          {usersInPage.map((user, index) => (
            <tr key={user.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              <th scope="row" className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{index + 1}</th>
              <td className="px-4 py-4 sm:px-6 sm:py-4">{user.name}</td>
              <td className="px-4 py-4 sm:px-6 sm:py-4">{user.username}</td>
              <td className="px-4 py-4 sm:px-6 sm:py-4">
                <button
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                  onClick={() => deletion(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav aria-label="Page navigation example" className="flex justify-center mt-4">
        <ul className="inline-flex space-x-px text-sm sm:text-base">
          <li>
            <a
              onClick={() => pageChange(currentPage > 1 ? currentPage - 1 : 1)}
              className={`cursor-pointer flex items-center justify-center px-3 h-8 ms-0 leading-tight ${currentPage === 1 ? 'text-gray-300' : 'text-gray-500'} bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              Previous
            </a>
          </li>
          {[...Array(totalPages)].map((_, index) => (
            <li key={index}>
              <a
                onClick={() => pageChange(index + 1)}
                className={`cursor-pointer flex items-center justify-center px-3 h-8 leading-tight ${currentPage === index + 1 ? 'text-blue-600 bg-blue-50' : 'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700'} border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
              >
                {index + 1}
              </a>
            </li>
          ))}
          <li>
            <a
              onClick={() => pageChange(currentPage < totalPages ? currentPage + 1 : totalPages)}
              className={`cursor-pointer flex items-center justify-center px-3 h-8 leading-tight ${currentPage === totalPages ? 'text-gray-300' : 'text-gray-500'} bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Users;

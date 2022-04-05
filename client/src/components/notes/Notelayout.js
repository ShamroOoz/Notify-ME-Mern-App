import React from "react";
import { Link } from "react-router-dom";
import { format } from "timeago.js";

const Notelayout = ({ title, content, date, _id, deleteNote, name }) => {
  return (
    <div className="w-full md:w-1/2 px-8 py-4 mt-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="flex items-center justify-between">
        <Link
          to={`edit/${_id}`}
          className="px-5 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-green-600 rounded cursor-pointer hover:bg-green-500"
        >
          Edit
        </Link>
        <button
          type="button"
          onClick={() => deleteNote(_id)}
          className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-pink-600 rounded cursor-pointer hover:bg-pink-500"
        >
          Delete
        </button>
      </div>

      <div className="mt-2 h-40 overflow-hidden text-clip">
        <span className="text-2xl uppercase font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">
          {title}
        </span>
        <p className="mt-2 text-gray-600 dark:text-gray-300 ">{content}</p>
      </div>

      <div className="flex items-center justify-between mt-4">
        <span className="text-sm font-light text-gray-600 dark:text-gray-400">
          {format(date)}
        </span>
        <div className="flex items-center">
          <span className="font-bold text-slate-500 cursor-pointer dark:text-gray-200">
            {name}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Notelayout;

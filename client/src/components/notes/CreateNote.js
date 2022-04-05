import React, { useState } from "react";
import { axioscall } from "../../utils/AxiosInstance";
import { useNavigate } from "react-router-dom";

const CreateNote = () => {
  const [note, setNote] = useState({
    title: "",
    content: "",
    date: "",
  });
  let navigate = useNavigate();

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("tokenStore");
      if (token) {
        const { title, content, date } = note;
        const newNote = {
          title,
          content,
          date,
        };

        await axioscall.post("notes", newNote, {
          headers: { Authorization: token },
        });

        return navigate("/notes");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="w-full max-w-2xl px-6 py-4 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-7">
      <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white">
        CREATE NOTE
      </h2>
      {/* <p className="mt-3 text-center text-pink-600 dark:text-gray-400">
         {err}
      </p> */}

      <form onSubmit={submitHandler}>
        <div className="mt-6 ">
          <div className="items-center -mx-2 md:flex">
            <div className="w-full mx-2">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                htmlFor="title"
              >
                Title
              </label>

              <input
                required
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                type="text"
                id="title"
                onChange={onChangeInput}
                value={note.title}
                name="title"
              />
            </div>

            <div className="w-full mx-2 mt-4 md:mt-0">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                htmlFor="date"
              >
                Date
              </label>

              <input
                required
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                type="date"
                id="date"
                onChange={onChangeInput}
                value={note.date}
                name="date"
              />
            </div>
          </div>

          <div className="w-full mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              htmlFor="Content"
            >
              Content
            </label>

            <textarea
              id="Content"
              required
              onChange={onChangeInput}
              value={note.content}
              name="content"
              className="block w-full h-40 px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
            ></textarea>
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              disabled={
                !(
                  Boolean(note.title) &&
                  Boolean(note.content) &&
                  Boolean(note.date)
                )
              }
              className="px-4 py-2 disabled:opacity-40 text-white transition-colors duration-200 transform bg-green-500 rounded-md hover:bg-green-700 focus:outline-none focus:bg-green-600"
            >
              Create
            </button>
            <button
              onClick={() => navigate(-1)}
              className="px-4 py-2 ml-2 disabled:opacity-40 text-white transition-colors duration-200 transform bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Go Back
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default CreateNote;

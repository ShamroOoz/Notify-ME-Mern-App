import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { axioscall } from "../../utils/AxiosInstance";
import Notelayout from "./Notelayout";

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [token, setToken] = useState("");

  const getNotes = async (token, controller) => {
    const res = await axioscall.get("notes", {
      headers: { Authorization: token },
      signal: controller.signal,
    });
    setNotes(res.data);
  };

  useEffect(() => {
    let control = true;
    const controller = new AbortController();

    const token = localStorage.getItem("tokenStore");
    setToken(token);
    if (token && control) {
      getNotes(token, controller);
    }
    return () => {
      controller.abort();
      control = false;
    };
  }, []);

  const deleteNote = useCallback(
    async (id) => {
      const controller = new AbortController();
      try {
        if (token) {
          await axioscall.delete(`notes/${id}`, {
            headers: { Authorization: token },
          });
          getNotes(token, controller);
        }
      } catch (error) {
        window.location.href = "/";
      }
    },
    [token]
  );

  return (
    <div className="container mx-auto flex flex-wrap justify-between">
      {notes.length > 0 ? (
        notes.map((note) => (
          <Notelayout key={note._id} {...note} deleteNote={deleteNote} />
        ))
      ) : (
        <div className="max-w-3xl mx-auto mt-4">
          <Link className="group block mb-6" to="create">
            <div className="flex items-center justify-between flex-wrap p-10 bg-coolGray-50 group-hover:bg-coolGray-100 rounded-md shadow-md transition duration-200">
              <div className="w-full">
                <h3 className="text-xl text-coolGray-800 group-hover:text-coolGray-900 ">
                  Create You First Note 😇
                </h3>
              </div>
              <div className="w-1/2 text-right mt-3">
                <div className="inline-flex items-center leading-6 text-green-500 group-hover:text-green-600 font-medium transition duration-200">
                  <span className="mr-2">Create</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./notes/Layout";
import CreateNote from "./notes/CreateNote.js";
import EditNote from "./notes/EditNote";
import Home from "./notes/Home";
import Notfound from "./Notfound";

const Notes = ({ setIsLogin }) => {
  return (
    <Routes>
      <Route path="notes" element={<Layout setIsLogin={setIsLogin} />}>
        <Route index element={<Home />} />
        <Route path="create" element={<CreateNote />} />
        <Route path="edit/:id" element={<EditNote />} />
        <Route path="*" element={<Notfound />} />
      </Route>
    </Routes>
  );
};

export default Notes;

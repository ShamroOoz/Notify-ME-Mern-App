import React, { useState, useEffect } from "react";
import { axioscall } from "./utils/AxiosInstance";
import Login from "./components/Login";
import Notes from "./components/Notes";
import Loading from "./utils/Loading";
import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    let control = true;
    const checkLogin = async () => {
      const token = localStorage.getItem("tokenStore");
      if (token) {
        const verified = await axioscall.get("/users/verify", {
          headers: { Authorization: token },
          signal: controller.signal,
        });
        setIsLogin(verified.data);
        setLoading(false);
        if (verified.data === false) return localStorage.clear();
      } else {
        setIsLogin(false);
        setLoading(false);
      }
    };

    if (control) checkLogin();

    return () => {
      controller.abort();
      control = false;
    };
  }, [isLogin]);

  if (loading) return <Loading />;

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            isLogin ? (
              <Navigate to="/notes" replace={true} />
            ) : (
              <Navigate to="/login" replace={true} />
            )
          }
        />

        <Route
          path="/login"
          element={
            !isLogin ? (
              <Login setIsLogin={setIsLogin} />
            ) : (
              <Navigate to="/" replace={true} />
            )
          }
        />
        <Route
          path="/*"
          element={
            isLogin ? (
              <Notes setIsLogin={setIsLogin} />
            ) : (
              <Navigate to="/" replace={true} />
            )
          }
        />
      </Routes>
    </>
  );
};

export default App;

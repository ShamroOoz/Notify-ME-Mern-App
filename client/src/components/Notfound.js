import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <section className="grid place-items-center h-screen ">
      <div className="relative z-10 container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-green-500 bg-green-100 font-medium rounded-full shadow-sm">
            Error 404
          </span>
          <h2 className="mb-4 text-4xl md:text-5xl leading-tight font-bold tracking-tighter">
            Page not found
          </h2>
          <p className="mb-12 text-lg md:text-xl text-coolGray-500">
            Something went wrong, so this page is broken.
          </p>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-auto py-1 md:py-0 md:mr-6">
              <Link
                className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-green-50 font-medium text-center bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-green-500 rounded-md shadow-sm"
                to="/"
              >
                Go back to Homepage
              </Link>
            </div>
            <div className="w-full md:w-auto py-1 md:py-0">
              <button
                className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-coolGray-800 font-medium text-center bg-white hover:bg-coolGray-100 focus:ring-2 focus:ring-coolGray-200 focus:ring-opacity-50 border border-coolGray-200 rounded-md shadow-sm"
                onClick={() => window.location.reload(false)}
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notfound;

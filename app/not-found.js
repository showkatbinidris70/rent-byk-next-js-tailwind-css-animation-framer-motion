import React from "react";

export default function notFound() {
  return (
    <div>
      <div>
        <div className="contaienr mx-auto bg-white max-w-7xl">
          <p className="text-red-600 text-5xl text-center py-7">
            {" "}
            This page not found.
          </p>
        </div>
      </div>
    </div>
  );
}
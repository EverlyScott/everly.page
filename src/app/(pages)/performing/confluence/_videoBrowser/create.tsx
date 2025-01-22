"use client";

import create from "./createFunc";

const Create: React.FC = () => {
  return (
    <button
      onClick={() => {
        create();
      }}
    >
      create
    </button>
  );
};
export default Create;

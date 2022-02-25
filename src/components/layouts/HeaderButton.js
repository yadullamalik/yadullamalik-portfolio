import React from "react";

const HeaderButton = () => {
  return (
    <>
      <div className="mx-auto">
        <a
          href="https://drive.google.com/file/d/14vkWQueNF5_qV5vBsVtYvDhnPmuaPyhF/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <button className="see">
            Resume<i className="fas fa-eye"></i>
          </button>
        </a>
      </div>
    </>
  );
};

export default HeaderButton;

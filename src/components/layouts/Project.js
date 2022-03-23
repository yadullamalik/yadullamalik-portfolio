import React from "react";

const Project = ({ id, name, url, skills, live, desc }) => {
  return (
    <div data-aos="fade-up" className=" col-12 col-lg-4 project-card">
      <div className="image-project">
        <div className={`img-pro ${id}`}></div>
      </div>
      <h2>{name}</h2>
      <p className="desc">{desc}</p>

      {skills && <h3>{skills.map((skill) => skill)}</h3>}
      <a
        title={url}
        className="project-name"
        rel="noopener noreferrer"
        target="_blank"
        href={url}
      >
        <h2>Github</h2>
      </a>
      <a
        title={live}
        className="project-name"
        rel="noopener noreferrer"
        target="_blank"
        href={live}
      >
        <h2>Live</h2>
      </a>
    </div>
  );
};

export default Project;

import { useState } from "react";
import data from "../data.json";
import ProjectModule from "../components/ProjectModule";
import MainText from "../components/MainText";
import "../stylesheets/project-list.css";

const ProjectList: React.FC = () => {
  const [mainText, setMainText] = useState({
    header: "Ariel Davis",
    text: "some random default text",
  });
  return (
    <div className="project-list">
      <div>
        <MainText data={mainText} />
      </div>
      <div>
        <h3>List of Projects</h3>
        {data.projects.map((project) => (
          <ProjectModule project={project} handler={setMainText} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;

import { useState } from "react";
import data from "../data.json";
import ProjectModule from "../components/ProjectModule";
import MainText from "../components/MainText";

const ProjectList: React.FC = () => {
  const [mainText, setMainText] = useState({
    header: "Default",
    text: "default",
  });
  return (
    <div>
      <h3>List of Projects</h3>
      {/* Map through Projects */}
      {/* Have each project be a component (Project)
      and take in the project object, and a click event (to change the MainText obj) as props */}
      {data.projects.map((project) => (
        <ProjectModule project={project} handler={setMainText} />
      ))}
      <MainText data={mainText} />
    </div>
  );
};

export default ProjectList;

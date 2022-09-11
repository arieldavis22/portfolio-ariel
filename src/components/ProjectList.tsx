import MainText from "./MainText";
import data from "../data.json";

const ProjectList: React.FC = () => {
  const testClear = (e: React.MouseEvent<HTMLButtonElement>) => {
    const test = document.querySelector("#main-text");
    if (test) test.remove();
    console.log(data);
  };

  return (
    <div>
      <h3>List of Projects</h3>
      {/* Map through Projects */}
      {/* <button onClick={testClear}>click</button> */}
      {data.projects.map((project) => (
        <div key={project.name}>{project.name}</div>
      ))}
    </div>
  );
};

export default ProjectList;

import data from "../data.json";

const ProjectList: React.FC = () => {
  return (
    <div>
      <h3>List of Projects</h3>
      {/* Map through Projects */}
      {data.projects.map((project) => (
        <div key={project.name}>{project.name}</div>
      ))}
    </div>
  );
};

export default ProjectList;

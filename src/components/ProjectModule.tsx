interface ProjectModuleProps {
  project: {
    name: string;
    description: string;
  };
  handler: any;
}

const ProjectModule: React.FC<ProjectModuleProps> = ({ project, handler }) => {
  const onClick = () => {
    handler({ header: project.name, text: project.description });
  };

  return <div onClick={onClick}>{project.name}</div>;
};

export default ProjectModule;

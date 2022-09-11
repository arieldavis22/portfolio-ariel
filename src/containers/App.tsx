import MainText from "../components/MainText";
import ProjectList from "./ProjectList";

const App = () => {
  return (
    <div className="App">
      <ProjectList />
      <MainText header="Default" text="test" />
    </div>
  );
};

export default App;

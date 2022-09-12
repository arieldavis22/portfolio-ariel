interface MainTextProps {
  data: {
    header: string;
    text: string;
  };
}

const MainText: React.FC<MainTextProps> = ({ data }) => {
  return (
    <div id="main-text">
      <h1>{data.header}</h1>
      <p>{data.text}</p>
    </div>
  );
};

export default MainText;

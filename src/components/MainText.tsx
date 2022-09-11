interface MainTextProps {
  header: string;
  text: string;
}

const MainText: React.FC<MainTextProps> = ({ header, text }) => {
  return (
    <div>
      <h1>{header}</h1>
      <p>{text}</p>
    </div>
  );
};

export default MainText;

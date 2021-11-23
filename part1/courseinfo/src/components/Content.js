import Part from "./Part";
const Content = ({ parts }) => {
  console.log(parts);
  return (
    <>
      <Part parts={parts} />
    </>
  );
};

export default Content;

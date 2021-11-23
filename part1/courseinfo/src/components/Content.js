import Part from "./Part";
const Content = ({
  part1,
  part2,
  part3,
  exercises1,
  exercises2,
  exercises3,
}) => {
  return (
    <>
      <Part part1={part1} exercises1={exercises1} />
      <Part part1={part2} exercises1={exercises2} />
      <Part part1={part3} exercises1={exercises3} />
    </>
  );
};

export default Content;

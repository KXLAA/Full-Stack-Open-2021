const Error = ({ error }) => {
  if (error === null) {
    return null;
  }
  return (
    <>
      <div className="error">{}</div>
    </>
  );
};

export default Error;

const Notification = ({ name }) => {
  if (name === null) {
    return null;
  }
  return (
    <>
      <div className="success">{name}</div>
    </>
  );
};

export default Notification;

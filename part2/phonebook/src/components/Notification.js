const Notification = ({ name }) => {
  if (name === null) {
    return null;
  }
  return <div className="error">{name}</div>;
};

export default Notification;

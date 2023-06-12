// eslint-disable-next-line react/prop-types
const Input = ({ updataMessage, value }) => {
  const onchangeHandler = (e) => {
    updataMessage(e.target.value);
  };

  return (
    <>
      <input type="text" className="input" onChange={onchangeHandler} value={value} />
     
    </>
  );
};

export default Input;

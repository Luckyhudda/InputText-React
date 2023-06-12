import { useState } from "react";
import Input from "../Input/Input";
import Text from "../Text/Text";

const Final = () => {
  const [text, setText] = useState('')
  const updateText = (value) => setText(value);
   const clearField = () => {
     setText('');
   };
  return (
    <>
      <Input updataMessage={updateText} value={text} />
      <button className="clear" onClick={clearField}>
        Clear
      </button>
      <Text message={text} />
    </>
  );
};

export default Final;

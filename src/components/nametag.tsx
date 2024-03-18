import React from "react";

interface NameTagInterface {
  user: string;
  directory: string;
}

const NameTag: React.FC<NameTagInterface> = ({ user, directory }) => {
  return (
    <>
      <h1>
        <span className="text-textPurple dark:text-textBlue">
          {user}@doesitbyte:
        </span>
        <span className="text-textGreen dark:text-textPink">~/{directory}</span>
        <span className="text-textDarkBlue dark:text-textWhite">$</span>
      </h1>
    </>
  );
};

export default NameTag;

import React from "react";

interface NameTagInterface {
  user: string;
  directory: string;
}

const NameTag: React.FC<NameTagInterface> = ({ user, directory }) => {
  return (
    <>
      <h1>
        <span className="text-textBlue">{user}@doesitbyte:</span>
        <span className="text-textPink">~/{directory}</span>
        <span className="text-textWhite">$</span>
      </h1>
    </>
  );
};

export default NameTag;

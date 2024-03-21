import { ICommandReturn } from "../interfaces/commands";

export const getAbout = async (): Promise<ICommandReturn> => {
  return {
    raw: "",
    jsx: (
      <>
        <div>
          <span className="text-textGreen">
            {"Hello, I'm Kaustubh Sharma!"}
          </span>
        </div>
      </>
    ),
  };
};

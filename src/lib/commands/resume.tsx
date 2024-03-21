import { ICommandReturn } from "../interfaces/commands";

export const getResume = async (): Promise<ICommandReturn> => {
  return {
    raw: "",
    jsx: (
      <>
        <div>
          <span className="text-textGreen">
            <a href="/resume" target="_blank">
              Resume
            </a>
          </span>
        </div>
      </>
    ),
  };
};

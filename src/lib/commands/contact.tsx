import { ICommandReturn } from "../interfaces/commands";

export const getContact = async (): Promise<ICommandReturn> => {
  return {
    raw: "",
    jsx: (
      <>
        <div>
          <span className="text-textGreen">Github: </span>
          <a href="https://github.com/doesitbyte" target="_blank">
            <u>doesitbyte</u>
          </a>
        </div>
        <div>
          <span className="text-textGreen">Linkedin: </span>
          <a href="https://www.linkedin.com/in/kaustubh-s/" target="_blank">
            <u>Kaustubh Sharma</u>
          </a>
        </div>
        <div>
          <span className="text-textGreen">Mail: </span>
          <a href="mailto:sharma.kaustubh99@gmail.com" target="_blank">
            <u>Open mail client</u>
          </a>{" "}
          (sharma.kaustubh99@gmail.com)
        </div>
      </>
    ),
  };
};

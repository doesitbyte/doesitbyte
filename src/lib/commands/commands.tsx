import { ICommandReturn } from "../interfaces/commands";
import { commandsList } from "./parent";

export const getCommands = async (): Promise<ICommandReturn> => {
  return {
    raw: "",
    jsx: (
      <>
        <div>list of available commands: </div>
        <br></br>
        {Object.keys(commandsList).map((command) => {
          const description = commandsList[command].description;
          return (
            <p key={command}>
              {command} - {description}
            </p>
          );
        })}
      </>
    ),
  };
};

`usage: app_name [options] required_input required_input2
options:
  -a, --argument     Does something
  -b required     Does something with "required"
  -c, --command required     Something else
  -d [optlistitem1 optlistitem 2 ... ]     Something with list`;

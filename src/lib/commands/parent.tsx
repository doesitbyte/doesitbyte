import { ICommandsList } from "../interfaces/commands";
import { getIntro } from "./intro";

export const commandsList: { [key: string]: ICommandsList } = {
  help: {
    description: "Lists out Commands and their descriptions",
    action: (param = "") => {
      return param.toLowerCase();
    },
    options: {
      optionName: {
        description: "sample optn. desc.",
        action: (param = "sample optn. param") => {
          return param.toUpperCase();
        },
      },
    },
  },
  start: {
    async action(param) {
      return await getIntro(param ? param : "dog");
    },
    description: "Intro",
  },
};

export const getTerminalOutput = async (input: string) => {
  // Input processing

  try {
    return commandsList[input].action();
  } catch {
    return {
      raw: "error",
      jsx: <>{"error"}</>,
    };
  }
};

/* const help = (param: string): string => {
  let output: string;
  for (const command in commandsList) {
    if (commandsList[command]["options"]) {
      for (const option in commandsList[command]["options"]) {
      }
    }
  }
  return "";
}; */

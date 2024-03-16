import { ICommandsList } from "../interfaces/commands";
import { getIntro } from "./intro";

export const commandsList: { [key: string]: ICommandsList } = {
  /*   help: {
    description: "Lists out Commands and their descriptions",
    action: (param = "") => {
      return param.toLowerCase();
    },
    options: {
      optionName: {
        description: "sample optn. desc.",
        action: (param = "sample optn. param") => {s
          return param.toUpperCase();
        },
      },
    },
  }, */
  start: {
    async action(optionChain) {
      let param = "dog";

      // if (optionChain) {
      //   if (optionChain.length == 1 && optionChain[0].startsWith("-")) {
      //     param = optionChain[0].toLowerCase().replaceAll("-", "");
      //   }
      // }

      return await getIntro(param);
      // if (res.status) {
      //   return res.jsx;
      // }
    },
    description: "Intro",
  },
};

export const getTerminalOutput = async (input: string) => {
  // Input processing

  //get top level command and pass rest to command handler
  let optionChain = input.trim().split(" ");
  let command = optionChain[0];
  optionChain = optionChain.slice(1);

  try {
    return commandsList[command].action(optionChain);
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

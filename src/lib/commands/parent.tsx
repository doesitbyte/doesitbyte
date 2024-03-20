import { ICommandsList } from "../interfaces/commands";
import { getIntro } from "./intro";

export const commandsList: { [key: string]: ICommandsList } = {
  welcome: {
    async action(optionChain) {
      let param = "panda";

      return await getIntro(param);
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
      raw: command + ": command not found",
      jsx: (
        <>
          <p>{command + ": command not found"}</p>
          <p>{"use 'help' for a list of available commands"}</p>
        </>
      ),
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

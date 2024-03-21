import { ICommandsList } from "../interfaces/commands";
import { getBootUp } from "./boot";
import { getCommands } from "./help";

export const commandsList: { [key: string]: ICommandsList } = {
  "ssh doesitbyte": {
    async action() {
      return await getBootUp("panda");
    },
    description: "",
  },
  commands: {
    async action() {
      return await getCommands();
    },
    description: "get a list of all available commands",
  },
};

export const getTerminalOutput = async (input: string) => {
  const command = input;

  try {
    return commandsList[command].action();
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

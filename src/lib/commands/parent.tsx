import { ParsedInput } from "../interfaces/commandParser";
import { ICommandsList } from "../interfaces/commands";
import { parseInput } from "../utils";
import { getAbout } from "./about";
import { getBootUp } from "./boot";
import { getCommands } from "./commands";
import { getContact } from "./contact";
import { getResume } from "./resume";

export const commandsList: { [key: string]: ICommandsList } = {
  "ssh doesitbyte": {
    async action(options) {
      return await getBootUp(options["animal"] || options["a"] || "panda");
    },
    description: "",
  },
  commands: {
    async action(options) {
      return await getCommands();
    },
    description: "get a list of all available commands",
  },
  about: {
    async action(options) {
      return await getAbout();
    },
    description: "about the developer",
  },
  contact: {
    async action(options) {
      return await getContact();
    },
    description: "links to contact the developer",
  },
  resume: {
    async action(options) {
      return await getResume();
    },
    description: "developers resume",
  },
};

export const getTerminalOutput = async (input: string) => {
  const { baseCommand: baseCommand, options: options }: ParsedInput =
    parseInput(input);

  try {
    return commandsList[baseCommand].action(options);
  } catch {
    return {
      raw: baseCommand + ": command not found",
      jsx: (
        <>
          <p>{baseCommand + ": command not found"}</p>
          <p>{"enter 'commands' for a list of available commands"}</p>
        </>
      ),
    };
  }
};

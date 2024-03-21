import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Options, ParsedInput } from "./interfaces/commandParser";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parseInput(input: string): ParsedInput {
  const words: string[] = input.trim().split(/\s+/);
  const baseCommandArray: string[] = [];
  const options: Options = {};

  for (let i = 0; i < words.length; i++) {
    const word: string = words[i];

    if (word.startsWith("-")) {
      const optionName: string = word.slice(1);
      const value: string =
        i + 1 < words.length && !words[i + 1].startsWith("-")
          ? words[i + 1]
          : "";
      options[optionName] = value;
      if (value !== "") {
        i++;
      }
    } else {
      baseCommandArray.push(word);
    }
  }

  const baseCommand: string = baseCommandArray.join(" ");

  return { baseCommand, options };
}

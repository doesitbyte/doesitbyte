import { Options } from "./commandParser";

export interface ICommandReturn {
  raw: string;
  jsx: JSX.Element;
}

export interface ICommandsList {
  description: string;
  options?: { [key: string]: ICommandsList };
  action: (param: Options) => Promise<ICommandReturn>;
}

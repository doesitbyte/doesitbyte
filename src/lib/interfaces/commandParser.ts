export interface Options {
  [key: string]: string;
}

export interface ParsedInput {
  baseCommand: string;
  options: Options;
}

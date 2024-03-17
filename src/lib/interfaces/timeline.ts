export enum CommandTypes {
  InterfaceCommand,
  ExecutableCommand,
}

export interface ITimeline {
  type: CommandTypes;
  inputText: string;
  timestamp: Date;
  output: JSX.Element;
}

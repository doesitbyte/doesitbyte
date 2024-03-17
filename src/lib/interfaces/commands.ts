export interface ICommandReturn {
  raw: string;
  jsx: JSX.Element;
}

export interface ICommandsList {
  description: string;
  options?: { [key: string]: ICommandsList };
  action: (param?: string[]) => Promise<ICommandReturn>;
}

// export const sampleCommandsList: { [key: string]: ICommandsList } = {
//   user: {
//     description: "sample desc.",
//     action: async (param = "sample param") => {
//       return {
//         raw: param.toLowerCase(),
//         jsx: <>{param.toLowerCase()}</>,
//       };
//     },
//     options: {
//       optionName: {
//         description: "sample optn. desc.",
//         action: (param = "sample optn. param") => {
//           return param.toUpperCase();
//         },
//       },
//     },
//   },
// };

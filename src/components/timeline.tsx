"use client";

import { useState, useEffect, useRef } from "react";
import NameTag from "./nametag";
import { CommandTypes, ITimeline } from "@/lib/interfaces/timeline";
import { getTerminalOutput } from "@/lib/commands/parent";
import { ICommandReturn } from "@/lib/interfaces/commands";
import { getIP } from "@/lib/actions";

const initialCommands: string[] = ["welcome"];

const Timeline = () => {
  const [history, setHistory] = useState<ITimeline[]>([]);
  const [input, setInput] = useState<string>("");
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [user, setUser] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const executeGetIP = async () => {
      const ip: string = (await getIP(true)).ip;
      setUser(ip);
    };

    const executeInitialCommands = async () => {
      for (let command of initialCommands) {
        await executeCommand(command.trim());
      }
      setLoading(false);
    };
    executeGetIP();
    executeInitialCommands();
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [history]);

  useEffect(() => {
    const focusInput = () => inputRef.current?.focus();
    focusInput();
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") {
        focusInput();
      }
    });
    document.addEventListener("click", () => {
      focusInput();
    });
    return () => {
      document.removeEventListener("visibilitychange", focusInput);
    };
  }, []);

  const executeCommand = async (command: string): Promise<void> => {
    let output: ICommandReturn;
    let commandType: CommandTypes;
    switch (command) {
      case "clear":
        output = {
          jsx: <></>,
          raw: "",
        };
        commandType = CommandTypes.InterfaceCommand;
        break;
      case "":
        output = {
          jsx: <></>,
          raw: "",
        };
        commandType = CommandTypes.ExecutableCommand;
        break;
      default:
        output = await getTerminalOutput(command);
        commandType = CommandTypes.ExecutableCommand;
    }

    setHistory((prevHsitory) => [
      ...prevHsitory,
      {
        type: commandType,
        inputText: command,
        output: output.jsx,
        timestamp: new Date(),
      },
    ]);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const trimmedInput = input.trim();
      if (trimmedInput != undefined) {
        await executeCommand(trimmedInput);
        setInput("");
        setHistoryIndex(-1);
      }
    } else if (event.key === "ArrowUp") {
      event.preventDefault();

      if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(
          history[history.length - 1 - newIndex].inputText?.toString() || ""
        );
      }
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      const newIndex = historyIndex > 0 ? historyIndex - 1 : -1;
      setHistoryIndex(newIndex);
      setInput(
        newIndex >= 0
          ? history[history.length - 1 - newIndex].inputText?.toString() || ""
          : ""
      );
    }
  };

  const lastClearIndex = history.findLastIndex((c) => c.type === 0);
  const renderedHistory = history.slice(
    lastClearIndex >= 0 ? lastClearIndex + 1 : 0,
    history.length
  );

  return (
    <>
      {loading || user == "" ? (
        <div>loading ...</div>
      ) : (
        <div>
          <div>
            {renderedHistory.map((item, index) => {
              return (
                <div key={index}>
                  <div className="flex">
                    <NameTag user={user} directory="home" />
                    <div className="ml-2">
                      <p>{item.inputText}</p>
                    </div>
                  </div>
                  <div>{item.output}</div>
                </div>
              );
            })}
          </div>
          <div className="flex">
            <div ref={bottomRef}></div>
            <NameTag user={user} directory="home" />
            <input
              ref={inputRef}
              value={input}
              autoComplete="off"
              autoFocus
              className="appearance-none bg-transparent outline-none focus:outline-none text-black dark:text-textWhite ml-2"
              type="text"
              name="terminalInput"
              placeholder="enter command here ..."
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Timeline;

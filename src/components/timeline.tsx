"use client";

import { useState, useEffect } from "react";
import NameTag from "./nametag";
import { ITimeline } from "@/lib/interfaces/timeline";
import { getTerminalOutput } from "@/lib/commands/parent";

const initialCommands = ["start"];

const Timeline = () => {
  const [timeline, setTimeline] = useState<ITimeline[]>([]);
  const [input, setInput] = useState("");
  const [navigator, setNavigator] = useState(-1);

  useEffect(() => {
    console.log("run");

    initialCommands.map(async (value) => {
      console.log(value);

      setTimeline([
        ...timeline,
        {
          inputText: value,
          output: (await getTerminalOutput(value.trim())).jsx,
          timestamp: new Date(),
        },
      ]);
    });
  }, []);

  return (
    <>
      <div>
        {timeline.map((item, index) => {
          return (
            <div key={index}>
              <div className="flex">
                <NameTag user="guest" directory="home" />
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
        <NameTag user="kaustubh" directory="home" />
        <input
          ref={(ref) => ref && ref.focus()}
          onFocus={(e) =>
            e.currentTarget.setSelectionRange(
              e.currentTarget.value.length,
              e.currentTarget.value.length
            )
          }
          value={input}
          autoComplete="off"
          autoFocus
          className="appearance-none bg-transparent outline-none focus:outline-none text-textWhite ml-2"
          type="text"
          name="terminalInput"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          onKeyDown={async (e) => {
            const key = e.key;
            let newNav;
            let newInput;

            switch (key) {
              case "ArrowUp":
                newNav =
                  navigator == -1
                    ? timeline.length - 1
                    : navigator == 0
                    ? navigator
                    : navigator - 1;
                newInput = newNav == -1 ? "" : timeline[newNav].inputText;
                setNavigator(newNav);
                setInput(newInput);
                break;

              case "ArrowDown":
                newNav =
                  navigator == timeline.length - 1
                    ? -1
                    : navigator == -1
                    ? navigator
                    : navigator + 1;
                newInput = newNav == -1 ? "" : timeline[newNav].inputText;
                setNavigator(newNav);
                setInput(newInput);
                break;
            }

            if (e.key !== "Enter") return;
            if (input === "clear") {
              setTimeline([]);
              setInput("");
              return;
            }
            setTimeline([
              ...timeline,
              {
                inputText: input,
                output: (await getTerminalOutput(input.trim())).jsx,
                timestamp: new Date(),
              },
            ]);
            setInput("");
          }}
        />
      </div>
    </>
  );
};

export default Timeline;

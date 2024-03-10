"use client";

import { useState } from "react";
import NameTag from "./nametag";
import { ITimeline } from "@/lib/interfaces/timeline";
import { getTerminalOutput } from "@/lib/commands/parent";

const Timeline = () => {
  const [timeline, setTimeline] = useState<ITimeline[]>([]);
  const [input, setInput] = useState("");
  return (
    <>
      <div>
        {timeline.map((item) => {
          return (
            <>
              <div className="flex">
                <NameTag user="guest" directory="home" />
                <div className="ml-2">
                  <p>{item.inputText}</p>
                </div>
              </div>
              <div>
                <p>
                  {item.output} at {item.timestamp.toISOString()}
                </p>
              </div>
            </>
          );
        })}
      </div>
      <div className="flex">
        <NameTag user="guest" directory="home" />
        <input
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

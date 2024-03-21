import { animals } from "@/lib/animals";
import { getIPLocation, getRandomQuote } from "../actions";
import * as rdd from "react-device-detect";
import { IDeviceData } from "../interfaces/deviceData";
import { ICommandReturn } from "../interfaces/commands";

export const getBootUp = async (
  animal: string = "panda"
): Promise<ICommandReturn> => {
  const quote = await getRandomQuote(true);
  const quoteContent = quote.content;
  const quoteAuthor = quote.author;
  const location = await getIPLocation(true);
  const locationCity = location.city;
  const animalStr = animals[animal] || "dog";
  const deviceData: IDeviceData = rdd.deviceDetect(navigator.userAgent);
  console.log(deviceData);

  return {
    raw: animalStr.concat(
      "\n",
      quoteContent,
      "\n",
      quoteAuthor,
      "\n",
      locationCity
    ),
    jsx: (
      <>
        <div className="text-center w-fit">
          <div>
            <span className="text-textPurple">{quote.content}</span>
          </div>
          <div>
            <span className="text-textPurple"> ~ {quote.author}</span>
          </div>
        </div>
        <div className="flex items-center">
          <div className="text-left inline-block">
            <span className="text-textGreen" style={{ whiteSpace: "pre-line" }}>
              {animalStr}
            </span>
          </div>
          <div className="ml-4">
            <div>
              <span className="text-textGreen">IP:</span> {location.network}
            </div>
            <rdd.BrowserView>
              <div>
                <span className="text-textGreen">Browser:</span>{" "}
                {deviceData.browserName} {deviceData.browserFullVersion}
              </div>
              <div>
                <span className="text-textGreen">OS:</span> {deviceData.osName}{" "}
                {deviceData.osVersion}
              </div>
              <div>
                <span className="text-textGreen">Engine:</span>{" "}
                {deviceData.engineName} {deviceData.engineVersion}
              </div>
            </rdd.BrowserView>
            <rdd.MobileView>
              <div>
                <span className="text-textGreen">Device:</span>{" "}
                {deviceData.vendor} {deviceData.model}
              </div>
              <div>
                <span className="text-textGreen">OS:</span> {deviceData.os}{" "}
                {deviceData.osVersion}
              </div>
            </rdd.MobileView>
            <div>
              <span className="text-textGreen">Location:</span> {location.city},{" "}
              {location.country_name} ({location.latitude}, {location.longitude}
              )
            </div>
            <div>
              <span className="text-textGreen">Network:</span> {location.org}
            </div>
            <div>
              <span className="text-textGreen">Timezone:</span>{" "}
              {location.timezone}
            </div>
          </div>
        </div>
        <br></br>
        <div>
          <span className="text-textPurple">
            I wonder how the weather is in {locationCity} ...
          </span>
        </div>
        <div>{JSON.stringify(deviceData)}</div>
      </>
    ),
  };
};

// "use server";

import axios from "axios";
import { IQuoteResponse, sampleQuoteResponse } from "./interfaces/quotesAPI";
import {
  IGeoLocation,
  sampleGeoLocationResponse,
} from "./interfaces/locationAPI";
import { IIP, sampleIPResponse } from "./interfaces/ip";

const getURLWithParams = (base: string, endpoint: string, params: {}) => {
  const paramsStr = new URLSearchParams(params).toString();
  return base + endpoint + "?" + paramsStr;
};

export const getIP = async (useAPI: boolean): Promise<IIP> => {
  if (!useAPI) return sampleIPResponse;
  try {
    const response: IIP = (
      await axios.get(
        getURLWithParams("https://api.ipify.org", "", {
          format: "json",
        })
      )
    ).data;

    return response;
  } catch (err) {
    console.log(err);
    return sampleIPResponse;
  }
};

export const getRandomQuote = async (
  useAPI: boolean
): Promise<IQuoteResponse> => {
  if (!useAPI) return sampleQuoteResponse;
  try {
    const response: IQuoteResponse = (
      await axios.get(
        getURLWithParams("https://api.quotable.io", "/quotes/random", {
          limit: "1",
          tags: "technology",
          maxLength: "100",
        })
      )
    ).data[0];

    return response;
  } catch (err) {
    console.log(err);
    return sampleQuoteResponse;
  }
};

export const getIPLocation = async (useAPI: boolean) => {
  if (!useAPI) return sampleGeoLocationResponse;

  try {
    const ip: string = (await getIP(true)).ip;
    const response: IGeoLocation = (
      await axios.get(getURLWithParams("https://ipapi.co/" + ip, "/json", {}))
    ).data;

    return response;
  } catch (err) {
    console.log(err);
    return sampleGeoLocationResponse;
  }
};

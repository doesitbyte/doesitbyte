// "use server";

import axios from "axios";
import { IQuoteResponse, sampleQuoteResponse } from "./interfaces/quotesAPI";
import {
  ILocationResponse,
  sampleLocationResponse,
} from "./interfaces/locationAPI";

const getURLWithParams = (base: string, endpoint: string, params: {}) => {
  const paramsStr = new URLSearchParams(params).toString();
  return base + endpoint + "?" + paramsStr;
};

export const getRandomQuote = async (useAPI: boolean) => {
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
  if (!useAPI) return sampleLocationResponse;

  console.log(process.env.NEXT_PUBLIC_GEOLOC_API_KEY);

  try {
    const response: ILocationResponse = (
      await axios.get(
        getURLWithParams("https://api.geoapify.com/v1", "/ipinfo", {
          apiKey: process.env.NEXT_PUBLIC_GEOLOC_API_KEY,
        })
      )
    ).data;

    return response;
  } catch (err) {
    console.log(err);
    return sampleLocationResponse;
  }
};

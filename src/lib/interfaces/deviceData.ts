export interface IDeviceData {
  isBrowser?: boolean;
  browserMajorVersion?: string;
  browserFullVersion?: string;
  browserName?: string;
  engineName?: string;
  engineVersion?: string;
  osName?: string;
  osVersion: string;
  userAgent?: string;
  ua?: string;
  model?: string;
  os?: string;
  vendor?: string;
}

export const sampleDeviceDataResponse = {
  isBrowser: true,
  browserMajorVersion: "122",
  browserFullVersion: "122.0.0.0",
  browserName: "Chrome",
  engineName: "Blink",
  engineVersion: "122.0.0.0",
  osName: "Windows",
  osVersion: "10",
  userAgent:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
  isMobile: true,
  vendor: "Samsung",
  model: "SM-G981B",
  os: "Android",
  ua: "Mozilla/5.0 (Linux; Android 13; SM-G981B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36",
};

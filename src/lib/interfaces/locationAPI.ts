export interface IGeoLocation {
  ip: string;
  network: string;
  version: string;
  city: string;
  region: string;
  region_code: string;
  country: string;
  country_name: string;
  country_code: string;
  country_code_iso3: string;
  country_capital: string;
  country_tld: string;
  continent_code: string;
  in_eu: boolean;
  postal: string;
  latitude: number;
  longitude: number;
  timezone: string;
  utc_offset: string;
  country_calling_code: string;
  currency: string;
  currency_name: string;
  languages: string;
  country_area: number;
  country_population: number;
  asn: string;
  org: string;
}

export const sampleGeoLocationResponse: IGeoLocation = {
  ip: "45.127.44.60",
  network: "45.127.44.0/22",
  version: "IPv4",
  city: "Mumbai",
  region: "Maharashtra",
  region_code: "MH",
  country: "IN",
  country_name: "India",
  country_code: "IN",
  country_code_iso3: "IND",
  country_capital: "New Delhi",
  country_tld: ".in",
  continent_code: "AS",
  in_eu: false,
  postal: "400072",
  latitude: 19.0748,
  longitude: 72.8856,
  timezone: "Asia/Kolkata",
  utc_offset: "+0530",
  country_calling_code: "+91",
  currency: "INR",
  currency_name: "Rupee",
  languages:
    "en-IN,hi,bn,te,mr,ta,ur,gu,kn,ml,or,pa,as,bh,sat,ks,ne,sd,kok,doi,mni,sit,sa,fr,lus,inc",
  country_area: 3287590.0,
  country_population: 1352617328,
  asn: "AS134674",
  org: "TATA PLAY BROADBAND PRIVATE LIMITED",
};

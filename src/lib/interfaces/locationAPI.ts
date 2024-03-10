export interface ILocationResponse {
  city: City;
  continent: Continent;
  country: Country;
  location: ILocation;
  subdivisions: Subdivision[];
  state: State;
  datasource: Datasource[];
  ip: string;
}
interface Datasource {
  name: string;
  attribution: string;
  license: string;
}
interface State {
  name: string;
}
interface Subdivision {
  names: Names;
}
interface ILocation {
  latitude: number;
  longitude: number;
}
interface Country {
  geoname_id: number;
  iso_code: string;
  names: Names2;
  name: string;
  name_native: string;
  phone_code: string;
  capital: string;
  currency: string;
  flag: string;
  languages: Language[];
}
interface Language {
  iso_code: string;
  name: string;
  name_native: string;
}
interface Continent {
  code: string;
  geoname_id: number;
  names: Names2;
  name: string;
}
interface Names2 {
  de: string;
  en: string;
  es: string;
  fa: string;
  fr: string;
  ja: string;
  ko: string;
  "pt-BR": string;
  ru: string;
  "zh-CN": string;
}
interface City {
  name: string;
  names: Names;
}
interface Names {
  en: string;
}

export const sampleLocationResponse: ILocationResponse = {
  city: { name: "Mumbai", names: { en: "Mumbai" } },
  continent: {
    code: "AS",
    geoname_id: 6255147,
    names: {
      de: "Asien",
      en: "Asia",
      es: "Asia",
      fa: " آسیا",
      fr: "Asie",
      ja: "アジア大陸",
      ko: "아시아",
      "pt-BR": "Ásia",
      ru: "Азия",
      "zh-CN": "亚洲",
    },
    name: "Asia",
  },
  country: {
    geoname_id: 1269750,
    iso_code: "IN",
    names: {
      de: "Indien",
      en: "India",
      es: "India",
      fa: "هند",
      fr: "Inde",
      ja: "インド",
      ko: "인도",
      "pt-BR": "Índia",
      ru: "Индия",
      "zh-CN": "印度",
    },
    name: "India",
    name_native: "भारत",
    phone_code: "91",
    capital: "New Delhi",
    currency: "INR",
    flag: "🇮🇳",
    languages: [
      { iso_code: "hi", name: "Hindi", name_native: "हिन्दी" },
      { iso_code: "en", name: "English", name_native: "English" },
    ],
  },
  location: { latitude: 19.0748, longitude: 72.8856 },
  subdivisions: [{ names: { en: "Maharashtra" } }],
  state: { name: "Maharashtra" },
  datasource: [
    {
      name: "IP to City Lite",
      attribution: "<a href='https://db-ip.com'>IP Geolocation by DB-IP</a>",
      license: "Creative Commons Attribution License",
    },
  ],
  ip: "45.127.45.33",
};

export interface CountryType {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: { official: string; common: string };
    };
  };
  cca2: string;
}

export interface StateType {
  countries: Array<CountryType>;
  status: string;
  error?: string;
}

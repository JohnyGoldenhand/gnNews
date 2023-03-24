export interface countryType {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    common: string;
    official: string;
  };
}

export interface StateType {
  countries: any;
  status: string;
  error?: string;
}

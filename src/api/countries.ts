import { request } from "../lib/request";
import { CountiresProps, LocationProps } from "../lib/types";

export const getCountires: () => Promise<CountiresProps[]> = () =>
  request({ url: "countries", method: "get" });

export const getCountyLocations: (
  id: string
) => Promise<{ locations: LocationProps[] }> = (id) =>
  request({ url: `countries/${id}`, method: "get" });

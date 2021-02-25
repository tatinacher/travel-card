import { createEffect, createEvent, createStore, forward } from "effector";
import * as api from "api";
import { LocationProps } from "types";

export const $locations = createStore<LocationProps[]>([]);
export const start = createEvent<string>();

export const getLocations = createEffect<
  string,
  { locations: LocationProps[] }
>();
getLocations.use(api.getCountyLocations);

$locations.on(getLocations.doneData, (_, payload) => payload.locations);

getLocations.doneData.watch((el) => console.log(el));
$locations.watch((el) => console.log(el));

forward({
  from: start,
  to: getLocations,
});

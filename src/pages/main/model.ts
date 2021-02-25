import { createEffect, createEvent, createStore, forward } from "effector";
import * as api from "api";
import { CountiresProps } from "types";

export const $countries = createStore<CountiresProps[] | null>(null);
export const start = createEvent();

export const getCountires = createEffect<void, CountiresProps[]>();
getCountires.use(api.getCountires);

$countries.on(getCountires.doneData, (_, payload) => payload);

getCountires.doneData.watch((el) => console.log(el));
$countries.watch((el) => console.log(el));

forward({
  from: start,
  to: getCountires,
});

import { PLACES } from "../constants";

export const findPlaceByCode = (code) => {
  const actualPlace = PLACES.find(({ code: placeCode }) => code === placeCode);

  return `${actualPlace.place} (${actualPlace.code})`;
};

export const findPlaceIndexByName = (completeName) =>
  PLACES.findIndex(({ code }) => code === completeName.match(/.*\((.*)\)/)[1]);

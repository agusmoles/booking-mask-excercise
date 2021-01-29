import { PLACES } from "../constants";

export const findPlaceByCode = (code) => {
  const actualPlace = PLACES.find(({ code: placeCode }) => code === placeCode);

  return `${actualPlace.place} (${actualPlace.code})`;
};

export const findPlaceIndexByName = (completeName) => {
  const validPlace = completeName.match(/.*\((.*)\)/);
  if (!validPlace) return;
  return PLACES.findIndex(({ code }) => code === validPlace[1]);
};

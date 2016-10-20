export const MapConstants = {
  SAVE_MAP_TO_STORE: "SAVE_MAP_TO_STORE",
  SAVE_POS_TO_STORE: "SAVE_POS_TO_STORE"
};

export const saveMapToStore = map => ({
  type: MapConstants.SAVE_MAP_TO_STORE,
  map
});

export const savePosToStore = pos => ({
  type: MapConstants.SAVE_POS_TO_STORE,
  pos
});

import { combineReducers } from "redux";

const songReducer = () => {
  return [
    { title: "no scrubs", duration: "4.05" },
    { title: "yes scrubs", duration: "4.13" },
    { title: "all scrubs", duration: "5.25" },
    { title: "nops scrubs", duration: "3.05" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer,
});

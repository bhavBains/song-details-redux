import React from "react";
import { connect } from "react-redux";

function SongDetails(props) {
  if (!props.song) return <div>Select a song</div>;

  return (
    <div>
      <div>{props.song.title}</div>
      <div>{props.song.duration}</div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetails);

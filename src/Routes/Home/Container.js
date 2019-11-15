import React, { Component } from "react";
import Presenter from "./Presenter";

export default class extends Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true
  };
  render() {
    const { nowPlaying, upcoming, popular, error, loading } = this.state;
    return (
      <Presenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}

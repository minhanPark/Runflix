import React, { Component } from "react";
import Presenter from "./Presenter";

export default class extends Component {
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    loading: true,
    error: null
  };
  render() {
    const { topRated, popular, airingTday, loading, error } = this.state;
    return (
      <Presenter
        topRated={topRated}
        popular={popular}
        airingTday={airingTday}
        loading={loading}
        error={error}
      />
    );
  }
}

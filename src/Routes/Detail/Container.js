import React, { Component } from "react";
import Presenter from "./Presenter";

export default class extends Component {
  state = {
    result: null,
    error: null,
    loading: true
  };

  render() {
    const { result, error, loading } = this.state;
    return <Presenter result={result} error={error} loading={loading} />;
  }
}

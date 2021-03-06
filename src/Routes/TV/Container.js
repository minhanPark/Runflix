import React, { Component } from "react";
import Presenter from "./Presenter";
import { tvApi } from "../../api";

export default class extends Component {
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    loading: true,
    error: null
  };

  async componentDidMount() {
    try {
      const {
        data: { results: topRated }
      } = await tvApi.topRated();
      const {
        data: { results: popular }
      } = await tvApi.popular();
      const {
        data: { results: airingToday }
      } = await tvApi.airingToday();
      this.setState({
        topRated,
        popular,
        airingToday
      });
    } catch {
      this.setState({
        error: "Can't find TV information."
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }
  render() {
    const { topRated, popular, airingToday, loading, error } = this.state;
    console.log(this.state);
    return (
      <Presenter
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
        loading={loading}
        error={error}
      />
    );
  }
}

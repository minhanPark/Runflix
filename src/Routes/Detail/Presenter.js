import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Presenter = ({ result, error, loading }) => null;

Presenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default Presenter;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ErrorWrapper from './styled';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true, error, errorInfo });
  }

  render() {
    const { state, props } = this;
    return state.hasError && state.error && state.errorInfo ? (
      <ErrorWrapper>
        <span>{state.error.message}</span>
      </ErrorWrapper>
    ) : (
      props.children
    );
  }
}
ErrorBoundary.defaultProps = {
  children: () => {},
};
ErrorBoundary.propTypes = {
  children: PropTypes.func,
};
export default ErrorBoundary;

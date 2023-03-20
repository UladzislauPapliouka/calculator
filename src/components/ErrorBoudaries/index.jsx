import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ErrorText, ErrorWrapper } from './styled';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromProps() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
  }

  render() {
    const { state, props } = this;
    return state.errorInfo && state.errorInfo.componentStack ? (
      <ErrorWrapper>
        <ErrorText>{state.error.message}</ErrorText>
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

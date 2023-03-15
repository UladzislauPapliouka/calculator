import { Component } from 'react';
import PropTypes from 'prop-types';

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
    return state.hasError && state.error && state.errorInfo
      ? props.errorFallback()
      : props.children;
  }
}
ErrorBoundary.defaultProps = {
  errorFallback: () => {},
};
ErrorBoundary.propTypes = {
  errorFallback: PropTypes.func,
};
export default ErrorBoundary;

import React, {Component} from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError:false
        }
    }
    componentDidCatch(error, errorInfo) {
        this.setState({hasError:true})
    }

    render() {
        return this.state.hasError ?
            this.props.errorFallback
            : this.props.children
    }
}
ErrorBoundary.defaultProps = {
    errorFallback: ()=>{}
}
export {
    ErrorBoundary
}
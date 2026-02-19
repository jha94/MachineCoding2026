import { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorPropTypes {
    children: ReactNode,
    fallback?: ReactNode
}

interface ErrorStateTypes {
    hasError: boolean,
}

class ErrorBoundary extends Component<ErrorPropTypes, ErrorStateTypes> {
    static displayName = "ErrorBoundary";

    constructor(props: ErrorPropTypes) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(_: globalThis.Error): ErrorStateTypes {
        return { hasError: true };
    }

    componentDidCatch(error: globalThis.Error, errorInfo: ErrorInfo): void {
        // Send to monitoring service
        console.log('error', error);
        console.log('error info', errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback?? <p>Oops!! Something went wrong.</p>
        }
        return this.props.children
    }
}
export default ErrorBoundary
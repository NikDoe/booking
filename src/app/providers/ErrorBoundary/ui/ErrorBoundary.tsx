import React, { ErrorInfo, ReactNode, Suspense } from 'react';
import { ErrorFallback } from '@/widgets/ErrorFallback';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps,ErrorBoundaryState > {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error: ErrorBoundaryState) {
        return { hasError: true };
    }
  
    componentDidCatch(error: Error, info: ErrorInfo) {
        console.log(error, info);
    }
  
    render() {
        const { children } = this.props;
        const { hasError } = this.state;

        if (hasError) {
            return <Suspense fallback=""><ErrorFallback /></Suspense>;
        }
  
        return children; 
    }
}

export default ErrorBoundary;
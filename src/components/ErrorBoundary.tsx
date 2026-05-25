import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("ErrorBoundary caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-8">
            <div className="max-w-md text-center">
              <p className="kicker mb-4">Error</p>
              <h1 className="display-l mb-4">Something went wrong.</h1>
              <p className="text-foreground-2 mb-8">
                Please refresh the page. If the issue persists, contact{" "}
                <a href="mailto:jeff@zyjeski.com" className="text-gold">
                  jeff@zyjeski.com
                </a>
                .
              </p>
              <button
                className="btn-gold"
                onClick={() => window.location.reload()}
              >
                Reload
              </button>
            </div>
          </div>
        )
      );
    }
    return this.props.children;
  }
}

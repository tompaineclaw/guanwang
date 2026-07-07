import { Component, type ErrorInfo, type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('[ErrorBoundary]', error, info)
  }

  private handleReload = () => {
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-md w-full bg-white/[0.04] border border-white/10 rounded-2xl p-8 text-center">
            <div className="text-5xl mb-4">⚠️</div>
            <h1 className="text-2xl font-bold text-white mb-3">页面出错了</h1>
            <p className="text-sm text-white/70 leading-relaxed mb-6">
              抱歉，渲染时遇到意外问题。请刷新页面重试，或稍后再来。
            </p>
            <button
              type="button"
              onClick={this.handleReload}
              className="px-6 py-2.5 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-colors"
            >
              刷新页面
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

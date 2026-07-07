import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import CookieBanner from './CookieBanner'
import VideoBackground from './VideoBackground'

export default function Layout() {
  const { pathname } = useLocation()
  const showVideo = pathname === '/'
  return (
    <div className="relative min-h-screen flex flex-col">
      {showVideo && <VideoBackground />}
      <div className="relative z-10 flex flex-col flex-1">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
      <CookieBanner />
    </div>
  )
}

import './globals.css'
import Navbar from './components/Navbar'

export const metadata = {
  title: 'Beykonak İnşaat',
  description: 'Modern yaşam alanları inşa ediyoruz',
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

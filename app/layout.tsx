import './globals.css'

export const metadata = {
  title: 'AI Exhibit Monitor Dashboard',
  description: 'Dashboard for monitoring exhibit performance',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

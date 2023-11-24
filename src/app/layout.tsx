export const metadata = {
  title: 'Qwavee - Technical Test',
  description: 'Qwavee Technical Test'
}

interface Props {
  children: React.ReactNode
}

function RootLayout({ children }: Props) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout

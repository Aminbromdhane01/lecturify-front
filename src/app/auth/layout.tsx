import { Padding } from "@mui/icons-material"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{ padding: 0, margin: 0 }}>
      <body>  {children}</body>
    </html>
  )
}

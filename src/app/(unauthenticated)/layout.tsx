import { ReactNode } from 'react'

export default function UnAuthenticatedLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className="h-full">
        <div>unauth</div>
        {children}
      </body>
    </html>
  )
}

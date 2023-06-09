import { Siderbar } from '@/components/Siderbar'
import { ReactNode } from 'react'

export default function AuthenticatedLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className="h-screen w-full">
        <div className="grid grid-cols-auth-layout gap-24">
          <Siderbar />
          {children}
        </div>
      </body>
    </html>
  )
}

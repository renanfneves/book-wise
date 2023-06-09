'use client'

import Logo from '@/assets/logo.png'
import FakeAvatar from '@/assets/fake-avatar.png'
import Image from 'next/image'
import { LineChart, Glasses, User2, LogOut } from 'lucide-react'
import { useSelectedLayoutSegment } from 'next/navigation'

import Link from 'next/link'
import { useCallback } from 'react'
import clsx from 'clsx'

interface LinkProps {
  label: string
  path: string
  targetSegment: string
  icon: JSX.Element
}

const links: LinkProps[] = [
  { label: 'Home', path: '/', targetSegment: 'home', icon: <LineChart /> },
  {
    label: 'Explorar',
    path: '/explorar',
    targetSegment: 'explorar',
    icon: <Glasses />,
  },
  {
    label: 'Perfil',
    path: '/perfil',
    targetSegment: 'perfil',
    icon: <User2 />,
  },
]

export function Siderbar() {
  const activeSegment = useSelectedLayoutSegment()

  const handleActiveTab = useCallback(
    (item: LinkProps) => {
      return (
        activeSegment === item.targetSegment ||
        (!activeSegment && item.targetSegment === 'home')
      )
    },
    [activeSegment],
  )

  return (
    <div className="flex h-[95vh] w-full flex-1 flex-col items-center gap-16 rounded-xl bg-[url(../assets/bg-sidebar.png)] bg-cover py-10">
      <Image src={Logo} alt="" width={128} height={32} />
      <nav className="flex flex-col gap-8">
        {links.map((item) => {
          return (
            <Link
              className="hover:text-primaryMain relative flex items-center gap-4 px-4 text-gray-400 hover:opacity-70"
              key={item.label}
              href={item.path}
            >
              {handleActiveTab(item) && (
                <div className="absolute left-0 top-0 h-full w-1 rounded-full bg-gradient-to-t from-nav-link-purple to-nav-link-blue" />
              )}
              <>
                {item.icon}
                <span
                  className={clsx({
                    'text-white': handleActiveTab(item),
                    'font-bold': handleActiveTab(item),
                  })}
                >
                  {item.label}
                </span>
              </>
            </Link>
          )
        })}
      </nav>
      <button className="mt-auto flex w-full flex-row items-center justify-center gap-3">
        <Image
          src={FakeAvatar}
          width={40}
          height={40}
          alt=""
          className="h-10 w-10 rounded-full"
        />
        <span className="max-w-[140px] text-sm leading-snug">name</span>
        <LogOut className="text-red-500" />
      </button>
    </div>
  )
}

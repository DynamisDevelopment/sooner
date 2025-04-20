'use client'

import Link from 'next/link'
import Image from 'next/image'

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <div className="flex items-center space-x-2 bg-white rounded p-2 max-w-fit">
        <Image
          src="/images/logo-plain.svg"
          alt="Logo"
          width={50}
          height={50}
          className="w-10 h-10 object-contain"
          style={{ height: '50px', minWidth: '100px' }}
        />

        <div className="flex flex-col">
          <span className="text-lg font-bold text-gray-800">
            Soon <span className="text-red-500 font-semibold">ERS</span>
          </span>
          <span className="text-sm text-gray-600 font-semibold">
            <span className="text-red-500 font-bold">E</span>mergency{' '}
            <span className="text-red-500 font-bold">R</span>oadside{' '}
            <span className="text-red-500 font-bold">S</span>ervice
          </span>
        </div>
      </div>
    </Link>
  )
}

export default Logo

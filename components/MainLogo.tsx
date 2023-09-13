import { BookOpenCheck } from 'lucide-react'
import Link from 'next/link';
import React from 'react'

interface MainLogoProps {
    height: number | string;
    width: number |string;
}

const MainLogo = ({ height, width }: MainLogoProps) => {
    return (
        <Link href="/" className='flex items-center cursor-pointer'>
            <BookOpenCheck className={`w-${width} h-${height} text-rose-600`} />
            <span className='uppercase font-semibold text-orange-400'>স্টার গল্প</span>
        </Link>
    )
}

export default MainLogo
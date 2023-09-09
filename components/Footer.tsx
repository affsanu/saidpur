import React from 'react'
import MainLogo from './MainLogo'
import { Copyright } from 'lucide-react'
import { Separator } from './ui/separator'

type Props = {}

const Footer = (props: Props) => {
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',     // Display the year
    };
    const date = new Date();
    const currentYear = new Intl.DateTimeFormat('bn-BD', options).format(date);

    return (
        <div className='w-full h-20 text-sm border-t shadow'>
            <div className='max-w-6xl h-full mx-auto flex justify-between items-center px-3 md:px-4'>
                <MainLogo height={10} width={10} />
                <div className='flex items-center'>
                    <span className='flex items-center gap-1'>
                        স্বত্ব {" "}
                        <Copyright className='w-3 h-3' />
                        {currentYear} {" "}
                        স্টার গল্প
                    </span>
                    <Separator orientation="vertical" className='w-0.5 h-4 mx-2' />
                    <span>ব্লগার - সানু ইসলাম</span>
                </div>
            </div>
        </div>
    )
}

export default Footer
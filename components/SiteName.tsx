import React from 'react'
import MainLogo from './MainLogo'
import Banner72090 from './add/Banner72090'

type Props = {}

const SiteName = (props: Props) => {
    return (
        <div className='w-full h-32 md:h-36'>
            <div className='flex justify-between max-w-6xl h-full items-center mx-auto px-4'>

                <div className='hidden sm:block'>
                    <MainLogo height={10} width={10} />
                </div>
                <div className='flex items-center cursor-pointer'>
                    <Banner72090 />
                </div>

            </div>
        </div>
    )
}

export default SiteName
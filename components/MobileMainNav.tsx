import { Menu, Search } from 'lucide-react'
import React from 'react'
import MainLogo from './MainLogo'
import { ModeToggle } from './ModeToggle'
import { LoginDialog } from './login-dialog'
import { MobileNavSheet } from './MobileNavSheet'

type Props = {}

const MobileMainNav = (props: Props) => {
    return (
        <div className='md:hidden w-full h-8'>
            <div className='flex justify-between items-center h-full m-3'>
                <div className='flex gap-2 items-center'>
                    <MobileNavSheet />
                    <Search className='w-6 h-6' />
                </div>
                <MainLogo height={10} width={10} />
                <div className='flex gap-2 items-center'>
                    <LoginDialog />
                    <ModeToggle />
                </div>
            </div>
        </div>
    )
}

export default MobileMainNav
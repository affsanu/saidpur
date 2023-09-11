import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
import MiniSection from './MiniSection'

type Props = {}

const CardSection = (props: Props) => {
    return (
        <div className='bg-black w-full py-6 space-y-6'>
            <MiniSection />
            <div className='max-w-6xl mx-auto'>
                <div className='h-[420px]  px-3 md:px-4 lg:px-4 xl:px-0'>
                    <div className='grid grid-cols-1 h-full w-full  md:grid-cols-3 gap-4'>
                        <Card className='w-full rounded-md'>
                            <CardHeader>

                            </CardHeader>
                            <CardContent>

                            </CardContent>
                            <CardFooter>

                            </CardFooter>
                        </Card>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CardSection
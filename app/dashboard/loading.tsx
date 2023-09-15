import { SkeletonOne } from '@/components/skeleton/SkeletonOne';

type Props = {}

const loading = (props: Props) => {
  return (
    <div className='h-screen w-full flex justify-center items-center bg-black'>
        <SkeletonOne />
    </div>
  )
}

export default loading
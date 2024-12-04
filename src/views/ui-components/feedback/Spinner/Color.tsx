import Spinner from '@/components/ui/Spinner'

const Color = () => {
    return (
        <div className="flex items-center">
            <Spinner className="mr-4 text-yellow-500" size="40px" />
            <Spinner className="mr-4 text-green-500" size="40px" />
        </div>
    )
}

export default Color
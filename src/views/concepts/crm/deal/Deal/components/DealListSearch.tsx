import { forwardRef } from 'react'
import DebouceInput from '@/components/shared/DebouceInput'
import { TbSearch } from 'react-icons/tb'

type DealListSearchProps = {
    onInputChange: (value: string) => void
}

const DealListSearch = forwardRef<
    HTMLInputElement,
    DealListSearchProps
>((props, ref) => {
    const { onInputChange } = props

    return (
        <DebouceInput
            ref={ref}
            placeholder="Quick search..."
            suffix={<TbSearch className="text-lg" />}
            onChange={(e) => onInputChange(e.target.value)}
        />
    )
})

DealListSearch.displayName = 'DealListSearch'

export default DealListSearch

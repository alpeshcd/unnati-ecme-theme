import { forwardRef } from 'react'
import DebouceInput from '@/components/shared/DebouceInput'
import { TbSearch } from 'react-icons/tb'

type MaterialRequestListSearchProps = {
    onInputChange: (value: string) => void
}

const MaterialRequestListSearch = forwardRef<
    HTMLInputElement,
    MaterialRequestListSearchProps
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

MaterialRequestListSearch.displayName = 'MaterialRequestListSearch'

export default MaterialRequestListSearch

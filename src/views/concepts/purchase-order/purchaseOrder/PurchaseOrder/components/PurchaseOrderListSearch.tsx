import { forwardRef } from 'react'
import DebouceInput from '@/components/shared/DebouceInput'
import { TbSearch } from 'react-icons/tb'

type PurchaseOrderListSearchProps = {
    onInputChange: (value: string) => void
}

const PurchaseOrderListSearch = forwardRef<
    HTMLInputElement,
    PurchaseOrderListSearchProps
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

PurchaseOrderListSearch.displayName = 'PurchaseOrderListSearch'

export default PurchaseOrderListSearch

import { forwardRef } from 'react'
import DebouceInput from '@/components/shared/DebouceInput'
import { TbSearch } from 'react-icons/tb'

type CustomerListSearchProps = {
    onInputChange: (value: string) => void
}

const PayrolldeductionsListSearch = forwardRef<
    HTMLInputElement,
    CustomerListSearchProps
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

PayrolldeductionsListSearch.displayName = 'PayrolldeductionsListSearch'

export default PayrolldeductionsListSearch

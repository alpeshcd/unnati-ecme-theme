import useCustomerList from '../hooks/useCustomerList'
import cloneDeep from 'lodash/cloneDeep'
import PaycheckListSearch from './PaycheckListSearch'
import PaycheckListTableFilter from './PaycheckListTableFilter'

const PaycheckListTableTools = () => {
    const { tableData, setTableData } = useCustomerList()

    const handleInputChange = (val: string) => {
        const newTableData = cloneDeep(tableData)
        newTableData.query = val
        newTableData.pageIndex = 1
        if (typeof val === 'string' && val.length > 1) {
            setTableData(newTableData)
        }

        if (typeof val === 'string' && val.length === 0) {
            setTableData(newTableData)
        }
    }

    return (
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <PaycheckListSearch onInputChange={handleInputChange} />
            <PaycheckListTableFilter />
        </div>
    )
}

export default PaycheckListTableTools

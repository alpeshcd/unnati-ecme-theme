import useCustomerList from '../hooks/useCustomerList'
import cloneDeep from 'lodash/cloneDeep'
import AdvanceListSearch from './AdvanceListSearch'
import AdvanceListTableFilter from './AdvanceListTableFilter'

const AdvanceListTableTools = () => {
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
            <AdvanceListSearch onInputChange={handleInputChange} />
            <AdvanceListTableFilter />
        </div>
    )
}

export default AdvanceListTableTools

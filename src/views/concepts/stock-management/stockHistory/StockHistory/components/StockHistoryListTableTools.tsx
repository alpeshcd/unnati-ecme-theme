import useCustomerList from '../hooks/useCustomerList'
import cloneDeep from 'lodash/cloneDeep'
import StockHistoryListSearch from './StockHistoryListSearch'
import StockHistoryListTableFilter from './StockHistoryListTableFilter'


const StockHistoryListTableTools = () => {
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
            <StockHistoryListSearch onInputChange={handleInputChange} />
            <StockHistoryListTableFilter />
        </div>
    )
}

export default StockHistoryListTableTools
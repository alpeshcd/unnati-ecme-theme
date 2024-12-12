import useCustomerList from '../hooks/useCustomerList'
import cloneDeep from 'lodash/cloneDeep'
import ItemsTypesListSearch from './ItemTypesListSearch'
import ItemsTypesListTableFilter from './ItemTypesListTableFilter'

const ItemTypesListTableTools = () => {
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
            <ItemsTypesListSearch onInputChange={handleInputChange} />
            <ItemsTypesListTableFilter />
        </div>
    )
}

export default ItemTypesListTableTools

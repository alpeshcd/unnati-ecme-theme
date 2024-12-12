import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import CustomerListSelected from '@/views/concepts/customers/CustomerList/components/CustomerListSelected'
import ItemStockListActionTools from './components/ItemStockListActionTools'
import ItemStockListTableTools from './components/ItemStockListTableTools'
import ItemStockListTable from './components/ItemStockListTable'

const ItemsList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>ItemStock</h3>
                            <ItemStockListActionTools />
                        </div>
                        <ItemStockListTableTools />
                        <ItemStockListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <CustomerListSelected />
        </>
    )
}

export default ItemsList

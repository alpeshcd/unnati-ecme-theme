import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import CustomerListSelected from '@/views/concepts/customers/CustomerList/components/CustomerListSelected'
import ItempriceHistoryListActionTools from './components/ItempriceHistoryListActionTools'
import ItempriceHistoryListTable from './components/ItempriceHistoryListTable'
import ItempriceHistoryListTableTools from './components/ItempriceHistoryListTableTools'


const ItempriceHistoryList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Itemprice History</h3>
                            <ItempriceHistoryListActionTools />
                        </div>
                        <ItempriceHistoryListTableTools />
                        <ItempriceHistoryListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <CustomerListSelected />
        </>
    )
}

export default ItempriceHistoryList

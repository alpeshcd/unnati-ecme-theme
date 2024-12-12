import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import CustomerListSelected from '@/views/concepts/customers/CustomerList/components/CustomerListSelected'
import StockHistoryListActionTools from './components/StockHistoryListActionTools'
import StockHistoryListTableTools from './components/StockHistoryListTableTools'
import StockHistoryListTable from './components/StockHistoryListTable'


const StockHistoryList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Stock History</h3>
                            <StockHistoryListActionTools />
                        </div>
                        <StockHistoryListTableTools />
                        <StockHistoryListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <CustomerListSelected />
        </>
    )
}

export default StockHistoryList

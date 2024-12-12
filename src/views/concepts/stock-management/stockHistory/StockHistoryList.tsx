import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import StockHistoryListActionTools from './StockHistory/components/StockHistoryListActionTools'
import StockHistoryListTableTools from './StockHistory/components/StockHistoryListTableTools'
import StockHistoryListTable from './StockHistory/components/StockHistoryListTable'
import StockHistoryListSelected from './StockHistory/components/StockHistoryListSelected'




const StockHistoryList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Stock History </h3>
                            <StockHistoryListActionTools />
                        </div>
                        <StockHistoryListTableTools />
                        <StockHistoryListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <StockHistoryListSelected />
        </>
    )
}

export default StockHistoryList

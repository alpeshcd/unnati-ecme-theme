import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import ItempriceHistoryListActionTools from './ItempriceHistory/components/ItempriceHistoryListActionTools'
import ItempriceHistoryListTableTools from './ItempriceHistory/components/ItempriceHistoryListTableTools'
import ItempriceHistoryListTable from './ItempriceHistory/components/ItempriceHistoryListTable'
import ItempriceHistoryListSelected from './ItempriceHistory/components/ItempriceHistoryListSelected'

const ItempriceHistoryList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Itemprice History </h3>
                            <ItempriceHistoryListActionTools />
                        </div>
                        <ItempriceHistoryListTableTools />
                        <ItempriceHistoryListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <ItempriceHistoryListSelected />
        </>
    )
}

export default ItempriceHistoryList

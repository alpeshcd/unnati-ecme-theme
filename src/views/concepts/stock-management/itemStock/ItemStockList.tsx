import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import ItemStockListActionTools from './ItemStock/components/ItemStockListActionTools'
import ItemStockListTableTools from './ItemStock/components/ItemStockListTableTools'
import ItemStockListTable from './ItemStock/components/ItemStockListTable'
import ItemStockListSelected from './ItemStock/components/ItemStockListSelected'

const ItemStockList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:Items-center md:justify-between gap-2">
                            <h3>Stock </h3>
                            <ItemStockListActionTools />
                        </div>
                        <ItemStockListTableTools />
                        <ItemStockListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <ItemStockListSelected />
        </>
    )
}

export default ItemStockList

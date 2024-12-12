import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import ItemsListActionTools from './Items/components/ItemsListActionTools'
import ItemsListTableTools from './Items/components/ItemsListTableTools'
import ItemsListTable from './Items/components/ItemsListTable'
import ItemsListSelected from './Items/components/ItemsListSelected'




const ItemsList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Items </h3>
                            <ItemsListActionTools />
                        </div>
                        <ItemsListTableTools />
                        <ItemsListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <ItemsListSelected />
        </>
    )
}

export default ItemsList

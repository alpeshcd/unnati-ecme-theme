import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import ItemsTypesListActionTools from './ItemTypes/components/ItemTypesListActionTools'
import ItemsTypesListTableTools from './ItemTypes/components/ItemTypesListTableTools'
import ItemsTypesListTable from './ItemTypes/components/ItemTypesListTable'
import ItemsTypesListSelected from './ItemTypes/components/ItemTypesListSelected'



const ItemTypesList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>ItemsTypes </h3>
                            <ItemsTypesListActionTools />
                        </div>
                        <ItemsTypesListTableTools />
                        <ItemsTypesListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <ItemsTypesListSelected />
        </>
    )
}

export default ItemTypesList

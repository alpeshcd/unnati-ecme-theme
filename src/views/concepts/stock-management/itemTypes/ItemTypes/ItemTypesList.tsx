import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import CustomerListSelected from './components/ItemTypesListSelected'
import ItemsTypesListTableTools from './components/ItemTypesListTableTools'
import ItemsTypesListTable from './components/ItemTypesListTable'
import ItemsTypesListActionTools from './components/ItemTypesListActionTools'


const ItemTypesList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>ItemsTypes</h3>
                            <ItemsTypesListActionTools />
                        </div>
                        <ItemsTypesListTableTools />
                        <ItemsTypesListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <CustomerListSelected />
        </>
    )
}

export default ItemTypesList

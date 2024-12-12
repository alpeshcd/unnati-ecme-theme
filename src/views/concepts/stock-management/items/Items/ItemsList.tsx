import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import ItemsListActionTools from './components/ItemsListActionTools'
import ItemsListTableTools from './components/ItemsListTableTools'
import ItemsListTable from './components/ItemsListTable'
import CustomerListSelected from '@/views/concepts/customers/CustomerList/components/CustomerListSelected'


const ItemsList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Items</h3>
                            <ItemsListActionTools />
                        </div>
                        <ItemsListTableTools />
                        <ItemsListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <CustomerListSelected />
        </>
    )
}

export default ItemsList

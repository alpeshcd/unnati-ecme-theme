import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import CustomerListSelected from '@/views/concepts/customers/CustomerList/components/CustomerListSelected'
import ItemPricingListActionTools from './components/ItemPricingListActionTools'
import ItemPricingListTable from './components/ItemPricingListTable'
import ItemPricingListTableTools from './components/ItemPricingListTableTools'


const ItemPricingList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>ItemPricing</h3>
                            <ItemPricingListActionTools />
                        </div>
                        <ItemPricingListTableTools />
                        <ItemPricingListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <CustomerListSelected />
        </>
    )
}

export default ItemPricingList

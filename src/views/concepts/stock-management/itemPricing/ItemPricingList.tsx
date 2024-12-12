import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import ItemPricingListActionTools from './ItemPricing/components/ItemPricingListActionTools'
import ItemPricingListTableTools from './ItemPricing/components/ItemPricingListTableTools'
import ItemPricingListTable from './ItemPricing/components/ItemPricingListTable'
import ItemPricingListSelected from './ItemPricing/components/ItemPricingListSelected'

const ItemPricingList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>ItemPricing </h3>
                            <ItemPricingListActionTools />
                        </div>
                        <ItemPricingListTableTools />
                        <ItemPricingListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <ItemPricingListSelected />
        </>
    )
}

export default ItemPricingList

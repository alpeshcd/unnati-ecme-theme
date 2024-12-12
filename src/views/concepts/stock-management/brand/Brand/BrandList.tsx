import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import CustomerListSelected from '@/views/concepts/customers/CustomerList/components/CustomerListSelected'
import BrandListActionTools from './components/BrandListActionTools'
import BrandListTableTools from './components/BrandListTableTools'
import BrandListTable from './components/BrandListTable'



const BrandList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Brand</h3>
                            <BrandListActionTools />
                        </div>
                        <BrandListTableTools />
                        <BrandListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <CustomerListSelected />
        </>
    )
}

export default BrandList

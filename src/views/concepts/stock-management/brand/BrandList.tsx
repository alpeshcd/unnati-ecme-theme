import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import BrandListActionTools from './Brand/components/BrandListActionTools'
import BrandListTableTools from './Brand/components/BrandListTableTools'
import BrandListTable from './Brand/components/BrandListTable'
import BrandListSelected from './Brand/components/BrandListSelected'


const BrandList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Brand </h3>
                            <BrandListActionTools />
                        </div>
                        <BrandListTableTools />
                        <BrandListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <BrandListSelected />
        </>
    )
}

export default BrandList

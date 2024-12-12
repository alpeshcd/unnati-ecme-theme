import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import DealListActionTools from './Deal/components/DealListActionTools'
import DealListTable from './Deal/components/DealListTable'
import DealListSelected from './Deal/components/DealListSelected'
import DealListTableTools from './Deal/components/DealListTableTools'




const DealList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Deal </h3>
                            <DealListActionTools />
                        </div>
                        <DealListTableTools />
                        <DealListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <DealListSelected />
        </>
    )
}

export default DealList

import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import DealListActionTools from './components/DealListActionTools'
import DealListTableTools from './components/DealListTableTools'
import DealListTable from './components/DealListTable'
import DealListSelected from './components/DealListSelected'




const DealList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Deal</h3>
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

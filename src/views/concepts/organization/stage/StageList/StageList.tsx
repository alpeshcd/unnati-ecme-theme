import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import CustomerListSelected from './components/StageListSelected'
import StageListActionTools from './components/StageListActionTools'
import StageListTableTools from './components/StageListTableTools'
import StageListTable from './components/StageListTable'


const StageList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Stage</h3>
                            <StageListActionTools />
                        </div>
                        <StageListTableTools />
                        <StageListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <CustomerListSelected />
        </>
    )
}

export default StageList

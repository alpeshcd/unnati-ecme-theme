import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import StageListActionTools from './StageList/components/StageListActionTools'
import StageListTableTools from './StageList/components/StageListTableTools'
import StageListTable from './StageList/components/StageListTable'
import StageListSelected from './StageList/components/StageListSelected'


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
            <StageListSelected />
        </>
    )
}

export default StageList

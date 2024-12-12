import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import AdvanceListActionTools from './Advance/components/AdvanceListActionTools'
import AdvanceListTableTools from './Advance/components/AdvanceListTableTools'
import AdvanceListTable from './Advance/components/AdvanceListTable'
import AdvanceListSelected from './Advance/components/AdvanceListSelected'



const AdvanceList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Advance </h3>
                            <AdvanceListActionTools />
                        </div>
                        <AdvanceListTableTools />
                        <AdvanceListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <AdvanceListSelected />
        </>
    )
}

export default AdvanceList

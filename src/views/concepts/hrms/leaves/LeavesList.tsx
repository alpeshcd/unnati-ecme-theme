import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import LeavesListActionTools from './LeavesList/components/LeavesListActionTools'
import LeavesListTableTools from './LeavesList/components/LeavesListTableTools'
import LeavesListTable from './LeavesList/components/LeavesListTable'
import LeavesListSelected from './LeavesList/components/LeavesListSelected'

const LeavesList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Leaves</h3>
                            <LeavesListActionTools />
                        </div>
                        <LeavesListTableTools />
                        <LeavesListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <LeavesListSelected/>
        </>
    )
}

export default LeavesList

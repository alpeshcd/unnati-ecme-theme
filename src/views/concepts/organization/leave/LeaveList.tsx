import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import LeaveListTableTools from './LeaveList/components/LeaveListTableTools'
import LeaveListTable from './LeaveList/components/LeaveListTable'
import LeaveListSelected from './LeaveList/components/LeaveListSelected'
import LeaveListActionTools from './LeaveList/components/LeaveListActionTools'

const LeaveList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Leave</h3>
                            <LeaveListActionTools />
                        </div>
                        <LeaveListTableTools />
                        <LeaveListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <LeaveListSelected/>
        </>
    )
}

export default LeaveList

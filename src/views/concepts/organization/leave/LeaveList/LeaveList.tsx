import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import CustomerListSelected from './components/LeaveListSelected'
import LeaveListActionTools from './components/LeaveListActionTools'
import LeaveListTableTools from './components/LeaveListTableTools'
import LeaveListTable from './components/LeaveListTable'

const LeaveList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Leave Type</h3>
                            <LeaveListActionTools/>
                        </div>
                        <LeaveListTableTools />
                        <LeaveListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <CustomerListSelected />
        </>
    )
}

export default LeaveList

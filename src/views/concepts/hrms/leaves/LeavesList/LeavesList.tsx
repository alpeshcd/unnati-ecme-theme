import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import CustomerListSelected from './components/LeavesListSelected'
import LeavesListActionTools from './components/LeavesListActionTools'
import LeavesListTableTools from './components/LeavesListTableTools'
import LeavesListTable from './components/LeavesListTable'


const LeavesList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Leaves </h3>
                            <LeavesListActionTools/>
                        </div>
                        <LeavesListTableTools />
                        <LeavesListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <CustomerListSelected />
        </>
    )
}

export default LeavesList

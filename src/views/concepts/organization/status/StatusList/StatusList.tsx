import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import CustomerListSelected from './components/StatusListSelected'
import StatusListActionTools from './components/StatusListActionTools'
import StatusListTableTools from './components/StatusListTableTools'
import StatusListTable from './components/StatusListTable'

const StatusList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Status</h3>
                            <StatusListActionTools />
                        </div>
                        <StatusListTableTools />
                        <StatusListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <CustomerListSelected />
        </>
    )
}

export default StatusList

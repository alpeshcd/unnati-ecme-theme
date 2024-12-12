import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import StatusListActionTools from './StatusList/components/StatusListActionTools'
import StatusListTableTools from './StatusList/components/StatusListTableTools'
import StatusListTable from './StatusList/components/StatusListTable'
import StatusListSelected from './StatusList/components/StatusListSelected'

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
            <StatusListSelected />
        </>
    )
}

export default StatusList

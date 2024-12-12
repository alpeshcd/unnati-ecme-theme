import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import WorkOrderListActionTools from './WorkOrder/components/WorkOrderListActionTools'
import WorkOrderListTableTools from './WorkOrder/components/WorkOrderListTableTools'
import WorkOrderListTable from './WorkOrder/components/WorkOrderListTable'
import WorkOrderListSelected from './WorkOrder/components/WorkOrderListSelected'


const WorkOrderList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>WorkOrder </h3>
                            <WorkOrderListActionTools />
                        </div>
                        <WorkOrderListTableTools />
                        <WorkOrderListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <WorkOrderListSelected />
        </>
    )
}

export default WorkOrderList

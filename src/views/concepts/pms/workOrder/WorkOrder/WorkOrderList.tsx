import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import CustomerListSelected from '@/views/concepts/customers/CustomerList/components/CustomerListSelected'
import WorkOrderListActionTools from './components/WorkOrderListActionTools'
import WorkOrderListTableTools from './components/WorkOrderListTableTools'
import WorkOrderListTable from './components/WorkOrderListTable'



const WorkOrderList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>WorkOrder</h3>
                            <WorkOrderListActionTools />
                        </div>
                        <WorkOrderListTableTools />
                        <WorkOrderListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <CustomerListSelected />
        </>
    )
}

export default WorkOrderList

import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import PurchaseOrderListActionTools from './components/PurchaseOrderListActionTools'
import PurchaseOrderListTableTools from './components/PurchaseOrderListTableTools'
import PurchaseOrderListTable from './components/PurchaseOrderListTable'
import PurchaseOrderListSelected from './components/PurchaseOrderListSelected'





const PurchaseOrderList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>PurchaseOrder</h3>
                            <PurchaseOrderListActionTools />
                        </div>
                        <PurchaseOrderListTableTools />
                        <PurchaseOrderListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <PurchaseOrderListSelected />
        </>
    )
}

export default PurchaseOrderList

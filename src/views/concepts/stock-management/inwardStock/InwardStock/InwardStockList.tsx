import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import CustomerListSelected from '@/views/concepts/customers/CustomerList/components/CustomerListSelected'
import InwardStockListActionTools from './components/InwardStockListActionTools'
import InwardStockListTableTools from './components/InwardStockListTableTools'
import InwardStockListTable from './components/InwardStockListTable'

const InwardStockList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>InwardStock</h3>
                            <InwardStockListActionTools />
                        </div>
                        <InwardStockListTableTools />
                        <InwardStockListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <CustomerListSelected />
        </>
    )
}

export default InwardStockList

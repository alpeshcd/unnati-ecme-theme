import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import CustomerListSelected from '@/views/concepts/customers/CustomerList/components/CustomerListSelected'
import CustomerListActionTools from './components/CustomerListActionTools'
import CustomerListTableTools from './components/CustomerListTableTools'
import CustomerListTable from './components/CustomerListTable'



const CustomerList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Customer</h3>
                            <CustomerListActionTools />
                        </div>
                        <CustomerListTableTools />
                        <CustomerListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <CustomerListSelected />
        </>
    )
}

export default CustomerList

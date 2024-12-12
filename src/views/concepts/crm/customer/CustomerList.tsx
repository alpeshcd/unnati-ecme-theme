import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import CustomerListActionTools from './Customer/components/CustomerListActionTools'
import CustomerListTableTools from './Customer/components/CustomerListTableTools'
import CustomerListTable from './Customer/components/CustomerListTable'
import CustomerListSelected from './Customer/components/CustomerListSelected'



const CustomerList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Customer </h3>
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

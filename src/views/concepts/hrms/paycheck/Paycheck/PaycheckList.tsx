import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import PaycheckListActionTools from './components/PaycheckListActionTools'
import PaycheckListTableTools from './components/PaycheckListTableTools'
import CustomerListSelected from '@/views/concepts/customers/CustomerList/components/CustomerListSelected'
import PaycheckListTable from './components/PaycheckListTable'



const PaycheckList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Paycheck</h3>
                            <PaycheckListActionTools />
                        </div>
                        <PaycheckListTableTools />
                        <PaycheckListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <CustomerListSelected />
        </>
    )
}

export default PaycheckList

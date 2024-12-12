import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import CustomerListSelected from '@/views/concepts/customers/CustomerList/components/CustomerListSelected'
import ConsultantListActionTools from './components/ConsultantListActionTools'
import ConsultantListTableTools from './components/ConsultantListTableTools'
import ConsultantListTable from './components/ConsultantListTable'



const ConsultantList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Consultant</h3>
                            <ConsultantListActionTools />
                        </div>
                        <ConsultantListTableTools />
                        <ConsultantListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <CustomerListSelected />
        </>
    )
}

export default ConsultantList

import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import CustomerListSelected from '@/views/concepts/customers/CustomerList/components/CustomerListSelected'
import TicketStatusListActionTools from './components/TicketStatusListActionTools'
import TicketStatusListTableTools from './components/TicketStatusListTableTools'
import TicketStatusListTable from './components/TicketStatusListTable'



const TicketStatusList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>TicketStatus</h3>
                            <TicketStatusListActionTools />
                        </div>
                        <TicketStatusListTableTools />
                        <TicketStatusListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <CustomerListSelected />
        </>
    )
}

export default TicketStatusList

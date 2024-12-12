import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import TicketStatusListActionTools from './TicketStatus/components/TicketStatusListActionTools'
import TicketStatusListTableTools from './TicketStatus/components/TicketStatusListTableTools'
import TicketStatusListTable from './TicketStatus/components/TicketStatusListTable'
import TicketStatusListSelected from './TicketStatus/components/TicketStatusListSelected'


const TicketStatusList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>TicketStatus </h3>
                            <TicketStatusListActionTools />
                        </div>
                        <TicketStatusListTableTools />
                        <TicketStatusListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <TicketStatusListSelected />
        </>
    )
}

export default TicketStatusList

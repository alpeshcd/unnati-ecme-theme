import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import CustomerListSelected from './components/AdvanceListSelected'
import AdvanceListTableTools from './components/AdvanceListTableTools'
import AdvanceListTable from './components/AdvanceListTable'
import AdvanceListActionTools from './components/AdvanceListActionTools'


const AdvanceList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Advance</h3>
                            <AdvanceListActionTools />
                        </div>
                        <AdvanceListTableTools />
                        <AdvanceListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <CustomerListSelected />
        </>
    )
}

export default AdvanceList

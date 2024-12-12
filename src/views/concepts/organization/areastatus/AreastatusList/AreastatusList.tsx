import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import CustomerListSelected from './components/AreastatusListSelected'
import AreastatusListTableTools from './components/AreastatusListTableTools'
import AreastatusListTable from './components/AreastatusListTable'
import AreastatusListActionTools from './components/AreastatusListActionTools'


const AreastatusList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Area Status</h3>
                            <AreastatusListActionTools />
                        </div>
                        <AreastatusListTableTools />
                        <AreastatusListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <CustomerListSelected />
        </>
    )
}

export default AreastatusList

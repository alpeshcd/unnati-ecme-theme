import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import AreastatusListSelected from './AreastatusList/components/AreastatusListSelected'
import AreastatusListActionTools from './AreastatusList/components/AreastatusListActionTools'
import AreastatusListTableTools from './AreastatusList/components/AreastatusListTableTools'
import AreastatusListTable from './AreastatusList/components/AreastatusListTable'

const AreastatusList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Area Status </h3>
                            <AreastatusListActionTools />
                        </div>
                        <AreastatusListTableTools />
                        <AreastatusListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <AreastatusListSelected />
        </>
    )
}

export default AreastatusList

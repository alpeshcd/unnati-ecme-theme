import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import AreaListActionTools from './AreaList/components/AreaListActionTools'
import AreaListTableTools from './AreaList/components/AreaListTableTools'
import AreaListTable from './AreaList/components/AreaListTable'
import AreaListSelected from './AreaList/components/AreaListSelected'

const AreaList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Area </h3>
                            <AreaListActionTools />
                        </div>
                        <AreaListTableTools />
                        <AreaListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <AreaListSelected />
        </>
    )
}

export default AreaList

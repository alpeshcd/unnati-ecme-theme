import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import CustomerListSelected from './components/AreaListSelected'
import AreaListActionTools from './components/AreaListActionTools'
import AreaListTableTools from './components/AreaListTableTools'
import AreaListTable from './components/AreaListTable'


const AreaList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Area</h3>
                            <AreaListActionTools />
                        </div>
                        <AreaListTableTools />
                        <AreaListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <CustomerListSelected />
        </>
    )
}

export default AreaList

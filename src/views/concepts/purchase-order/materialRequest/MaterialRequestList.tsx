import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import MaterialRequestListActionTools from './MaterialRequest/components/MaterialRequestListActionTools'
import MaterialRequestListTableTools from './MaterialRequest/components/MaterialRequestListTableTools'
import MaterialRequestListTable from './MaterialRequest/components/MaterialRequestListTable'
import MaterialRequestListSelected from './MaterialRequest/components/MaterialRequestListSelected'





const MaterialRequestList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>MaterialRequest </h3>
                            <MaterialRequestListActionTools />
                        </div>
                        <MaterialRequestListTableTools />
                        <MaterialRequestListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <MaterialRequestListSelected />
        </>
    )
}

export default MaterialRequestList

import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import UomListActionTools from './Uom/components/UomListActionTools'
import UomListTableTools from './Uom/components/UomListTableTools'
import UomListTable from './Uom/components/UomListTable'
import UomListSelected from './Uom/components/UomListSelected'


const UomList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Uom </h3>
                            <UomListActionTools />
                        </div>
                        <UomListTableTools />
                        <UomListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <UomListSelected />
        </>
    )
}

export default UomList

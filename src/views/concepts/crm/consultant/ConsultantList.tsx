import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import ConsultantListActionTools from './Consultant/components/ConsultantListActionTools'
import ConsultantListTableTools from './Consultant/components/ConsultantListTableTools'
import ConsultantListTable from './Consultant/components/ConsultantListTable'
import ConsultantListSelected from './Consultant/components/ConsultantListSelected'



const ConsultantList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Consultant </h3>
                            <ConsultantListActionTools />
                        </div>
                        <ConsultantListTableTools />
                        <ConsultantListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <ConsultantListSelected />
        </>
    )
}

export default ConsultantList

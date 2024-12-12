import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import CustomerListSelected from './components/WorkweekListSelected'
import WorkweekListActionTools from './components/WorkweekListActionTools'
import WorkweekListTableTools from './components/WorkweekListTableTools'
import WorkweekListTable from './components/WorkweekListTable'


const WorkweekList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Area</h3>
                            <WorkweekListActionTools />
                        </div>
                        <WorkweekListTableTools />
                        <WorkweekListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <CustomerListSelected />
        </>
    )
}

export default WorkweekList

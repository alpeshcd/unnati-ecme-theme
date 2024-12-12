import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import WorkweekListActionTools from './WorkweekList/components/WorkweekListActionTools'
import WorkweekListTableTools from './WorkweekList/components/WorkweekListTableTools'
import WorkweekListTable from './WorkweekList/components/WorkweekListTable'
import WorkweekListSelected from './WorkweekList/components/WorkweekListSelected'

const WorkweekList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Work week  </h3>
                            <WorkweekListActionTools />
                        </div>
                        <WorkweekListTableTools />
                        <WorkweekListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <WorkweekListSelected />
        </>
    )
}

export default WorkweekList

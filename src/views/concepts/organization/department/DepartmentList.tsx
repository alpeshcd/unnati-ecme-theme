import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import DepartmentListActionTools from './DepartmentList/components/DepartmentListActionTools'
import DepartmentListTableTools from './DepartmentList/components/DepartmentListTableTools'
import DepartmentListTable from './DepartmentList/components/DepartmentListTable'
import DepartmentListSelected from './DepartmentList/components/DepartmentListSelected'


const DepartmentList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Department</h3>
                            <DepartmentListActionTools />
                        </div>
                        <DepartmentListTableTools />
                        <DepartmentListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <DepartmentListSelected />
        </>
    )
}

export default DepartmentList

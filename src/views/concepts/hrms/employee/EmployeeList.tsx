import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import EmployeeListActionTools from './EmployeeList/components/EmployeeListActionTools'
import EmployeeListTableTools from './EmployeeList/components/EmployeeListTableTools'
import EmployeeListTable from './EmployeeList/components/EmployeeListTable'
import EmployeeListSelected from './EmployeeList/components/EmployeeListSelected'


const EmployeeList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Employee </h3>
                            <EmployeeListActionTools />
                        </div>
                        <EmployeeListTableTools />
                        <EmployeeListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <EmployeeListSelected />
        </>
    )
}

export default EmployeeList

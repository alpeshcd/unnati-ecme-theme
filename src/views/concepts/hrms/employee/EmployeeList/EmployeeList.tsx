import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import CustomerListSelected from './components/EmployeeListSelected'
import EmployeeListActionTools from './components/EmployeeListActionTools'
import EmployeeListTableTools from './components/EmployeeListTableTools'
import EmployeeListTable from './components/EmployeeListTable'



const EmployeeList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Employee</h3>
                            <EmployeeListActionTools />
                        </div>
                        <EmployeeListTableTools />
                        <EmployeeListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <CustomerListSelected />
        </>
    )
}

export default EmployeeList

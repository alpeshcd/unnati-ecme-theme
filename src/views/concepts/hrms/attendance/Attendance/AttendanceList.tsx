import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import CustomerListSelected from './components/AttendanceListSelected'
import AttendanceListTableTools from './components/AttendanceListTableTools'
import AttendanceListTable from './components/AttendanceListTable'
import AttendanceListActionTools from './components/AttendanceListActionTools'


const AttendanceList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Attendance</h3>
                            <AttendanceListActionTools />
                        </div>
                        <AttendanceListTableTools />
                        <AttendanceListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <CustomerListSelected />
        </>
    )
}

export default AttendanceList

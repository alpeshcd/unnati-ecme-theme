import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import AttendanceListActionTools from './Attendance/components/AttendanceListActionTools'
import AttendanceListTableTools from './Attendance/components/AttendanceListTableTools'
import AttendanceListTable from './Attendance/components/AttendanceListTable'
import AttendanceListSelected from './Attendance/components/AttendanceListSelected'




const AttendanceList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Attendance </h3>
                            <AttendanceListActionTools />
                        </div>
                        <AttendanceListTableTools />
                        <AttendanceListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <AttendanceListSelected />
        </>
    )
}

export default AttendanceList

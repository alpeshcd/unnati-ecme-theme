import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import AttendanceVerificationListActionTools from './AttendanceVerification/components/AttendanceVerificationListActionTools'
import AttendanceVerificationListTableTools from './AttendanceVerification/components/AttendanceVerificationListTableTools'
import AttendanceVerificationListTable from './AttendanceVerification/components/AttendanceVerificationListTable'
import AttendanceVerificationListSelected from './AttendanceVerification/components/AttendanceVerificationListSelected'



const AttendanceVerificationList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Attendance Verification </h3>
                            <AttendanceVerificationListActionTools />
                        </div>
                        <AttendanceVerificationListTableTools />
                        <AttendanceVerificationListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <AttendanceVerificationListSelected />
        </>
    )
}

export default AttendanceVerificationList

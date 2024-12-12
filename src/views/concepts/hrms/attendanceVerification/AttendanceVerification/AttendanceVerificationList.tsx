import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import CustomerListSelected from './components/AttendanceVerificationListSelected'
import AttendanceVerificationListTableTools from './components/AttendanceVerificationListTableTools'
import AttendanceVerificationListTable from './components/AttendanceVerificationListTable'
import AttendanceVerificationListActionTools from './components/AttendanceVerificationListActionTools'


const AttendanceVerificationList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>AttendanceVerification</h3>
                            <AttendanceVerificationListActionTools />
                        </div>
                        <AttendanceVerificationListTableTools />
                        <AttendanceVerificationListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <CustomerListSelected />
        </>
    )
}

export default AttendanceVerificationList

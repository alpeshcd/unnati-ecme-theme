import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import PayrollRecordListActionTools from './PayrollRecordList/components/PayrollRecordListActionTools'
import PayrollRecordListTableTools from './PayrollRecordList/components/PayrollRecordListTableTools'
import PayrollRecordListTable from './PayrollRecordList/components/PayrollRecordListTable'
import PayrollRecordListSelected from './PayrollRecordList/components/PayrollRecordListSelected'



const PayrollRecordList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Payroll Record </h3>
                            <PayrollRecordListActionTools />
                        </div>
                        <PayrollRecordListTableTools />
                        <PayrollRecordListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <PayrollRecordListSelected />
        </>
    )
}

export default PayrollRecordList

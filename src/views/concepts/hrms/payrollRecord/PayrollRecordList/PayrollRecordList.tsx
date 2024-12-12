import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import CustomerListSelected from './components/PayrollRecordListSelected'
import PayrollListTableTools from './components/PayrollRecordListTableTools'
import PayrollListTable from './components/PayrollRecordListTable'
import PayrollListActionTools from './components/PayrollRecordListActionTools'


const PayrollRecordList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Payroll Record</h3>
                            <PayrollListActionTools />
                        </div>
                        <PayrollListTableTools />
                        <PayrollListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <CustomerListSelected />
        </>
    )
}

export default PayrollRecordList

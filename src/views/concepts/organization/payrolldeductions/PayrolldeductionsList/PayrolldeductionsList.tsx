import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import CustomerListSelected from './components/PayrolldeductionsListSelected'
import PayrolldeductionsListActionTools from './components/PayrolldeductionsListActionTools'
import PayrolldeductionsListTableTools from './components/PayrolldeductionsListTableTools'
import PayrolldeductionsListTable from './components/PayrolldeductionsListTable'

const PayrolldeductionsList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Payroll Deductions</h3>
                            <PayrolldeductionsListActionTools/>
                        </div>
                        <PayrolldeductionsListTableTools />
                        <PayrolldeductionsListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <CustomerListSelected />
        </>
    )
}

export default PayrolldeductionsList

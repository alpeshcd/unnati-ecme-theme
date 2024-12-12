import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import PayrolldeductionsListActionTools from './PayrolldeductionsList/components/PayrolldeductionsListActionTools'
import PayrolldeductionsListTableTools from './PayrolldeductionsList/components/PayrolldeductionsListTableTools'
import PayrolldeductionsListTable from './PayrolldeductionsList/components/PayrolldeductionsListTable'
import PayrolldeductionsListSelected from './PayrolldeductionsList/components/PayrolldeductionsListSelected'

const PayrolldeductionsList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Payroll Deductions</h3>
                            <PayrolldeductionsListActionTools />
                        </div>
                        <PayrolldeductionsListTableTools />
                        <PayrolldeductionsListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <PayrolldeductionsListSelected />
        </>
    )
}

export default PayrolldeductionsList

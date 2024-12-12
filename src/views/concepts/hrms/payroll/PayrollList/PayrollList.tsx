import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import CustomerListSelected from './components/PayrollListSelected'
import PayrollListTableTools from './components/PayrollListTableTools'
import PayrollListTable from './components/PayrollListTable'
import PayrollListActionTools from './components/PayrollListActionTools'


const PayrollList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Payroll</h3>
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

export default PayrollList

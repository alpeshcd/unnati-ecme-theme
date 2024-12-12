import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import PayrollListActionTools from './PayrollList/components/PayrollListActionTools'
import PayrollListTableTools from './PayrollList/components/PayrollListTableTools'
import PayrollListTable from './PayrollList/components/PayrollListTable'
import PayrollListSelected from './PayrollList/components/PayrollListSelected'


const PayrollList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Payroll </h3>
                            <PayrollListActionTools />
                        </div>
                        <PayrollListTableTools />
                        <PayrollListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <PayrollListSelected />
        </>
    )
}

export default PayrollList

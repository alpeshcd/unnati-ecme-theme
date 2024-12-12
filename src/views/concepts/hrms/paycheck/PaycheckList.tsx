import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import PaycheckListActionTools from './Paycheck/components/PaycheckListActionTools'
import PaycheckListTableTools from './Paycheck/components/PaycheckListTableTools'
import PaycheckListTable from './Paycheck/components/PaycheckListTable'
import PaycheckListSelected from './Paycheck/components/PaycheckListSelected'




const PaycheckList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Paycheck </h3>
                            <PaycheckListActionTools />
                        </div>
                        <PaycheckListTableTools />
                        <PaycheckListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <PaycheckListSelected />
        </>
    )
}

export default PaycheckList

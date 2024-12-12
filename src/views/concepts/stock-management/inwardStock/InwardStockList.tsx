import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import InwardStockListActionTools from './InwardStock/components/InwardStockListActionTools'
import InwardStockListTableTools from './InwardStock/components/InwardStockListTableTools'
import InwardStockListTable from './InwardStock/components/InwardStockListTable'
import InwardStockListSelected from './InwardStock/components/InwardStockListSelected'



const InwardStockList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>InwardStock </h3>
                            <InwardStockListActionTools />
                        </div>
                        <InwardStockListTableTools />
                        <InwardStockListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <InwardStockListSelected />
        </>
    )
}

export default InwardStockList

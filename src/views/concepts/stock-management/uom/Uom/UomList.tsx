import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import CustomerListSelected from '@/views/concepts/customers/CustomerList/components/CustomerListSelected'
import UomListActionTools from './components/UomListActionTools'
import UomListTableTools from './components/UomListTableTools'
import UomListTable from './components/UomListTable'



const UomList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Uom</h3>
                            <UomListActionTools />
                        </div>
                        <UomListTableTools />
                        <UomListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <CustomerListSelected />
        </>
    )
}

export default UomList

import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import CustomerListSelected from '@/views/concepts/customers/CustomerList/components/CustomerListSelected'
import VendorListActionTools from './components/VendorListActionTools'
import VendorListTable from './components/VendorListTable'
import VendorListTableTools from './components/VendorListTableTools'


const VendorList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Vendor</h3>
                            <VendorListActionTools />
                        </div>
                        <VendorListTableTools />
                        <VendorListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <CustomerListSelected />
        </>
    )
}

export default VendorList

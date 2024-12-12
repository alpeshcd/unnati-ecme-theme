import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import VendorListActionTools from './Vendor/components/VendorListActionTools'
import VendorListTableTools from './Vendor/components/VendorListTableTools'
import VendorListTable from './Vendor/components/VendorListTable'
import VendorListSelected from './Vendor/components/VendorListSelected'

const VendorList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Vendor </h3>
                            <VendorListActionTools />
                        </div>
                        <VendorListTableTools />
                        <VendorListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <VendorListSelected />
        </>
    )
}

export default VendorList

import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import CustomerListSelected from './components/RolesListSelected'
import RolesListActionTools from './components/RolesListActionTools'
import RolesListTableTools from './components/RolesListTableTools'
import RolesListTable from './components/RolesListTable'

const RolesList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Roles</h3>
                            <RolesListActionTools />
                        </div>
                        <RolesListTableTools />
                        <RolesListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <CustomerListSelected />
        </>
    )
}

export default RolesList

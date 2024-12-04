import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import RolesListActionTools from './RolesList/components/RolesListActionTools'
import RolesListTableTools from './RolesList/components/RolesListTableTools'
import RolesListTable from './RolesList/components/RolesListTable'
import RolesListSelected from './RolesList/components/RolesListSelected'

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
            <RolesListSelected />
        </>
    )
}

export default RolesList

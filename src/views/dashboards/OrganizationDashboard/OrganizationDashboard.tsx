import Loading from '@/components/shared/Loading'

import { apiGetProjectDashboard } from '@/services/DashboardService'
import useSWR from 'swr'
import Schedule from '../ProjectDashboard/components/Schedule'
import { GetOrganizationDashboardResponse } from './types'
import UpcomingSchedule from '../ProjectDashboard/components/UpcomingSchedule'
import CurrentTasks from '../ProjectDashboard/components/CurrentTasks'
import RecentActivity from '../ProjectDashboard/components/RecentActivity'
import TaskOverview from '../ProjectDashboard/components/TaskOverview'
import OrganizationOverview from './components/OrganizationOverview'

const OrganizationDashboard = () => {
    const { data, isLoading } = useSWR(
        ['/api/dashboard/Organization'],
        () => apiGetProjectDashboard<GetOrganizationDashboardResponse>(),
        {
            revalidateOnFocus: false,
            revalidateIfStale: false,
            revalidateOnReconnect: false,
        },
    )

    return (
        <Loading loading={isLoading}>
            {data && (
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col xl:flex-row gap-4">
                        <div className="flex flex-col gap-4 flex-1 xl:max-w-[calc(100%-350px)]">
                            <OrganizationOverview data={data.OrganizationOverview} />
                            <Schedule data={data.schedule} />
                        </div>
                        <div>
                            <UpcomingSchedule />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                        <div className="md:col-span-1 xl:col-span-1 order-1">
                            <CurrentTasks data={data.currentTasks} />
                        </div>
                        <div className="md:col-span-1 xl:col-span-1 order-2 xl:order-3">
                            <RecentActivity data={data.recentActivity} />
                        </div>
                        <div className="md:col-span-2 xl:col-span-1 order-3 xl:order-2">
                            <TaskOverview data={data.taskOverview} />
                        </div>
                    </div>
                </div>
            )}
        </Loading>
    )
}

export default OrganizationDashboard

import { lazy } from 'react'
import { DASHBOARDS_PREFIX_PATH } from '@/constants/route.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { Routes } from '@/@types/routes'

const dashboardsRoute: Routes = [
    // {
    //     key: 'dashboard.ecommerce',
    //     path: `${DASHBOARDS_PREFIX_PATH}/ecommerce`,
    //     component: lazy(() => import('@/views/dashboards/EcommerceDashboard')),
    //     authority: [ADMIN, USER],
    //     meta: {
    //         pageContainerType: 'contained',
    //     },
    // },
 
    {
        key: 'dashboard.project',
        path: `${DASHBOARDS_PREFIX_PATH}/project`,
        component: lazy(() => import('@/views/dashboards/ProjectDashboard')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

    {
        key: 'dashboard.Organization',
        path: `${DASHBOARDS_PREFIX_PATH}/organization`,
        component: lazy(() => import('@/views/dashboards/OrganizationDashboard')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

    {
        key: 'dashboard.HRMS',
        path: `${DASHBOARDS_PREFIX_PATH}/hrms`,
        component: lazy(() => import('@/views/dashboards/HrmsDashboard')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'dashboard.stockManagement',
        path: `${DASHBOARDS_PREFIX_PATH}/stock-management`,
        component: lazy(() => import('@/views/dashboards/StockManagementDashboard')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'dashboard.CRM',
        path: `${DASHBOARDS_PREFIX_PATH}/crm`,
        component: lazy(() => import('@/views/dashboards/CrmDashboard')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'dashboard.PurchaseOrder',
        path: `${DASHBOARDS_PREFIX_PATH}/purchase-order`,
        component: lazy(() => import('@/views/dashboards/PurchaseOrderDashboard')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'dashboard.PMS',
        path: `${DASHBOARDS_PREFIX_PATH}/pms`,
        component: lazy(() => import('@/views/dashboards/PmsDashboard')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
    // {
    //     key: 'dashboard.Organization',
    //     path: `${DASHBOARDS_PREFIX_PATH}/Organizations`,
    //     component: lazy(() => import('@/views/dashboards/OrganizationDashboard')),
    //     authority: [ADMIN, USER],
    //     meta: {
    //         pageContainerType: 'contained',
    //     },
    // },
    // {
    //     key: 'dashboard.marketing',
    //     path: `${DASHBOARDS_PREFIX_PATH}/marketing`,
    //     component: lazy(() => import('@/views/dashboards/MarketingDashboard')),
    //     authority: [ADMIN, USER],
    //     meta: {
    //         pageContainerType: 'contained',
    //     },
    // },
    // {
    //     key: 'dashboard.analytic',
    //     path: `${DASHBOARDS_PREFIX_PATH}/analytic`,
    //     component: lazy(() => import('@/views/dashboards/AnalyticDashboard')),
    //     authority: [ADMIN, USER],
    //     meta: {
    //         pageContainerType: 'contained',
    //         pageBackgroundType: 'plain',
    //     },
    // },
]

export default dashboardsRoute

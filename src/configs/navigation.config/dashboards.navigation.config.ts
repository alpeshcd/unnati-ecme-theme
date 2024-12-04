import { DASHBOARDS_PREFIX_PATH } from '@/constants/route.constant'
import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_ITEM,
} from '@/constants/navigation.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { NavigationTree } from '@/@types/navigation'

const dashboardsNavigationConfig: NavigationTree[] = [
    {
        key: 'dashboard',
        path: '',
        title: 'Dashboard',
        translateKey: 'nav.dashboard.dashboard',
        icon: 'dashboard',
        type: NAV_ITEM_TYPE_TITLE,
        authority: [ADMIN, USER],
        meta: {
            horizontalMenu: {
                layout: 'default',
            },
        },
        subMenu: [
            // {
            //     key: 'dashboard.ecommerce',
            //     path: `${DASHBOARDS_PREFIX_PATH}/ecommerce`,
            //     title: 'Ecommerce',
            //     translateKey: 'nav.dashboard.ecommerce',
            //     icon: 'dashboardEcommerce',
            //     type: NAV_ITEM_TYPE_ITEM,
            //     authority: [ADMIN, USER],
            //     subMenu: [],
            // },
            {
                key: 'dashboard.project',
                path: `${DASHBOARDS_PREFIX_PATH}/project`,
                title: 'Project',
                translateKey: 'nav.dashboard.project',
                icon: 'dashboardProject',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                subMenu: [],
            },
            {
                key: 'dashboard.Organization',
                path: `${DASHBOARDS_PREFIX_PATH}/organization`,
                title: 'Organization ',
                translateKey: 'nav.dashboard.Organization',
                icon: 'customers',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                subMenu: [],
            },
            {
                key: 'dashboard.HRMS',
                path: `${DASHBOARDS_PREFIX_PATH}/hrms`,
                title: 'HRMS',
                translateKey: 'nav.dashboard.HRMS',
                icon: 'dashboardHRMS',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                subMenu: [],
            },
            
            {
                key: 'dashboard.StockManagement',
                path: `${DASHBOARDS_PREFIX_PATH}/stock-management`,
                title: 'Stock Management',
                translateKey: 'nav.dashboard.StockManagement',
                icon: 'products',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                subMenu: [],
            },
            {
                key: 'dashboard.CRM',
                path: `${DASHBOARDS_PREFIX_PATH}/crm`,
                title: 'CRM',
                translateKey: 'nav.dashboard.CRM',
                icon: 'customers',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                subMenu: [],
            },
            {
                key: 'dashboard.PurchaseOrder',
                path: `${DASHBOARDS_PREFIX_PATH}/purchase-Order`,
                title: 'Purchase Order',
                translateKey: 'nav.dashboard.PurchaseOrder',
                icon: 'orders',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                subMenu: [],
            },
            {
                key: 'dashboard.PMS',
                path: `${DASHBOARDS_PREFIX_PATH}/pms`,
                title: 'PMS',
                translateKey: 'nav.dashboard.PMS',
                icon: 'projects',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                subMenu: [],
            },
            // {
            //     key: 'dashboard.marketing',
            //     path: `${DASHBOARDS_PREFIX_PATH}/marketing`,
            //     title: 'Marketing',
            //     translateKey: 'nav.dashboard.marketing',
            //     icon: 'dashboardMarketing',
            //     type: NAV_ITEM_TYPE_ITEM,
            //     authority: [ADMIN, USER],
            //     subMenu: [],
            // },
            // {
            //     key: 'dashboard.analytic',
            //     path: `${DASHBOARDS_PREFIX_PATH}/analytic`,
            //     title: 'Analytic',
            //     translateKey: 'nav.dashboard.analytic',
            //     icon: 'dashboardAnalytic',
            //     type: NAV_ITEM_TYPE_ITEM,
            //     authority: [ADMIN, USER],
            //     subMenu: [],
            // },
        ],
    },
]

export default dashboardsNavigationConfig

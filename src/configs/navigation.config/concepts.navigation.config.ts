import { CONCEPTS_PREFIX_PATH } from '@/constants/route.constant'
import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_COLLAPSE,
    NAV_ITEM_TYPE_ITEM,
} from '@/constants/navigation.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { NavigationTree } from '@/@types/navigation'

const conceptsNavigationConfig: NavigationTree[] = [
    {
        key: 'concepts',
        path: '',
        title: 'Concepts',
        translateKey: 'nav.concepts',
        icon: 'concepts',
        type: NAV_ITEM_TYPE_TITLE,
        authority: [ADMIN, USER],
        meta: {
            horizontalMenu: {
                layout: 'columns',
                columns: 4,
            },
        },
        subMenu: [
            // {
            //     key: 'concepts.Organization',
            //     path: '',
            //     title: 'AI',
            //     translateKey: 'nav.conceptsAi.ai',
            //     icon: 'ai',
            //     type: NAV_ITEM_TYPE_COLLAPSE,
            //     authority: [ADMIN, USER],
            //     meta: {
            //         description: {
            //             translateKey: 'nav.conceptsAi.aiDesc',
            //             label: 'AI tools and resources',
            //         },
            //     },
            //     subMenu: [
            //         {
            //             key: 'concepts.ai.chat',
            //             path: `${CONCEPTS_PREFIX_PATH}/ai/chat`,
            //             title: 'Chat',
            //             translateKey: 'nav.conceptsAi.chat',
            //             icon: 'aiChat',
            //             type: NAV_ITEM_TYPE_ITEM,
            //             authority: [ADMIN, USER],
            //             meta: {
            //                 description: {
            //                     translateKey: 'nav.conceptsAi.chatDesc',
            //                     label: 'AI-powered chat systems',
            //                 },
            //             },
            //             subMenu: [],
            //         },
            //         {
            //             key: 'concepts.ai.image',
            //             path: `${CONCEPTS_PREFIX_PATH}/ai/image`,
            //             title: 'Image',
            //             translateKey: 'nav.conceptsAi.image',
            //             icon: 'aiImage',
            //             type: NAV_ITEM_TYPE_ITEM,
            //             authority: [ADMIN, USER],
            //             meta: {
            //                 description: {
            //                     translateKey: 'nav.conceptsAi.imageDesc',
            //                     label: 'AI image processing',
            //                 },
            //             },
            //             subMenu: [],
            //         },
            //     ],
            // },

            {
                key: 'concepts.Organization',
                path: '',
                title: 'Organization',
                translateKey: 'nav.conceptsAi.Organization',
                icon: 'customers',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.conceptsAi.aiDesc',
                        label: 'AI tools and resources',
                    },
                },
                subMenu: [
                    {
                        key: 'concepts.Organization.Roles',
                        path: `${CONCEPTS_PREFIX_PATH}/organization/roles`,
                        title: 'Roles',
                        translateKey: 'nav.conceptsAi.Roles',
                        icon: 'aiChat',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsAi.chatDesc',
                                label: 'AI-powered chat systems',
                            },
                        },
                        subMenu: [],
                    },
                 
                    
                    {
                        key: 'concepts.Organization.Department',
                        path: `${CONCEPTS_PREFIX_PATH}/Organization/Department`,
                        title: 'Department',
                        translateKey: 'nav.conceptsAi.Department',
                        icon: 'aiImage',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsAi.imageDesc',
                                label: 'AI image processing',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.Organization.Holidays',
                        path: `${CONCEPTS_PREFIX_PATH}/Organization/Holidays`,
                        title: 'Holidays',
                        translateKey: 'nav.conceptsAi.Holidays',
                        icon: 'aiImage',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsAi.imageDesc',
                                label: 'AI image processing',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.Organization.Document Types',
                        path: `${CONCEPTS_PREFIX_PATH}/Organization/Document Types`,
                        title: 'Document Types',
                        translateKey: 'nav.conceptsAi.Document Types',
                        icon: 'aiImage',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsAi.imageDesc',
                                label: 'AI image processing',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.Organization.Leave Type',
                        path: `${CONCEPTS_PREFIX_PATH}/Organization/Leave Type`,
                        title: 'Leave Type',
                        translateKey: 'nav.conceptsAi.Leave Type',
                        icon: 'aiImage',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsAi.imageDesc',
                                label: 'AI image processing',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.Organization.Work Week',
                        path: `${CONCEPTS_PREFIX_PATH}/Organization/Work Week`,
                        title: 'Work Week',
                        translateKey: 'nav.conceptsAi.Work Week',
                        icon: 'aiImage',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsAi.imageDesc',
                                label: 'AI image processing',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.Organization.Payroll Deductions',
                        path: `${CONCEPTS_PREFIX_PATH}/Organization/Payroll Deductions`,
                        title: 'Payroll Deductions',
                        translateKey: 'nav.conceptsAi.Payroll Deductions',
                        icon: 'aiImage',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsAi.imageDesc',
                                label: 'AI image processing',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.Organization.Status',
                        path: `${CONCEPTS_PREFIX_PATH}/Organization/Status`,
                        title: 'Status',
                        translateKey: 'nav.conceptsAi.Status',
                        icon: 'aiImage',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsAi.imageDesc',
                                label: 'AI image processing',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.Organization.Stage',
                        path: `${CONCEPTS_PREFIX_PATH}/Organization/Stage`,
                        title: 'Stage',
                        translateKey: 'nav.conceptsAi.Stage',
                        icon: 'aiImage',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsAi.imageDesc',
                                label: 'AI image processing',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.Organization.Area',
                        path: `${CONCEPTS_PREFIX_PATH}/Organization/Area`,
                        title: 'Area',
                        translateKey: 'nav.conceptsAi.Area',
                        icon: 'aiImage',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsAi.imageDesc',
                                label: 'AI image processing',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.Organization.Area Status',
                        path: `${CONCEPTS_PREFIX_PATH}/Organization/Area Status`,
                        title: 'Area Status',
                        translateKey: 'nav.conceptsAi.Area Status',
                        icon: 'aiImage',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsAi.imageDesc',
                                label: 'AI image processing',
                            },
                        },
                        subMenu: [],
                    },
                ],
            },
           
           
        // roles concept   
           
   

            {
                key: 'concepts.HRMS',
                path: '',
                title: 'HRMS',
                translateKey: 'nav.conceptsAi.HRMS',
                icon: 'dashboardHRMS',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.conceptsAi.aiDesc',
                        label: 'AI tools and resources',
                    },
                },
                subMenu: [
                    {
                        key: 'concepts.HRMS.Employee',
                        path: `${CONCEPTS_PREFIX_PATH}/HRMS/Employee`,
                        title: 'Employee',
                        translateKey: 'nav.conceptsAi.Employee',
                        icon: 'aiImage',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsAi.imageDesc',
                                label: 'AI image processing',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.HRMS.Attendance',
                        path: `${CONCEPTS_PREFIX_PATH}/HRMS/Attendance`,
                        title: 'Attendance',
                        translateKey: 'nav.conceptsAi.Attendance',
                        icon: 'aiImage',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsAi.imageDesc',
                                label: 'AI image processing',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.HRMS.Payroll',
                        path: `${CONCEPTS_PREFIX_PATH}/HRMS/Payroll`,
                        title: 'Payroll',
                        translateKey: 'nav.conceptsAi.Payroll',
                        icon: 'aiImage',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsAi.imageDesc',
                                label: 'AI image processing',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.HRMS.Advance Pay Check',
                        path: `${CONCEPTS_PREFIX_PATH}/HRMS/Advance Pay Check`,
                        title: 'Advance Pay Check',
                        translateKey: 'nav.conceptsAi.Advance Pay Check',
                        icon: 'aiImage',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsAi.imageDesc',
                                label: 'AI image processing',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.HRMS.Payroll Records',
                        path: `${CONCEPTS_PREFIX_PATH}/HRMS/Payroll Records`,
                        title: 'Payroll Records',
                        translateKey: 'nav.conceptsAi.Payroll Records',
                        icon: 'aiImage',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsAi.imageDesc',
                                label: 'AI image processing',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.HRMS.Paycheck Transactions',
                        path: `${CONCEPTS_PREFIX_PATH}/HRMS/Paycheck Transactions`,
                        title: 'Paycheck Transactions',
                        translateKey: 'nav.conceptsAi.Paycheck Transactions',
                        icon: 'aiImage',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsAi.imageDesc',
                                label: 'AI image processing',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.HRMS.Leaves',
                        path: `${CONCEPTS_PREFIX_PATH}/HRMS/Leaves`,
                        title: 'Leaves',
                        translateKey: 'nav.conceptsAi.Leaves',
                        icon: 'aiImage',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsAi.imageDesc',
                                label: 'AI image processing',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.HRMS.Attendance Verification',
                        path: `${CONCEPTS_PREFIX_PATH}/HRMS/Attendance Verification`,
                        title: 'Attendance Verification',
                        translateKey: 'nav.conceptsAi.Attendance Verification',
                        icon: 'aiImage',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsAi.imageDesc',
                                label: 'AI image processing',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.HRMS.Track Documents',
                        path: `${CONCEPTS_PREFIX_PATH}/HRMS/Track Documents`,
                        title: 'Track Documents',
                        translateKey: 'nav.conceptsAi.Track Documents',
                        icon: 'aiImage',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsAi.imageDesc',
                                label: 'AI image processing',
                            },
                        },
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'concepts.Stock Management',
                path: '',
                title: 'Stock Management',
                translateKey: 'nav.conceptsAi.Stock Management',
                icon: 'products',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.conceptsAi.aiDesc',
                        label: 'AI tools and resources',
                    },
                },
                subMenu: [
                    {
                        key: 'concepts.Stock Management.Item Types',
                        path: `${CONCEPTS_PREFIX_PATH}/Stock Management/Item Types`,
                        title: 'Item Types',
                        translateKey: 'nav.conceptsAi.Item Types',
                        icon: 'aiImage',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsAi.imageDesc',
                                label: 'AI image processing',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.Stock Management.Items',
                        path: `${CONCEPTS_PREFIX_PATH}/Stock Management/Items`,
                        title: 'Items',
                        translateKey: 'nav.conceptsAi.Items',
                        icon: 'aiImage',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsAi.imageDesc',
                                label: 'AI image processing',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.Stock Management.Stock',
                        path: `${CONCEPTS_PREFIX_PATH}/Stock Management/Stock`,
                        title: 'Stock',
                        translateKey: 'nav.conceptsAi.Stock',
                        icon: 'aiImage',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsAi.imageDesc',
                                label: 'AI image processing',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.Stock Management.Stock History',
                        path: `${CONCEPTS_PREFIX_PATH}/Stock Management/Stock History`,
                        title: 'Stock History',
                        translateKey: 'nav.conceptsAi.Stock History',
                        icon: 'aiImage',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsAi.imageDesc',
                                label: 'AI image processing',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.Stock Management.Vendor',
                        path: `${CONCEPTS_PREFIX_PATH}/Stock Management/Vendor`,
                        title: 'Vendor',
                        translateKey: 'nav.conceptsAi.Vendor',
                        icon: 'aiImage',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsAi.imageDesc',
                                label: 'AI image processing',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.Stock Management.UOM',
                        path: `${CONCEPTS_PREFIX_PATH}/Stock Management/UOM`,
                        title: 'UOM',
                        translateKey: 'nav.conceptsAi.UOM',
                        icon: 'aiImage',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsAi.imageDesc',
                                label: 'AI image processing',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.Stock Management.Brand',
                        path: `${CONCEPTS_PREFIX_PATH}/Stock Management/Brand`,
                        title: 'Brand',
                        translateKey: 'nav.conceptsAi.Brand',
                        icon: 'aiImage',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsAi.imageDesc',
                                label: 'AI image processing',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.Stock Management.Inward Stock',
                        path: `${CONCEPTS_PREFIX_PATH}/Stock Management/Inward Stock`,
                        title: 'Inward Stock',
                        translateKey: 'nav.conceptsAi.Inward Stock',
                        icon: 'aiImage',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsAi.imageDesc',
                                label: 'AI image processing',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.Stock Management.Item Pricing',
                        path: `${CONCEPTS_PREFIX_PATH}/Stock Management/Item Pricing`,
                        title: 'Item Pricing',
                        translateKey: 'nav.conceptsAi.Item Pricing',
                        icon: 'aiImage',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsAi.imageDesc',
                                label: 'AI image processing',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.Stock Management.Item Price History',
                        path: `${CONCEPTS_PREFIX_PATH}/Stock Management/Item Price History`,
                        title: 'Item Price History',
                        translateKey: 'nav.conceptsAi.Item Price History',
                        icon: 'aiImage',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsAi.imageDesc',
                                label: 'AI image processing',
                            },
                        },
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'concepts.CRM',
                path: '',
                title: 'CRM',
                translateKey: 'nav.conceptsAi.CRM',
                icon: 'customers',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.conceptsAi.aiDesc',
                        label: 'AI tools and resources',
                    },
                },
                subMenu: [
                    {
                        key: 'concepts.CRM.Consultant ',
                        path: `${CONCEPTS_PREFIX_PATH}/CRM/Consultant `,
                        title: 'Consultant ',
                        translateKey: 'nav.conceptsAi.Consultant ',
                        icon: 'aiImage',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsAi.imageDesc',
                                label: 'AI image processing',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.CRM.Customer',
                        path: `${CONCEPTS_PREFIX_PATH}/CRM/Customer`,
                        title: 'Customer',
                        translateKey: 'nav.conceptsAi.Customer',
                        icon: 'aiImage',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsAi.imageDesc',
                                label: 'AI image processing',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.CRM.Lead',
                        path: `${CONCEPTS_PREFIX_PATH}/CRM/Lead`,
                        title: 'Lead',
                        translateKey: 'nav.conceptsAi.Lead',
                        icon: 'aiImage',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsAi.imageDesc',
                                label: 'AI image processing',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.CRM.Deal',
                        path: `${CONCEPTS_PREFIX_PATH}/CRM/Deal`,
                        title: 'Deal',
                        translateKey: 'nav.conceptsAi.Deal',
                        icon: 'aiImage',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsAi.imageDesc',
                                label: 'AI image processing',
                            },
                        },
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'concepts.Purchase Order',
                path: '',
                title: 'Purchase Order',
                translateKey: 'nav.conceptsAi.Purchase Order',
                icon: 'orders',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.conceptsAi.aiDesc',
                        label: 'AI tools and resources',
                    },
                },
                subMenu: [
                    {
                        key: 'concepts.Purchase Order.Material Request ',
                        path: `${CONCEPTS_PREFIX_PATH}/Purchase Order/Material Request `,
                        title: 'Material Request ',
                        translateKey: 'nav.conceptsAi.Material Request ',
                        icon: 'aiImage',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsAi.imageDesc',
                                label: 'AI image processing',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.Purchase Order.Purchase Order',
                        path: `${CONCEPTS_PREFIX_PATH}/Purchase Order/Purchase Order`,
                        title: 'Purchase Order',
                        translateKey: 'nav.conceptsAi.Purchase Order',
                        icon: 'aiImage',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsAi.imageDesc',
                                label: 'AI image processing',
                            },
                        },
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'concepts.PMS',
                path: '',
                title: 'PMS',
                translateKey: 'nav.conceptsAi.PMS',
                icon: 'projects',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.conceptsAi.aiDesc',
                        label: 'AI tools and resources',
                    },
                },
                subMenu: [
                    {
                        key: 'concepts.PMS.Ticket Status',
                        path: `${CONCEPTS_PREFIX_PATH}/PMS/Ticket Status`,
                        title: 'Ticket Status',
                        translateKey: 'nav.conceptsAi.Ticket Status',
                        icon: 'aiImage',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsAi.imageDesc',
                                label: 'AI image processing',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.PMS.Ticket',
                        path: `${CONCEPTS_PREFIX_PATH}/PMS/Ticket`,
                        title: 'Ticket  ',
                        translateKey: 'nav.conceptsAi.Ticket',
                        icon: 'aiImage',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsAi.imageDesc',
                                label: 'AI image processing',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.PMS.Work Order',
                        path: `${CONCEPTS_PREFIX_PATH}/PMS/Work Order`,
                        title: 'Work Order',
                        translateKey: 'nav.conceptsAi.Work Order',
                        icon: 'aiImage',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsAi.imageDesc',
                                label: 'AI image processing',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.PMS.Tasks',
                        path: `${CONCEPTS_PREFIX_PATH}/PMS/Tasks`,
                        title: 'Tasks',
                        translateKey: 'nav.conceptsAi.Tasks',
                        icon: 'aiImage',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsAi.imageDesc',
                                label: 'AI image processing',
                            },
                        },
                        subMenu: [],
                    },
                ],
            },
            //  our  concept end  //

            {
                key: 'concepts.projects',
                path: '',
                title: 'Projects',
                translateKey: 'nav.conceptsProjects.projects',
                icon: 'projects',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.conceptsProjects.projectsDesc',
                        label: 'Manage and track projects',
                    },
                },
                subMenu: [
                    {
                        key: 'concepts.projects.scrumBoard',
                        path: `${CONCEPTS_PREFIX_PATH}/projects/scrum-board`,
                        title: 'Scrum Board',
                        translateKey: 'nav.conceptsProjects.scrumBoard',
                        icon: 'projectScrumBoard',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsProjects.scrumBoardDesc',
                                label: 'Manage your scrum workflow',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.projects.projectList',
                        path: `${CONCEPTS_PREFIX_PATH}/projects/project-list`,
                        title: 'Project List',
                        translateKey: 'nav.conceptsProjects.projectList',
                        icon: 'projectList',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsProjects.projectListDesc',
                                label: 'Organize all projects',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.projects.projectDetails',
                        path: `${CONCEPTS_PREFIX_PATH}/projects/project-details/27`,
                        title: 'Details',
                        translateKey: 'nav.conceptsProjects.projectDetails',
                        icon: 'projectDetails',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsProjects.projectDetailsDesc',
                                label: 'Project detailed information',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.projects.projectTasks',
                        path: `${CONCEPTS_PREFIX_PATH}/projects/tasks`,
                        title: 'Tasks',
                        translateKey: 'nav.conceptsProjects.projectTasks',
                        icon: 'projectTask',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsProjects.projectTasksDesc',
                                label: 'Manage project tasks',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.projects.projectIssue',
                        path: `${CONCEPTS_PREFIX_PATH}/projects/tasks/1`,
                        title: 'Issue',
                        translateKey: 'nav.conceptsProjects.projectIssue',
                        icon: 'projectIssue',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsProjects.projectIssueDesc',
                                label: 'Resolve project issues',
                            },
                        },
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'concepts.customers',
                path: '',
                title: 'Customers',
                translateKey: 'nav.conceptsCustomers.customers',
                icon: 'customers',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.conceptsCustomers.customersDesc',
                        label: 'Customer management',
                    },
                },
                subMenu: [
                    {
                        key: 'concepts.customers.customerList',
                        path: `${CONCEPTS_PREFIX_PATH}/customers/customer-list`,
                        title: 'Customer List',
                        translateKey: 'nav.conceptsCustomers.customerList',
                        icon: 'customerList',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsCustomers.customerListDesc',
                                label: 'List of all customers',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.customers.customerEdit',
                        path: `${CONCEPTS_PREFIX_PATH}/customers/customer-edit/1`,
                        title: 'Customer Edit',
                        translateKey: 'nav.conceptsCustomers.customerEdit',
                        icon: 'customerEdit',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsCustomers.customerEditDesc',
                                label: 'Edit customer info',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.customers.customerCreate',
                        path: `${CONCEPTS_PREFIX_PATH}/customers/customer-create`,
                        title: 'Customer Create',
                        translateKey: 'nav.conceptsCustomers.customerCreate',
                        icon: 'customerCreate',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsCustomers.customerCreateDesc',
                                label: 'Add a new customer',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.customers.customerDetails',
                        path: `${CONCEPTS_PREFIX_PATH}/customers/customer-details/1`,
                        title: 'Customer Details',
                        translateKey: 'nav.conceptsCustomers.customerDetails',
                        icon: 'customerDetails',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsCustomers.customerDetailsDesc',
                                label: 'Detailed customer info',
                            },
                        },
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'concepts.products',
                path: '',
                title: 'Products',
                translateKey: 'nav.conceptsProducts.products',
                icon: 'products',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.conceptsProducts.productsDesc',
                        label: 'Product inventory management',
                    },
                },
                subMenu: [
                    {
                        key: 'concepts.products.productList',
                        path: `${CONCEPTS_PREFIX_PATH}/products/product-list`,
                        title: 'Product List',
                        translateKey: 'nav.conceptsProducts.productList',
                        icon: 'productList',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsProducts.productListDesc',
                                label: 'All products listed',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.products.productEdit',
                        path: `${CONCEPTS_PREFIX_PATH}/products/product-edit/12`,
                        title: 'Product Edit',
                        translateKey: 'nav.conceptsProducts.productEdit',
                        icon: 'productEdit',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsProducts.productEditDesc',
                                label: 'Edit product details',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.products.productCreate',
                        path: `${CONCEPTS_PREFIX_PATH}/products/product-create`,
                        title: 'Product Create',
                        translateKey: 'nav.conceptsProducts.productCreate',
                        icon: 'productCreate',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsProducts.productCreateDesc',
                                label: 'Add new product',
                            },
                        },
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'concepts.orders',
                path: '',
                title: 'Orders',
                translateKey: 'nav.conceptsOrders.orders',
                icon: 'orders',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.conceptsOrders.ordersDesc',
                        label: 'Customer orders management',
                    },
                },
                subMenu: [
                    {
                        key: 'concepts.orders.orderList',
                        path: `${CONCEPTS_PREFIX_PATH}/orders/order-list`,
                        title: 'Order List',
                        translateKey: 'nav.conceptsOrders.orderList',
                        icon: 'orderList',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsOrders.orderListDesc',
                                label: 'View all customer orders',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.orders.orderEdit',
                        path: `${CONCEPTS_PREFIX_PATH}/orders/order-edit/95954`,
                        title: 'Order Edit',
                        translateKey: 'nav.conceptsOrders.orderEdit',
                        icon: 'orderEdit',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsOrders.orderEditDesc',
                                label: 'Edit order details',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.orders.orderCreate',
                        path: `${CONCEPTS_PREFIX_PATH}/orders/order-create`,
                        title: 'Order Create',
                        translateKey: 'nav.conceptsOrders.orderCreate',
                        icon: 'orderCreate',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsOrders.orderCreateDesc',
                                label: 'Create new order',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.orders.orderDetails',
                        path: `${CONCEPTS_PREFIX_PATH}/orders/order-details/95954`,
                        title: 'Order Details',
                        translateKey: 'nav.conceptsOrders.orderDetails',
                        icon: 'ordeDetails',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsOrders.orderDetailsDesc',
                                label: 'Detailed order information',
                            },
                        },
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'concepts.account',
                path: '',
                title: 'Account',
                translateKey: 'nav.conceptsAccount.account',
                icon: 'account',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.conceptsAccount.accountDesc',
                        label: 'Account settings and info',
                    },
                },
                subMenu: [
                    {
                        key: 'concepts.account.settings',
                        path: `${CONCEPTS_PREFIX_PATH}/account/settings`,
                        title: 'Settings',
                        translateKey: 'nav.conceptsAccount.settings',
                        icon: 'accountSettings',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsAccount.settingsDesc',
                                label: 'Configure your settings',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.account.activityLog',
                        path: `${CONCEPTS_PREFIX_PATH}/account/activity-log`,
                        title: 'Activity log',
                        translateKey: 'nav.conceptsAccount.activityLog',
                        icon: 'accountActivityLogs',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsAccount.activityLogDesc',
                                label: 'View recent activities',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.account.rolesPermissions',
                        path: `${CONCEPTS_PREFIX_PATH}/account/roles-permissions`,
                        title: 'Roles & Permissions',
                        translateKey: 'nav.conceptsAccount.rolesPermissions',
                        icon: 'accountRoleAndPermission',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsAccount.rolesPermissionsDesc',
                                label: 'Manage roles & permissions',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.account.pricing',
                        path: `${CONCEPTS_PREFIX_PATH}/account/pricing`,
                        title: 'Pricing',
                        translateKey: 'nav.conceptsAccount.pricing',
                        icon: 'accountPricing',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsAccount.pricingDesc',
                                label: 'View pricing plans',
                            },
                        },
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'concepts.helpCenter',
                path: '',
                title: 'Help Center',
                translateKey: 'nav.conceptsHelpCenter.helpCenter',
                icon: 'helpCenter',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.conceptsHelpCenter.helpCenterDesc',
                        label: 'Support and articles',
                    },
                },
                subMenu: [
                    {
                        key: 'concepts.helpCenter.supportHub',
                        path: `${CONCEPTS_PREFIX_PATH}/help-center/support-hub`,
                        title: 'Support Hub',
                        translateKey: 'nav.conceptsHelpCenter.supportHub',
                        icon: 'helpCeterSupportHub',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsHelpCenter.supportHubDesc',
                                label: 'Central support hub',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.helpCenter.article',
                        path: `${CONCEPTS_PREFIX_PATH}/help-center/article/pWBKE_0UiQ`,
                        title: 'Article',
                        translateKey: 'nav.conceptsHelpCenter.article',
                        icon: 'helpCeterArticle',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsHelpCenter.articleDesc',
                                label: 'Read support articles',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.helpCenter.editArticle',
                        path: `${CONCEPTS_PREFIX_PATH}/help-center/edit-article/pWBKE_0UiQ`,
                        title: 'Edit Article',
                        translateKey: 'nav.conceptsHelpCenter.editArticle',
                        icon: 'helpCeterEditArticle',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsHelpCenter.editArticleDesc',
                                label: 'Modify article content',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.helpCenter.manageArticle',
                        path: `${CONCEPTS_PREFIX_PATH}/help-center/manage-article`,
                        title: 'Manage Article',
                        translateKey: 'nav.conceptsHelpCenter.manageArticle',
                        icon: 'helpCeterManageArticle',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey:
                                    'nav.conceptsHelpCenter.manageArticleDesc',
                                label: 'Article management',
                            },
                        },
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'concepts.calendar',
                path: `${CONCEPTS_PREFIX_PATH}/calendar`,
                title: 'Calendar',
                translateKey: 'nav.calendar',
                icon: 'calendar',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.calendarDesc',
                        label: 'Schedule and events',
                    },
                },
                subMenu: [],
            },
            {
                key: 'concepts.fileManager',
                path: `${CONCEPTS_PREFIX_PATH}/file-manager`,
                title: 'File Manager',
                translateKey: 'nav.fileManager',
                icon: 'fileManager',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.fileManagerDesc',
                        label: 'Manage your files',
                    },
                },
                subMenu: [],
            },
            {
                key: 'concepts.mail',
                path: `${CONCEPTS_PREFIX_PATH}/mail`,
                title: 'Mail',
                translateKey: 'nav.mail',
                icon: 'mail',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.mailDesc',
                        label: 'Manage your emails',
                    },
                },
                subMenu: [],
            },
            {
                key: 'concepts.chat',
                path: `${CONCEPTS_PREFIX_PATH}/chat`,
                title: 'Chat',
                translateKey: 'nav.chat',
                icon: 'chat',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.chatDesc',
                        label: 'Chat with friends',
                    },
                },
                subMenu: [],
            },
        ],
    },
]

export default conceptsNavigationConfig

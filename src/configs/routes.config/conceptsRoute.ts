import { lazy } from 'react'
import { CONCEPTS_PREFIX_PATH } from '@/constants/route.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { Routes } from '@/@types/routes'

const conceptsRoute: Routes = [
    // {
    //     key: 'concepts.ai.chat',
    //     path: `${CONCEPTS_PREFIX_PATH}/ai/chat`,
    //     component: lazy(() => import('@/views/concepts/ai/Chat')),
    //     authority: [ADMIN, USER],
    //     meta: {
    //         pageContainerType: 'contained',
    //     },
    // },

    //hrms

    // employee

    {
        key: 'concepts.hrms.employee',
        path: `${CONCEPTS_PREFIX_PATH}/hrms/employee`,
        component: lazy(() => import('@/views/concepts/hrms/employee')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

    {
        key: 'concepts.hrms.employeeCreate',
        path: `${CONCEPTS_PREFIX_PATH}/hrms/employee/create`,
        component: lazy(
            () => import('@/views/concepts/hrms/employee/EmployeeCreate'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Create ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.hrms.employeeEdit',
        path: `${CONCEPTS_PREFIX_PATH}/hrms/employee/edit/1`,
        component: lazy(
            () => import('@/views/concepts/hrms/employee/EmployeeEdit'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Edit ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.hrms.employeeDetails',
        path: `${CONCEPTS_PREFIX_PATH}/hrms/employee/details/1`,
        component: lazy(
            () => import('@/views/concepts/hrms/employee/EmployeeDetails'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Details ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },

    // payroll

    {
        key: 'concepts.hrms.payroll',
        path: `${CONCEPTS_PREFIX_PATH}/hrms/payroll`,
        component: lazy(() => import('@/views/concepts/hrms/payroll')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

    {
        key: 'concepts.hrms.employeeCreate',
        path: `${CONCEPTS_PREFIX_PATH}/hrms/payroll/create`,
        component: lazy(
            () => import('@/views/concepts/hrms/payroll/PayrollCreate'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Create ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.hrms.payrollEdit',
        path: `${CONCEPTS_PREFIX_PATH}/hrms/payroll/edit/1`,
        component: lazy(
            () => import('@/views/concepts/hrms/payroll/PayrollEdit'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Edit ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.hrms.payrollDetails',
        path: `${CONCEPTS_PREFIX_PATH}/hrms/payroll/details/1`,
        component: lazy(
            () => import('@/views/concepts/hrms/payroll/PayrollDetails'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Details ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },

    // payroll-record

    {
        key: 'concepts.hrms.payroll-record',
        path: `${CONCEPTS_PREFIX_PATH}/hrms/payroll-record`,
        component: lazy(() => import('@/views/concepts/hrms/payrollRecord')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

    {
        key: 'concepts.hrms.payrollrecordCreate',
        path: `${CONCEPTS_PREFIX_PATH}/hrms/payroll-record/create`,
        component: lazy(
            () =>
                import(
                    '@/views/concepts/hrms/payrollRecord/PayrollRecordCreate'
                ),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Create ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.hrms.payrollrecordEdit',
        path: `${CONCEPTS_PREFIX_PATH}/hrms/payroll-record/edit/1`,
        component: lazy(
            () =>
                import('@/views/concepts/hrms/payrollRecord/PayrollRecordEdit'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Edit ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.hrms.payrollrecord/Details',
        path: `${CONCEPTS_PREFIX_PATH}/hrms/payroll-record/details/1`,
        component: lazy(
            () =>
                import(
                    '@/views/concepts/hrms/payrollRecord/PayrollRecordDetails'
                ),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Details ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },

    // ADVANCE-PAYCHECK

    {
        key: 'concepts.hrms.advance',
        path: `${CONCEPTS_PREFIX_PATH}/hrms/advance`,
        component: lazy(() => import('@/views/concepts/hrms/advance')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

    {
        key: 'concepts.hrms.advanceCreate',
        path: `${CONCEPTS_PREFIX_PATH}/hrms/advance/create`,
        component: lazy(
            () => import('@/views/concepts/hrms/advance/AdvanceCreate'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Create ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.hrms.advanceEdit',
        path: `${CONCEPTS_PREFIX_PATH}/hrms/advance/edit/1`,
        component: lazy(
            () => import('@/views/concepts/hrms/advance/AdvanceEdit'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Edit ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.hrms.advance/Details',
        path: `${CONCEPTS_PREFIX_PATH}/hrms/advance/details/1`,
        component: lazy(
            () => import('@/views/concepts/hrms/advance/AdvanceDetails'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Details ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },

    // leaves

    {
        key: 'concepts.hrms.leaves',
        path: `${CONCEPTS_PREFIX_PATH}/hrms/leaves`,
        component: lazy(() => import('@/views/concepts/hrms/leaves')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

    {
        key: 'concepts.hrms.leavesCreate',
        path: `${CONCEPTS_PREFIX_PATH}/hrms/leaves/create`,
        component: lazy(
            () => import('@/views/concepts/hrms/leaves/LeavesCreate'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Create ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.hrms.leavesEdit',
        path: `${CONCEPTS_PREFIX_PATH}/hrms/leaves/edit/1`,
        component: lazy(
            () => import('@/views/concepts/hrms/leaves/LeavesEdit'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Edit ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.hrms.leavesDetails',
        path: `${CONCEPTS_PREFIX_PATH}/hrms/leaves/details/1`,
        component: lazy(
            () => import('@/views/concepts/hrms/leaves/LeavesDetails'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Details ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },

    // Attendance Verification

    {
        key: 'concepts.hrms.attendanceVerification',
        path: `${CONCEPTS_PREFIX_PATH}/hrms/attendance-verification`,
        component: lazy(
            () => import('@/views/concepts/hrms/attendanceVerification'),
        ),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

    {
        key: 'concepts.hrms.attendanceVerificationCreate',
        path: `${CONCEPTS_PREFIX_PATH}/hrms/attendance-verification/create`,
        component: lazy(
            () =>
                import(
                    '@/views/concepts/hrms/attendanceVerification/AttendanceVerificationCreate'
                ),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Create ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.hrms.leavesEdit',
        path: `${CONCEPTS_PREFIX_PATH}/hrms/attendance-verification/edit/1`,
        component: lazy(
            () =>
                import(
                    '@/views/concepts/hrms/attendanceVerification/AttendanceVerificationEdit'
                ),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Edit ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.hrms.attendanceVerificationDetails',
        path: `${CONCEPTS_PREFIX_PATH}/hrms/attendance-verification/details/1`,
        component: lazy(
            () =>
                import(
                    '@/views/concepts/hrms/attendanceVerification/AttendanceVerificationDetails'
                ),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Details ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },

    // Attendance Verification

    {
        key: 'concepts.hrms.trackdocuments',
        path: `${CONCEPTS_PREFIX_PATH}/hrms/track-documents`,
        component: lazy(() => import('@/views/concepts/hrms/trackDocuments')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

    {
        key: 'concepts.hrms.trackdocumentsCreate',
        path: `${CONCEPTS_PREFIX_PATH}/hrms/track-documents/create`,
        component: lazy(
            () =>
                import(
                    '@/views/concepts/hrms/trackDocuments/TrackDocumentsCreate'
                ),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Create ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.hrms.trackdocumentsEdit',
        path: `${CONCEPTS_PREFIX_PATH}/hrms/track-documents/edit/1`,
        component: lazy(
            () =>
                import(
                    '@/views/concepts/hrms/trackDocuments/TrackDocumentsEdit'
                ),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Edit ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.hrms.trackdocumentsDetails',
        path: `${CONCEPTS_PREFIX_PATH}/hrms/track-documents/details/1`,
        component: lazy(
            () =>
                import(
                    '@/views/concepts/hrms/trackDocuments/TrackDocumentsDetails'
                ),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Details ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },

    // Attendance

    {
        key: 'concepts.hrms.attendance',
        path: `${CONCEPTS_PREFIX_PATH}/hrms/attendance`,
        component: lazy(() => import('@/views/concepts/hrms/attendance')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

    {
        key: 'concepts.hrms.attendanceCreate',
        path: `${CONCEPTS_PREFIX_PATH}/hrms/attendance/create`,
        component: lazy(
            () => import('@/views/concepts/hrms/attendance/AttendanceCreate'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Create ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.hrms.attendanceEdit',
        path: `${CONCEPTS_PREFIX_PATH}/hrms/attendance/edit/1`,
        component: lazy(
            () => import('@/views/concepts/hrms/attendance/AttendanceEdit'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Edit ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.hrms.attendanceDetails',
        path: `${CONCEPTS_PREFIX_PATH}/hrms/attendance/details/1`,
        component: lazy(
            () => import('@/views/concepts/hrms/attendance/AttendanceDetails'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Details ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },

    // PAYCHECK

    {
        key: 'concepts.hrms.paycheck',
        path: `${CONCEPTS_PREFIX_PATH}/hrms/paycheck`,
        component: lazy(() => import('@/views/concepts/hrms/paycheck')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

    {
        key: 'concepts.hrms.paycheckCreate',
        path: `${CONCEPTS_PREFIX_PATH}/hrms/paycheck/create`,
        component: lazy(
            () => import('@/views/concepts/hrms/paycheck/PaycheckCreate'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Create ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.hrms.paycheckEdit',
        path: `${CONCEPTS_PREFIX_PATH}/hrms/paycheck/edit/1`,
        component: lazy(
            () => import('@/views/concepts/hrms/paycheck/PaycheckEdit'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Edit ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.hrms.paycheckDetails',
        path: `${CONCEPTS_PREFIX_PATH}/hrms/paycheck/details/1`,
        component: lazy(
            () => import('@/views/concepts/hrms/paycheck/PaycheckDetails'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Details ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },

    // stock management item-types

    {
        key: 'concepts.stock-management.items-types',
        path: `${CONCEPTS_PREFIX_PATH}/stock-management/item-types`,
        component: lazy(
            () => import('@/views/concepts/stock-management/itemTypes'),
        ),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

    {
        key: 'concepts.stock-management.itemstypesCreate',
        path: `${CONCEPTS_PREFIX_PATH}/stock-management/items-types/create`,
        component: lazy(
            () =>
                import(
                    '@/views/concepts/stock-management/itemTypes/ItemTypesCreate'
                ),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Create ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.stock-management.paycheckEdit',
        path: `${CONCEPTS_PREFIX_PATH}/stock-management/items-types/edit/1`,
        component: lazy(
            () =>
                import(
                    '@/views/concepts/stock-management/itemTypes/ItemTypesEdit'
                ),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Edit ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.stock-management.itemsTypesDetails',
        path: `${CONCEPTS_PREFIX_PATH}/stock-management/items-types/details/1`,
        component: lazy(
            () =>
                import(
                    '@/views/concepts/stock-management/itemTypes/ItemTypesDetails'
                ),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Details ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },

    // stock management items

    {
        key: 'concepts.stock-management.items',
        path: `${CONCEPTS_PREFIX_PATH}/stock-management/items`,
        component: lazy(
            () => import('@/views/concepts/stock-management/items'),
        ),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

    {
        key: 'concepts.stock-management.itemsCreate',
        path: `${CONCEPTS_PREFIX_PATH}/stock-management/items/create`,
        component: lazy(
            () => import('@/views/concepts/stock-management/items/ItemsCreate'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Create ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.stock-management.itemsEdit',
        path: `${CONCEPTS_PREFIX_PATH}/stock-management/items/edit/1`,
        component: lazy(
            () => import('@/views/concepts/stock-management/items/ItemsEdit'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Edit ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.stock-management.itemsDetails',
        path: `${CONCEPTS_PREFIX_PATH}/stock-management/items/details/1`,
        component: lazy(
            () =>
                import('@/views/concepts/stock-management/items/ItemsDetails'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Details ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },

    // stock management item-stock

    {
        key: 'concepts.stock-management.itemStock',
        path: `${CONCEPTS_PREFIX_PATH}/stock-management/item-stock`,
        component: lazy(
            () => import('@/views/concepts/stock-management/itemStock'),
        ),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

    {
        key: 'concepts.stock-management.itemStockCreate',
        path: `${CONCEPTS_PREFIX_PATH}/stock-management/itemStock/create`,
        component: lazy(
            () =>
                import(
                    '@/views/concepts/stock-management/itemStock/ItemStockCreate'
                ),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Create ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.stock-management.itemStock',
        path: `${CONCEPTS_PREFIX_PATH}/stock-management/itemStock/edit/1`,
        component: lazy(
            () =>
                import(
                    '@/views/concepts/stock-management/itemStock/ItemStockEdit'
                ),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Edit ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.stock-management.itemStock',
        path: `${CONCEPTS_PREFIX_PATH}/stock-management/item-stock/details/1`,
        component: lazy(
            () =>
                import(
                    '@/views/concepts/stock-management/itemStock/ItemStockDetails'
                ),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Details ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },

    // stock history

    {
        key: 'concepts.stock-management.stockHistory',
        path: `${CONCEPTS_PREFIX_PATH}/stock-management/stock-history`,
        component: lazy(
            () =>
                import(
                    '@/views/concepts/stock-management/stockHistory/StockHistory'
                ),
        ),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

    {
        key: 'concepts.stock-management.stockHistoryCreate',
        path: `${CONCEPTS_PREFIX_PATH}/stock-management/stock-history/create`,
        component: lazy(
            () =>
                import(
                    '@/views/concepts/stock-management/stockHistory/StockHistoryCreate'
                ),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Create ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.stock-management.stockHistory',
        path: `${CONCEPTS_PREFIX_PATH}/stock-management/stock-history/edit/1`,
        component: lazy(
            () =>
                import(
                    '@/views/concepts/stock-management/stockHistory/StockHistoryEdit'
                ),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Edit ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.stock-management.itemStock',
        path: `${CONCEPTS_PREFIX_PATH}/stock-management/stock-history/details/1`,
        component: lazy(
            () =>
                import(
                    '@/views/concepts/stock-management/stockHistory/StockHistoryDetails'
                ),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Details ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },

    // VENDOR

    {
        key: 'concepts.stock-management.vendor',
        path: `${CONCEPTS_PREFIX_PATH}/stock-management/vendor`,
        component: lazy(
            () => import('@/views/concepts/stock-management/vendor/Vendor'),
        ),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

    {
        key: 'concepts.stock-management.vendorCreate',
        path: `${CONCEPTS_PREFIX_PATH}/stock-management/vendor/create`,
        component: lazy(
            () =>
                import('@/views/concepts/stock-management/vendor/VendorCreate'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Create ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.stock-management.vendor',
        path: `${CONCEPTS_PREFIX_PATH}/stock-management/vendor/edit/1`,
        component: lazy(
            () => import('@/views/concepts/stock-management/vendor/VendorEdit'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Edit ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.stock-management.vendor',
        path: `${CONCEPTS_PREFIX_PATH}/stock-management/vendor/details/1`,
        component: lazy(
            () =>
                import(
                    '@/views/concepts/stock-management/vendor/VendorDetails'
                ),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Details ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },

    // UOM

    {
        key: 'concepts.stock-management.uom',
        path: `${CONCEPTS_PREFIX_PATH}/stock-management/uom`,
        component: lazy(
            () => import('@/views/concepts/stock-management/uom/Uom'),
        ),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

    {
        key: 'concepts.stock-management.uomCreate',
        path: `${CONCEPTS_PREFIX_PATH}/stock-management/uom/create`,
        component: lazy(
            () => import('@/views/concepts/stock-management/uom/UomCreate'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Create ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.stock-management.uom',
        path: `${CONCEPTS_PREFIX_PATH}/stock-management/uom/edit/1`,
        component: lazy(
            () => import('@/views/concepts/stock-management/uom/UomEdit'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Edit ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.stock-management.uom',
        path: `${CONCEPTS_PREFIX_PATH}/stock-management/uom/details/1`,
        component: lazy(
            () => import('@/views/concepts/stock-management/uom/UomDetails'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Details ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },

    // brand

    {
        key: 'concepts.stock-management.brand',
        path: `${CONCEPTS_PREFIX_PATH}/stock-management/brand`,
        component: lazy(
            () => import('@/views/concepts/stock-management/brand/Brand'),
        ),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

    {
        key: 'concepts.stock-management.brandCreate',
        path: `${CONCEPTS_PREFIX_PATH}/stock-management/brand/create`,
        component: lazy(
            () => import('@/views/concepts/stock-management/brand/BrandCreate'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Create ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.stock-management.brand',
        path: `${CONCEPTS_PREFIX_PATH}/stock-management/brand/edit/1`,
        component: lazy(
            () => import('@/views/concepts/stock-management/brand/BrandEdit'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Edit ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.stock-management.brand',
        path: `${CONCEPTS_PREFIX_PATH}/stock-management/brand/details/1`,
        component: lazy(
            () =>
                import('@/views/concepts/stock-management/brand/BrandDetails'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Details ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },

    // inward-stock

    {
        key: 'concepts.stock-management.inward-stock',
        path: `${CONCEPTS_PREFIX_PATH}/stock-management/inward-stock`,
        component: lazy(
            () =>
                import(
                    '@/views/concepts/stock-management/inwardStock/InwardStock'
                ),
        ),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

    {
        key: 'concepts.stock-management.inwardStockCreate',
        path: `${CONCEPTS_PREFIX_PATH}/stock-management/inward-stock/create`,
        component: lazy(
            () =>
                import(
                    '@/views/concepts/stock-management/inwardStock/InwardStockCreate'
                ),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Create ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.stock-management.inwardStock',
        path: `${CONCEPTS_PREFIX_PATH}/stock-management/inward-stock/edit/1`,
        component: lazy(
            () =>
                import(
                    '@/views/concepts/stock-management/inwardStock/InwardStockEdit'
                ),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Edit ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.stock-management.inward-stock',
        path: `${CONCEPTS_PREFIX_PATH}/stock-management/inward-stock/details/1`,
        component: lazy(
            () =>
                import(
                    '@/views/concepts/stock-management/inwardStock/InwardStockDetails'
                ),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Details ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },

    // item-pricing

    {
        key: 'concepts.stock-management.item-pricing',
        path: `${CONCEPTS_PREFIX_PATH}/stock-management/item-pricing`,
        component: lazy(
            () =>
                import(
                    '@/views/concepts/stock-management/itemPricing/ItemPricing'
                ),
        ),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

    {
        key: 'concepts.stock-management.itemPricingCreate',
        path: `${CONCEPTS_PREFIX_PATH}/stock-management/item-pricing/create`,
        component: lazy(
            () =>
                import(
                    '@/views/concepts/stock-management/itemPricing/ItemPricingCreate'
                ),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Create ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.stock-management.itemPricing',
        path: `${CONCEPTS_PREFIX_PATH}/stock-management/item-pricing/edit/1`,
        component: lazy(
            () =>
                import(
                    '@/views/concepts/stock-management/itemPricing/ItemPricingEdit'
                ),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Edit ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.stock-management.itemPricing',
        path: `${CONCEPTS_PREFIX_PATH}/stock-management/item-pricing/details/1`,
        component: lazy(
            () =>
                import(
                    '@/views/concepts/stock-management/itemPricing/ItemPricingDetails'
                ),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Details ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },

    // item-price-history

    {
        key: 'concepts.stock-management.item-price-history',
        path: `${CONCEPTS_PREFIX_PATH}/stock-management/item-price-history`,
        component: lazy(
            () =>
                import(
                    '@/views/concepts/stock-management/itempriceHistory/ItempriceHistory'
                ),
        ),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

    {
        key: 'concepts.stock-management.itemPricingCreate',
        path: `${CONCEPTS_PREFIX_PATH}/stock-management/item-price-history/create`,
        component: lazy(
            () =>
                import(
                    '@/views/concepts/stock-management/itempriceHistory/ItempriceHistoryCreate'
                ),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Create ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.stock-management.itempriceHistory',
        path: `${CONCEPTS_PREFIX_PATH}/stock-management/item-price-history/edit/1`,
        component: lazy(
            () =>
                import(
                    '@/views/concepts/stock-management/itempriceHistory/ItempriceHistoryEdit'
                ),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Edit ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.stock-management.itempriceHistory',
        path: `${CONCEPTS_PREFIX_PATH}/stock-management/item-price-history/details/1`,
        component: lazy(
            () =>
                import(
                    '@/views/concepts/stock-management/itempriceHistory/ItempriceHistoryDetails'
                ),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Details ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },

    // crm consultant

    {
        key: 'concepts.crm.consultant',
        path: `${CONCEPTS_PREFIX_PATH}/crm/consultant`,
        component: lazy(
            () => import('@/views/concepts/crm/consultant/Consultant'),
        ),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

    {
        key: 'concepts.crm.consultantCreate',
        path: `${CONCEPTS_PREFIX_PATH}/crm/consultant/create`,
        component: lazy(
            () => import('@/views/concepts/crm/consultant/ConsultantCreate'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Create ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.crm.consultant',
        path: `${CONCEPTS_PREFIX_PATH}/crm/consultant/edit/1`,
        component: lazy(
            () => import('@/views/concepts/crm/consultant/ConsultantEdit'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Edit ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.crm.consultant',
        path: `${CONCEPTS_PREFIX_PATH}/crm/consultant/details/1`,
        component: lazy(
            () => import('@/views/concepts/crm/consultant/ConsultantDetails'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Details ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },

    // crm customer

    {
        key: 'concepts.crm.customer',
        path: `${CONCEPTS_PREFIX_PATH}/crm/customer`,
        component: lazy(() => import('@/views/concepts/crm/customer/Customer')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

    {
        key: 'concepts.crm.customerCreate',
        path: `${CONCEPTS_PREFIX_PATH}/crm/customer/create`,
        component: lazy(
            () => import('@/views/concepts/crm/customer/CustomerCreate'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Create ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.crm.customer',
        path: `${CONCEPTS_PREFIX_PATH}/crm/customer/edit/1`,
        component: lazy(
            () => import('@/views/concepts/crm/customer/CustomerEdit'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Edit ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.crm.customer',
        path: `${CONCEPTS_PREFIX_PATH}/crm/customer/details/1`,
        component: lazy(
            () => import('@/views/concepts/crm/customer/CustomerDetails'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Details ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },

    // crm deal

    {
        key: 'concepts.crm.deal',
        path: `${CONCEPTS_PREFIX_PATH}/crm/deal`,
        component: lazy(() => import('@/views/concepts/crm/deal/Deal')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

    {
        key: 'concepts.crm.dealCreate',
        path: `${CONCEPTS_PREFIX_PATH}/crm/deal/create`,
        component: lazy(() => import('@/views/concepts/crm/deal/DealCreate')),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Create ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.crm.deal',
        path: `${CONCEPTS_PREFIX_PATH}/crm/deal/edit/1`,
        component: lazy(() => import('@/views/concepts/crm/deal/DealEdit')),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Edit ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.crm.deal',
        path: `${CONCEPTS_PREFIX_PATH}/crm/deal/details/1`,
        component: lazy(() => import('@/views/concepts/crm/deal/DealDetails')),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Details ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },

    // material-request

    {
        key: 'concepts.purchase-order.deal',
        path: `${CONCEPTS_PREFIX_PATH}/purchase-order/material-request`,
        component: lazy(
            () =>
                import(
                    '@/views/concepts/purchase-order/materialRequest/MaterialRequest'
                ),
        ),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

    {
        key: 'concepts.purchase-order.dealCreate',
        path: `${CONCEPTS_PREFIX_PATH}/purchase-order/material-request/create`,
        component: lazy(
            () =>
                import(
                    '@/views/concepts/purchase-order/materialRequest/MaterialRequestCreate'
                ),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Create ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.purchase-order.deal',
        path: `${CONCEPTS_PREFIX_PATH}/purchase-order/material-request/edit/1`,
        component: lazy(
            () =>
                import(
                    '@/views/concepts/purchase-order/materialRequest/MaterialRequestEdit'
                ),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Edit ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.purchase-order.deal',
        path: `${CONCEPTS_PREFIX_PATH}/purchase-order/material-request/details/1`,
        component: lazy(
            () =>
                import(
                    '@/views/concepts/purchase-order/materialRequest/MaterialRequestDetails'
                ),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Details ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },

    // pms Ticket-status

    {
        key: 'concepts.pms.ticketStatus',
        path: `${CONCEPTS_PREFIX_PATH}/pms/ticket-status`,
        component: lazy(
            () => import('@/views/concepts/pms/ticketStatus/TicketStatus'),
        ),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

    {
        key: 'concepts.pms.ticketStatusCreate',
        path: `${CONCEPTS_PREFIX_PATH}/pms/ticket-status/create`,
        component: lazy(
            () =>
                import('@/views/concepts/pms/ticketStatus/TicketStatusCreate'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Create ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.pms.ticketStatus',
        path: `${CONCEPTS_PREFIX_PATH}/pms/ticket-status/edit/1`,
        component: lazy(
            () => import('@/views/concepts/pms/ticketStatus/TicketStatusEdit'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Edit ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.pms.ticketStatus',
        path: `${CONCEPTS_PREFIX_PATH}/pms/ticket-status/details/1`,
        component: lazy(
            () =>
                import('@/views/concepts/pms/ticketStatus/TicketStatusDetails'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Details ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },

    // pms Ticket-status

    {
        key: 'concepts.pms.ticketStatus',
        path: `${CONCEPTS_PREFIX_PATH}/pms/ticket-status`,
        component: lazy(
            () => import('@/views/concepts/pms/ticketStatus/TicketStatus'),
        ),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

    {
        key: 'concepts.pms.ticketStatusCreate',
        path: `${CONCEPTS_PREFIX_PATH}/pms/ticket-status/create`,
        component: lazy(
            () =>
                import('@/views/concepts/pms/ticketStatus/TicketStatusCreate'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Create ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.pms.ticketStatus',
        path: `${CONCEPTS_PREFIX_PATH}/pms/ticket-status/edit/1`,
        component: lazy(
            () => import('@/views/concepts/pms/ticketStatus/TicketStatusEdit'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Edit ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.pms.ticketStatus',
        path: `${CONCEPTS_PREFIX_PATH}/pms/ticket-status/details/1`,
        component: lazy(
            () =>
                import('@/views/concepts/pms/ticketStatus/TicketStatusDetails'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Details ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },

    // pms work-order

    {
        key: 'concepts.pms.workOrder',
        path: `${CONCEPTS_PREFIX_PATH}/pms/work-order`,
        component: lazy(
            () => import('@/views/concepts/pms/workOrder/WorkOrder'),
        ),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

    {
        key: 'concepts.pms.workOrderCreate',
        path: `${CONCEPTS_PREFIX_PATH}/pms/work-order/create`,
        component: lazy(
            () => import('@/views/concepts/pms/workOrder/WorkOrderCreate'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Create ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.pms.workOrder',
        path: `${CONCEPTS_PREFIX_PATH}/pms/work-order/edit/1`,
        component: lazy(
            () => import('@/views/concepts/pms/workOrder/WorkOrderEdit'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Edit ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.pms.workOrder',
        path: `${CONCEPTS_PREFIX_PATH}/pms/work-order/details/1`,
        component: lazy(
            () => import('@/views/concepts/pms/workOrder/WorkOrderDetails'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Details ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },

    // purchase-order

    {
        key: 'concepts.purchase-order.purchaseOrder',
        path: `${CONCEPTS_PREFIX_PATH}/purchase-order/purchase-order`,
        component: lazy(
            () =>
                import(
                    '@/views/concepts/purchase-order/purchaseOrder/PurchaseOrder'
                ),
        ),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

    {
        key: 'concepts.purchase-order.purchaseOrderCreate',
        path: `${CONCEPTS_PREFIX_PATH}/purchase-order/purchase-order/create`,
        component: lazy(
            () =>
                import(
                    '@/views/concepts/purchase-order/purchaseOrder/PurchaseOrderCreate'
                ),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Create ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.purchase-order.purchaseOrder',
        path: `${CONCEPTS_PREFIX_PATH}/purchase-order/purchase-order/edit/1`,
        component: lazy(
            () =>
                import(
                    '@/views/concepts/purchase-order/purchaseOrder/PurchaseOrderEdit'
                ),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Edit ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.purchase-order.deal',
        path: `${CONCEPTS_PREFIX_PATH}/purchase-order/purchase-order/details/1`,
        component: lazy(
            () =>
                import(
                    '@/views/concepts/purchase-order/purchaseOrder/PurchaseOrderDetails'
                ),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Details ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },

    // organisation
    {
        key: 'concepts.Organization.roles',
        path: `${CONCEPTS_PREFIX_PATH}/organization/roles`,
        component: lazy(() => import('@/views/concepts/organization/roles')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

    {
        key: 'concepts.Organization.rolesCreate',
        path: `${CONCEPTS_PREFIX_PATH}/organization/roles/create`,
        component: lazy(
            () => import('@/views/concepts/organization/roles/RolesCreate'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Create ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.Organization.rolesEdit',
        path: `${CONCEPTS_PREFIX_PATH}/organization/roles/edit/1`,
        component: lazy(
            () => import('@/views/concepts/organization/roles/RolesEdit'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Edit ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.Organization.rolesDetails',
        path: `${CONCEPTS_PREFIX_PATH}/organization/roles/details/1`,
        component: lazy(
            () => import('@/views/concepts/organization/roles/RolesDetails'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Details ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },

    // department

    {
        key: 'concepts.Organization.department',
        path: `${CONCEPTS_PREFIX_PATH}/organization/department`,
        component: lazy(
            () => import('@/views/concepts/organization/department'),
        ),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

    {
        key: 'concepts.Organization.departmentCreate',
        path: `${CONCEPTS_PREFIX_PATH}/organization/department/create`,
        component: lazy(
            () =>
                import(
                    '@/views/concepts/organization/department/DepartmentCreate'
                ),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Create ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.Organization.departmentEdit',
        path: `${CONCEPTS_PREFIX_PATH}/organization/department/edit/1`,
        component: lazy(
            () =>
                import(
                    '@/views/concepts/organization/department/DepartmentEdit'
                ),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Edit ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.Organization.departmentDetails',
        path: `${CONCEPTS_PREFIX_PATH}/organization/department/details/1`,
        component: lazy(
            () =>
                import(
                    '@/views/concepts/organization/department/DepartmentDetails'
                ),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Details ',
                description:
                    'Manage Roles details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },

    // HOLIDAYS

    {
        key: 'concepts.Organization.holidays',
        path: `${CONCEPTS_PREFIX_PATH}/organization/holidays`,
        component: lazy(() => import('@/views/concepts/organization/holidays')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

    {
        key: 'concepts.Organization.holidaysCreate',
        path: `${CONCEPTS_PREFIX_PATH}/organization/holidays/create`,
        component: lazy(
            () =>
                import('@/views/concepts/organization/holidays/HolidaysCreate'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Create ',
                description:
                    'Manage holidays details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.Organization.holidaysEdit',
        path: `${CONCEPTS_PREFIX_PATH}/organization/holidays/edit/1`,
        component: lazy(
            () => import('@/views/concepts/organization/holidays/HolidaysEdit'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Edit ',
                description:
                    'Manage holidays details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.Organization.holidaysDetails',
        path: `${CONCEPTS_PREFIX_PATH}/organization/holidays/details/1`,
        component: lazy(
            () =>
                import(
                    '@/views/concepts/organization/holidays/HolidaysDetails'
                ),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Details ',
                description:
                    'Manage holidays details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },

    // document

    {
        key: 'concepts.Organization.document',
        path: `${CONCEPTS_PREFIX_PATH}/organization/document`,
        component: lazy(() => import('@/views/concepts/organization/document')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

    {
        key: 'concepts.Organization.documentCreate',
        path: `${CONCEPTS_PREFIX_PATH}/organization/document/create`,
        component: lazy(
            () =>
                import('@/views/concepts/organization/document/DocumentCreate'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Create ',
                description:
                    'Manage holidays details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.Organization.documentEdit',
        path: `${CONCEPTS_PREFIX_PATH}/organization/document/edit/1`,
        component: lazy(
            () => import('@/views/concepts/organization/document/DocumentEdit'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Edit ',
                description:
                    'Manage holidays details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.Organization.documentDetails',
        path: `${CONCEPTS_PREFIX_PATH}/organization/document/details/1`,
        component: lazy(
            () =>
                import(
                    '@/views/concepts/organization/document/DocumentDetails'
                ),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Details ',
                description:
                    'Manage holidays details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },

    // document

    // leave

    {
        key: 'concepts.Organization.leave',
        path: `${CONCEPTS_PREFIX_PATH}/organization/leave`,
        component: lazy(() => import('@/views/concepts/organization/leave')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

    {
        key: 'concepts.Organization.leaveCreate',
        path: `${CONCEPTS_PREFIX_PATH}/organization/leave/create`,
        component: lazy(
            () => import('@/views/concepts/organization/leave/LeaveCreate'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Create ',
                description:
                    'Manage holidays details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.Organization.leaveEdit',
        path: `${CONCEPTS_PREFIX_PATH}/organization/leave/edit/1`,
        component: lazy(
            () => import('@/views/concepts/organization/leave/LeaveEdit'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Edit ',
                description:
                    'Manage holidays details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.Organization.leaveDetails',
        path: `${CONCEPTS_PREFIX_PATH}/organization/leave/details/1`,
        component: lazy(
            () => import('@/views/concepts/organization/leave/LeaveDetails'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Details ',
                description:
                    'Manage holidays details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },

    // leave

    // leave

    {
        key: 'concepts.Organization.work-week',
        path: `${CONCEPTS_PREFIX_PATH}/organization/work-week`,
        component: lazy(() => import('@/views/concepts/organization/workweek')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

    // leave

    // PAYROLL

    {
        key: 'concepts.Organization.payroll-deductions',
        path: `${CONCEPTS_PREFIX_PATH}/organization/payroll-deductions`,
        component: lazy(
            () => import('@/views/concepts/organization/payrolldeductions'),
        ),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

    {
        key: 'concepts.Organization.payrolldeductionsCreate',
        path: `${CONCEPTS_PREFIX_PATH}/organization/payroll-deductions/create`,
        component: lazy(
            () =>
                import(
                    '@/views/concepts/organization/payrolldeductions/PayrolldeductionsCreate'
                ),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Create ',
                description:
                    'Manage holidays details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.Organization.payrolldeductionsEdit',
        path: `${CONCEPTS_PREFIX_PATH}/organization/payroll-deductions/edit/1`,
        component: lazy(
            () =>
                import(
                    '@/views/concepts/organization/payrolldeductions/PayrolldeductionsEdit'
                ),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Edit ',
                description:
                    'Manage holidays details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.Organization.payrolldeductionsDetails',
        path: `${CONCEPTS_PREFIX_PATH}/organization/payroll-deductions/details/1`,
        component: lazy(
            () =>
                import(
                    '@/views/concepts/organization/payrolldeductions/PayrolldeductionsDetails'
                ),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Details ',
                description:
                    'Manage holidays details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },

    // Payroll

    // status

    {
        key: 'concepts.Organization.status',
        path: `${CONCEPTS_PREFIX_PATH}/organization/status`,
        component: lazy(() => import('@/views/concepts/organization/status')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

    {
        key: 'concepts.Organization.statusCreate',
        path: `${CONCEPTS_PREFIX_PATH}/organization/status/create`,
        component: lazy(
            () => import('@/views/concepts/organization/status/StatusCreate'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Create ',
                description:
                    'Manage holidays details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.Organization.statusEdit',
        path: `${CONCEPTS_PREFIX_PATH}/organization/status/edit/1`,
        component: lazy(
            () => import('@/views/concepts/organization/status/StatusEdit'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Edit ',
                description:
                    'Manage holidays details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.Organization.statusDetails',
        path: `${CONCEPTS_PREFIX_PATH}/organization/status/details/1`,
        component: lazy(
            () => import('@/views/concepts/organization/status/StatusDetails'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Details ',
                description:
                    'Manage holidays details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },

    // status

    // stage

    {
        key: 'concepts.Organization.stage',
        path: `${CONCEPTS_PREFIX_PATH}/organization/stage`,
        component: lazy(() => import('@/views/concepts/organization/stage')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

    {
        key: 'concepts.Organization.stageCreate',
        path: `${CONCEPTS_PREFIX_PATH}/organization/stage/create`,
        component: lazy(
            () => import('@/views/concepts/organization/stage/StageCreate'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Create ',
                description:
                    'Manage holidays details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.Organization.stageEdit',
        path: `${CONCEPTS_PREFIX_PATH}/organization/stage/edit/1`,
        component: lazy(
            () => import('@/views/concepts/organization/stage/StageEdit'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Edit ',
                description:
                    'Manage holidays details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.Organization.stageDetails',
        path: `${CONCEPTS_PREFIX_PATH}/organization/stage/details/1`,
        component: lazy(
            () => import('@/views/concepts/organization/stage/StageDetails'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Details ',
                description:
                    'Manage holidays details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },

    // stage

    // Area

    {
        key: 'concepts.Organization.area',
        path: `${CONCEPTS_PREFIX_PATH}/organization/area`,
        component: lazy(() => import('@/views/concepts/organization/area')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

    {
        key: 'concepts.Organization.areaCreate',
        path: `${CONCEPTS_PREFIX_PATH}/organization/area/create`,
        component: lazy(
            () => import('@/views/concepts/organization/area/AreaCreate'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Create ',
                description:
                    'Manage holidays details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.Organization.areaEdit',
        path: `${CONCEPTS_PREFIX_PATH}/organization/area/edit/1`,
        component: lazy(
            () => import('@/views/concepts/organization/area/AreaEdit'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Edit ',
                description:
                    'Manage holidays details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.Organization.areaDetails',
        path: `${CONCEPTS_PREFIX_PATH}/organization/area/details/1`,
        component: lazy(
            () => import('@/views/concepts/organization/area/AreaDetails'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Details ',
                description:
                    'Manage holidays details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },

    // Area

    // Area status

    {
        key: 'concepts.Organization.areastatus',
        path: `${CONCEPTS_PREFIX_PATH}/organization/area-status`,
        component: lazy(
            () => import('@/views/concepts/organization/areastatus'),
        ),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },

    {
        key: 'concepts.Organization.areastatusCreate',
        path: `${CONCEPTS_PREFIX_PATH}/organization/area-status/create`,
        component: lazy(
            () =>
                import(
                    '@/views/concepts/organization/areastatus/AreastatusCreate'
                ),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Create ',
                description:
                    'Manage holidays details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.Organization.areastatusEdit',
        path: `${CONCEPTS_PREFIX_PATH}/organization/area-status/edit/1`,
        component: lazy(
            () =>
                import(
                    '@/views/concepts/organization/areastatus/AreastatusEdit'
                ),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Edit ',
                description:
                    'Manage holidays details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.Organization.areastatusDetails',
        path: `${CONCEPTS_PREFIX_PATH}/organization/area-status/details/1`,
        component: lazy(
            () =>
                import(
                    '@/views/concepts/organization/areastatus/AreastatusDetails'
                ),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Details ',
                description:
                    'Manage holidays details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },

    // Area status

    //old routes

    {
        key: 'concepts.ai.image',
        path: `${CONCEPTS_PREFIX_PATH}/ai/image`,
        component: lazy(() => import('@/views/concepts/ai/Image')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
            pageBackgroundType: 'plain',
        },
    },
    {
        key: 'concepts.customers.customerList',
        path: `${CONCEPTS_PREFIX_PATH}/customers/customer-list`,
        component: lazy(
            () => import('@/views/concepts/customers/CustomerList'),
        ),
        authority: [ADMIN, USER],
    },
    {
        key: 'concepts.customers.customerEdit',
        path: `${CONCEPTS_PREFIX_PATH}/customers/customer-edit/:id`,
        component: lazy(
            () => import('@/views/concepts/customers/CustomerEdit'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Edit customer',
                description:
                    'Manage customer details, purchase history, and preferences.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.customers.customerCreate',
        path: `${CONCEPTS_PREFIX_PATH}/customers/customer-create`,
        component: lazy(
            () => import('@/views/concepts/customers/CustomerCreate'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Create customer',
                description:
                    'Manage customer details, track purchases, and update preferences easily.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.customers.customerDetails',
        path: `${CONCEPTS_PREFIX_PATH}/customers/customer-details/:id`,
        component: lazy(
            () => import('@/views/concepts/customers/CustomerDetails'),
        ),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'concepts.products.productList',
        path: `${CONCEPTS_PREFIX_PATH}/products/product-list`,
        component: lazy(() => import('@/views/concepts/products/ProductList')),
        authority: [ADMIN, USER],
    },
    {
        key: 'concepts.products.productEdit',
        path: `${CONCEPTS_PREFIX_PATH}/products/product-edit/:id`,
        component: lazy(() => import('@/views/concepts/products/ProductEdit')),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Edit product',
                description:
                    'Quickly manage product details, stock, and availability.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.products.productCreate',
        path: `${CONCEPTS_PREFIX_PATH}/products/product-create`,
        component: lazy(
            () => import('@/views/concepts/products/ProductCreate'),
        ),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Create product',
                description:
                    'Quickly add products to your inventory. Enter key details, manage stock, and set availability.',
                contained: true,
            },
            footer: false,
        },
    },
    {
        key: 'concepts.projects.scrumBoard',
        path: `${CONCEPTS_PREFIX_PATH}/projects/scrum-board`,
        component: lazy(() => import('@/views/concepts/projects/ScrumBoard')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'concepts.projects.projectList',
        path: `${CONCEPTS_PREFIX_PATH}/projects/project-list`,
        component: lazy(() => import('@/views/concepts/projects/ProjectList')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
            pageBackgroundType: 'plain',
        },
    },
    {
        key: 'concepts.projects.projectDetails',
        path: `${CONCEPTS_PREFIX_PATH}/projects/project-details/:id`,
        component: lazy(
            () => import('@/views/concepts/projects/ProjectDetails'),
        ),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
            pageBackgroundType: 'plain',
        },
    },
    {
        key: 'concepts.projects.projectTasks',
        path: `${CONCEPTS_PREFIX_PATH}/projects/tasks`,
        component: lazy(() => import('@/views/concepts/projects/Tasks')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'concepts.projects.projectIssue',
        path: `${CONCEPTS_PREFIX_PATH}/projects/tasks/:id`,
        component: lazy(() => import('@/views/concepts/projects/Issue')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'concepts.orders.orderList',
        path: `${CONCEPTS_PREFIX_PATH}/orders/order-list`,
        component: lazy(() => import('@/views/concepts/orders/OrderList')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'concepts.orders.orderEdit',
        path: `${CONCEPTS_PREFIX_PATH}/orders/order-edit/:id`,
        component: lazy(() => import('@/views/concepts/orders/OrderEdit')),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Edit order',
                contained: true,
                description: 'Manage and track orders efficiently',
            },
            footer: false,
        },
    },
    {
        key: 'concepts.orders.orderCreate',
        path: `${CONCEPTS_PREFIX_PATH}/orders/order-create`,
        component: lazy(() => import('@/views/concepts/orders/OrderCreate')),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Create order',
                contained: true,
                description:
                    'Create new customer orders quickly and accurately',
            },
            footer: false,
        },
    },
    {
        key: 'concepts.orders.orderDetails',
        path: `${CONCEPTS_PREFIX_PATH}/orders/order-details/:id`,
        component: lazy(() => import('@/views/concepts/orders/OrderDetails')),
        authority: [ADMIN, USER],
        meta: {
            header: {
                contained: true,
                title: lazy(
                    () =>
                        import(
                            '@/views/concepts/orders/OrderDetails/components/OrderDetailHeader'
                        ),
                ),
                extraHeader: lazy(
                    () =>
                        import(
                            '@/views/concepts/orders/OrderDetails/components/OrderDetailHeaderExtra'
                        ),
                ),
            },
            pageContainerType: 'contained',
        },
    },
    {
        key: 'concepts.account.settings',
        path: `${CONCEPTS_PREFIX_PATH}/account/settings`,
        component: lazy(() => import('@/views/concepts/accounts/Settings')),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Settings',
            },
            pageContainerType: 'contained',
        },
    },
    {
        key: 'concepts.account.activityLog',
        path: `${CONCEPTS_PREFIX_PATH}/account/activity-log`,
        component: lazy(() => import('@/views/concepts/accounts/ActivityLog')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'concepts.account.rolesPermissions',
        path: `${CONCEPTS_PREFIX_PATH}/account/roles-permissions`,
        component: lazy(
            () => import('@/views/concepts/accounts/RolesPermissions'),
        ),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
            pageBackgroundType: 'plain',
        },
    },
    {
        key: 'concepts.account.pricing',
        path: `${CONCEPTS_PREFIX_PATH}/account/pricing`,
        component: lazy(() => import('@/views/concepts/accounts/Pricing')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'concepts.helpCenter.supportHub',
        path: `${CONCEPTS_PREFIX_PATH}/help-center/support-hub`,
        component: lazy(
            () => import('@/views/concepts/help-center/SupportHub'),
        ),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'gutterless',
            pageBackgroundType: 'plain',
        },
    },
    {
        key: 'concepts.helpCenter.article',
        path: `${CONCEPTS_PREFIX_PATH}/help-center/article/:id`,
        component: lazy(() => import('@/views/concepts/help-center/Article')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
            pageBackgroundType: 'plain',
        },
    },
    {
        key: 'concepts.helpCenter.editArticle',
        path: `${CONCEPTS_PREFIX_PATH}/help-center/edit-article/:id`,
        component: lazy(
            () => import('@/views/concepts/help-center/EditArticle'),
        ),
        authority: [ADMIN, USER],
        meta: {
            pageBackgroundType: 'plain',
            footer: false,
        },
    },
    {
        key: 'concepts.helpCenter.manageArticle',
        path: `${CONCEPTS_PREFIX_PATH}/help-center/manage-article`,
        component: lazy(
            () => import('@/views/concepts/help-center/ManageArticle'),
        ),
        authority: [ADMIN, USER],
        meta: {
            pageBackgroundType: 'plain',
            footer: false,
        },
    },
    {
        key: 'concepts.calendar',
        path: `${CONCEPTS_PREFIX_PATH}/calendar`,
        component: lazy(() => import('@/views/concepts/calendar/Calendar')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
            pageBackgroundType: 'plain',
        },
    },
    {
        key: 'concepts.fileManager',
        path: `${CONCEPTS_PREFIX_PATH}/file-manager`,
        component: lazy(() => import('@/views/concepts/files/FileManager')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
            pageBackgroundType: 'plain',
        },
    },
    {
        key: 'concepts.mail',
        path: `${CONCEPTS_PREFIX_PATH}/mail`,
        component: lazy(() => import('@/views/concepts/mail/Mail')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'concepts.chat',
        path: `${CONCEPTS_PREFIX_PATH}/chat`,
        component: lazy(() => import('@/views/concepts/chat/Chat')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
]

export default conceptsRoute

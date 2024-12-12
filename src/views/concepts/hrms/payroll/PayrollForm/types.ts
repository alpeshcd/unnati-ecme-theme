import type { Control, FieldErrors } from 'react-hook-form'

export type OverviewFields = {
    employee: number
    amount: string
    fixed_deduction: string
    effective_date: string
    is_active: boolean
    is_latest: boolean
    payroll_type:number
    payroll_exist:boolean
}

export type AddressFields = {
    country: string
    address: string
    postcode: string
    city: string
}

export type ProfileImageFields = {
    img: string
}

export type TagsFields = {
    tags: Array<{ value: string; label: string }>
}

export type AccountField = {
    banAccount?: boolean
    accountVerified?: boolean
}

export type CustomerFormSchema = OverviewFields 
  

export type FormSectionBaseProps = {
    control: Control<CustomerFormSchema>
    errors: FieldErrors<CustomerFormSchema>
}

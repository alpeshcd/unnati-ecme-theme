import type { Control, FieldErrors } from 'react-hook-form'

export type OverviewFields = {
    first_name: string;
    last_name: string;
    address: string;
    phone: string;
    referral_type: number;
    referral_consultant_company?: number;
    referral_customer?: number;
    whatsapp_no: string;
    email: string;
    gender: string;
    id?: number;
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

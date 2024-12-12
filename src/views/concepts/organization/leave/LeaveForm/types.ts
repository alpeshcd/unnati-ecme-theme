import type { Control, FieldErrors } from 'react-hook-form'

export type OverviewFields = {
    name: string;
    annual_balance: number;
    is_entitlement_situational: string;
    is_carry_forward: string;
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
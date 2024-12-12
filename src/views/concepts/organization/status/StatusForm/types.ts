import type { Control, FieldErrors } from 'react-hook-form'

export type OverviewFields = {
    display_name: string;
    name: string;
    order: number;
    status: "In Progress" | "Incomplete" | "Complete";
    is_start: boolean;
    is_end: boolean;   

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

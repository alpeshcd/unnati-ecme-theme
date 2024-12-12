import { useMemo } from 'react'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import Select, { Option as DefaultOption } from '@/components/ui/Select'
import Avatar from '@/components/ui/Avatar'
import { FormItem } from '@/components/ui/Form'
import NumericInput from '@/components/shared/NumericInput'
import { countryList } from '@/constants/countries.constant'
import { Controller } from 'react-hook-form'
import { components } from 'react-select'
import type { FormSectionBaseProps } from './types'
import type { ControlProps, OptionProps } from 'react-select'

type OverviewSectionProps = FormSectionBaseProps

type CountryOption = {
    label: string
    dialCode: string
    value: string
}

const { Control } = components

const CustomSelectOption = (props: OptionProps<CountryOption>) => {
    return (
        <DefaultOption<CountryOption>
            {...props}
            customLabel={(data) => (
                <span className="flex items-center gap-2">
                    <Avatar
                        shape="circle"
                        size={20}
                        src={`/img/countries/${data.value}.png`}
                    />
                    <span>{data.dialCode}</span>
                </span>
            )}
        />
    )
}

const CustomControl = ({ children, ...props }: ControlProps<CountryOption>) => {
    const selected = props.getValue()[0]
    return (
        <Control {...props}>
            {selected && (
                <Avatar
                    className="ltr:ml-4 rtl:mr-4"
                    shape="circle"
                    size={20}
                    src={`/img/countries/${selected.value}.png`}
                />
            )}
            {children}
        </Control>
    )
}

const OverviewSection = ({ control, errors }: OverviewSectionProps) => {
    const dialCodeList = useMemo(() => {
        const newCountryList: Array<CountryOption> = JSON.parse(
            JSON.stringify(countryList),
        )

        return newCountryList.map((country) => {
            country.label = country.dialCode
            return country
        })
    }, [])

    return (
        <Card>
        <h4 className="mb-6">Overview</h4>
        <div className="grid md:grid-cols-2 gap-4">
            <FormItem
                label="First Name"
                invalid={Boolean(errors.first_name)}
                errorMessage={errors.first_name?.message}
            >
                <Controller
                    name="first_name"
                    control={control}
                    render={({ field }) => (
                        <Input
                            type="text"
                            autoComplete="off"
                            placeholder="First Name"
                            {...field}
                        />
                    )}
                />
            </FormItem>
            <FormItem
                label="last_name"
                invalid={Boolean(errors.last_name)}
                errorMessage={errors.last_name?.message}
            >
                <Controller
                    name="last_name"
                    control={control}
                    render={({ field }) => (
                        <Input
                            type="text"
                            autoComplete="off"
                            placeholder="Last Name"
                            {...field}
                        />
                    )}
                />
            </FormItem>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
            <FormItem
                label="address"
                invalid={Boolean(errors.address)}
                errorMessage={errors.address?.message}
            >
                <Controller
                    name="address"
                    control={control}
                    render={({ field }) => (
                        <Input
                            type="text"
                            autoComplete="off"
                            placeholder="address"
                            {...field}
                        />
                    )}
                />
            </FormItem>
            <FormItem
                label="phone"
                invalid={Boolean(errors.phone)}
                errorMessage={errors.phone?.message}
            >
                <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => (
                        <Input
                            type="number"
                            autoComplete="off"
                            placeholder="phone"
                            {...field}
                        />
                    )}
                />
            </FormItem>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
            <FormItem
                label="email"
                invalid={Boolean(errors.email)}
                errorMessage={errors.email?.message}
            >
                <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                        <Input
                            type="email"
                            autoComplete="off"
                            placeholder="email"
                            {...field}
                        />
                    )}
                />
            </FormItem>
            <FormItem
                label="phone"
                invalid={Boolean(errors.whatsapp_no)}
                errorMessage={errors.whatsapp_no?.message}
            >
                <Controller
                    name="whatsapp_no"
                    control={control}
                    render={({ field }) => (
                        <Input
                            type="number"
                            autoComplete="off"
                            placeholder="whatsapp_no"
                            {...field}
                        />
                    )}
                />
            </FormItem>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
            <FormItem
                label="gender"
                invalid={Boolean(errors.gender)}
                errorMessage={errors.gender?.message}
            >
                <Controller
                    name="gender"
                    control={control}
                    render={({ field }) => (
                        <Input
                            type="gender"
                            autoComplete="off"
                            placeholder="gender"
                            {...field}
                        />
                    )}
                />
            </FormItem>
           
        </div>
        {/* <div className="flex items-end gap-4 w-full">
            <FormItem
                invalid={
                    Boolean(errors.referral_type) 
                }
            >
                <label className="form-label mb-2">referral_type</label>
                <Controller
                    name="referral_type"
                    control={control}
                    render={({ field }) => (
                        <Select<CountryOption>
                            options={referral_type}
                            {...field}
                            className="w-[150px]"
                            components={{
                                Option: CustomSelectOption,
                                Control: CustomControl,
                            }}
                            placeholder=""
                            value={dialCodeList.filter(
                                (option) => option.dialCode === field.value,
                            )}
                            onChange={(option) =>
                                field.onChange(option?.dialCode)
                            }
                        />
                    )}
                />
            </FormItem>
            <FormItem
                invalid={
                    Boolean(errors.referral_consultant_company) 
                }
            >
                <label className="form-label mb-2">referral_consultant_company</label>
                <Controller
                    name="referral_consultant_company"
                    control={control}
                    render={({ field }) => (
                        <Select<CountryOption>
                            options={referral_consultant_company}
                            {...field}
                            className="w-[150px]"
                            components={{
                                Option: CustomSelectOption,
                                Control: CustomControl,
                            }}
                            placeholder=""
                            value={dialCodeList.filter(
                                (option) => option.dialCode === field.value,
                            )}
                            onChange={(option) =>
                                field.onChange(option?.dialCode)
                            }
                        />
                    )}
                />
            </FormItem>
           
        </div> */}
    </Card>
    )
}

export default OverviewSection

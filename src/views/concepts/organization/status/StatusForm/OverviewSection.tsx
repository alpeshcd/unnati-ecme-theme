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
import { Switcher } from '@/components/ui'

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
                    label="Name"
                    invalid={Boolean(errors.name)}
                    errorMessage={errors.name?.message}
                >
                    <Controller
                        name="name"
                        control={control}
                        render={({ field }) => (
                            <Input
                                type="text"
                                autoComplete="off"
                                placeholder=" Name"
                                {...field}
                            />
                        )}
                    />
                </FormItem>
                <FormItem
                    label="display_name"
                    invalid={Boolean(errors.display_name)}
                    errorMessage={errors.display_name?.message}
                >
                    <Controller
                        name="display_name"
                        control={control}
                        render={({ field }) => (
                            <Input
                                type="text"
                                autoComplete="off"
                                placeholder="display_name"
                                {...field}
                            />
                        )}
                    />
                </FormItem>
            </div>
            <FormItem
                label="order"
                invalid={Boolean(errors.order)}
                errorMessage={errors.order?.message}
            >
                <Controller
                    name="order"
                    control={control}
                    render={({ field }) => (
                        <Input
                            type="number"
                            autoComplete="off"
                            placeholder="order"
                            {...field}
                        />
                    )}
                />
            </FormItem>
            <div className="grid md:grid-cols-2 gap-4">
                <FormItem
                    label="is_start"
                    invalid={Boolean(errors.is_start)}
                    errorMessage={errors.is_start?.message}
                >
                    <Controller
                        name="is_start"
                        control={control}
                        render={({ field }) => (
                            <Switcher
                                // checked={field.value} // Assuming field.value is a boolean (true/false)
                                onChange={(checked) => field.onChange(checked)} // Update the field with the new value
                                // label={field.value ? "Active" : "Inactive"} // Optional: Show label based on value
                            />
                        )}
                    />
                </FormItem>
                <FormItem
                    label="is_end"
                    invalid={Boolean(errors.is_end)}
                    errorMessage={errors.is_end?.message}
                >
                    <Controller
                        name="is_end"
                        control={control}
                        render={({ field }) => (
                            <Switcher
                                // checked={field.value} // Assuming field.value is a boolean (true/false)
                                onChange={(checked) => field.onChange(checked)} // Update the field with the new value
                                // label={field.value ? "Active" : "Inactive"} // Optional: Show label based on value
                            />
                        )}
                    />
                </FormItem>
            </div>
        </Card>
    )
}

export default OverviewSection

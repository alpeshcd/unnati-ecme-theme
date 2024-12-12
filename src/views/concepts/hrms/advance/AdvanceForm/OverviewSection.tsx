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
                    label="lending_amount"
                    invalid={Boolean(errors.lending_amount)}
                    errorMessage={errors.lending_amount?.message}
                >
                    <Controller
                        name="lending_amount"
                        control={control}
                        render={({ field }) => (
                            <Input
                                type="text"
                                autoComplete="off"
                                placeholder="lending_amount"
                                {...field}
                            />
                        )}
                    />
                </FormItem>
                <FormItem
                    label="amount_pending"
                    invalid={Boolean(errors.amount_pending)}
                    errorMessage={errors.amount_pending?.message}
                >
                    <Controller
                        name="amount_pending"
                        control={control}
                        render={({ field }) => (
                            <Input
                                type="text"
                                autoComplete="off"
                                placeholder="amount_pending"
                                {...field}
                            />
                        )}
                    />
                </FormItem>
            </div>

            <div className="flex items-end gap-4 w-full">
                {/* <FormItem
                    invalid={
                        Boolean(errors.employee)
                    }
                >
                    <label className="form-label mb-2">employee</label>
                    <Controller
                        name="dialCode"
                        control={control}
                        render={({ field }) => (
                            <Select<CountryOption>
                                options={employee}
                                {...field}
                                className="w-[150px]"
                                components={{
                                    Option: CustomSelectOption,
                                    Control: CustomControl,
                                }}
                                placeholder=""
                                value={employee.filter(
                                    (option) => option.employee === field.value,
                                )}
                                onChange={(option) =>
                                    field.onChange(option?.employee)
                                }
                            />
                        )}
                    />
                </FormItem> */}

                <FormItem
                    label="is_active"
                    invalid={Boolean(errors.is_active)}
                    errorMessage={errors.is_active?.message}
                >
                    <Controller
                        name="is_active"
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

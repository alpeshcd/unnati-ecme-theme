import { cloneElement } from 'react'
import type { CommonProps } from '@/@types/common'

type SideProps = CommonProps

const Side = ({ children, ...rest }: SideProps) => {
    return (
        <div className="flex h-full  bg-white dark:bg-gray-800">
            <div className=" flex flex-col justify-center items-center flex-1">
                <div className="w-full xl:max-w-[450px] px-8 max-w-[380px]">
                    {children
                        ? cloneElement(children as React.ReactElement, {
                              ...rest,
                          })
                        : null}
                </div>
            </div>
            <div className="py-6 px-10 lg:flex  items-center flex-col flex-1 justify-center hidden   relative max-w-[900px] 2xl:max-w-[900px] bg-[#FC4305]">
                <img
                    src="/img/others/auth-side-bg.png"
                    className=""
                />
            </div>
        </div>
    )
}

export default Side

import { memo, useState } from "react"
import type { ReactNode } from "react"
import './component.css'
interface accordianComp {
    key: number,
    title?: string,
    component?: ReactNode
}

interface AccordianPropType {
    accordianComps: accordianComp[]
}

const Accordian = (props: AccordianPropType) => {
    const [activeIndex, setActiveIndex] = useState<number>(0)
    const { accordianComps } = props

    // const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    //     // never derive business logic from DOM
    //     const clickedIndex = e.currentTarget.dataset.key;
    //     setActiveIndex(Number(clickedIndex))
    // }

    return accordianComps.map((value) => {
        return (
            <div key={value.key} data-key={value.key} className="accordianWrapper" onClick={() => {
                setActiveIndex(value.key)
            }} >
                {/* <h3 aria-label='accordian title'>{value.title}</h3> */}
                <h3>
                    <button
                        aria-expanded={activeIndex === value.key}
                        aria-controls={`section-${value.key}`}
                        id={`header-${value.key}`}
                    >
                        {value.title}
                    </button>
                </h3>
                {/* {activeIndex === value.key ? <span aria-label='accordian component'>
                    {value.component}
                </span> : null} */}

                <div
                    id={`section-${value.key}`}
                    role="region"
                    aria-labelledby={`header-${value.key}`}
                    hidden={activeIndex !== value.key}
                >
                    {value.component}
                </div>
            </div>
        )
    })
}

export default memo(Accordian)
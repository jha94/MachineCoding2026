import { useState } from 'react';
import './component.css';
import { carousalComps } from '../components/componentConst'

type direction = 'forward' | 'backward'

const Carousal = () => {
    const [activeIndex, setActiveIndex] = useState<number>(1);

    const handleClick = (direction: direction) => {
        setActiveIndex(direction === 'forward' ? activeIndex + 1 : activeIndex - 1)
    }

    return (
        <div className='carousal'>
            <button disabled={activeIndex === 1} onClick={() => handleClick('backward')} >Backward</button>
            <p>{carousalComps[activeIndex - 1].name}</p>
            <button disabled={activeIndex === carousalComps.length} onClick={() => handleClick('forward')}>Forward</button>
        </div>
    )
}

export default Carousal
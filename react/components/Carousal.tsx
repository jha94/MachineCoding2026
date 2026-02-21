import { useState } from 'react';
import './component.css';
import { carousalComps } from '../components/componentConst'

type direction = 'forward' | 'backward'

const Carousal = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    // const handleClick = (direction: direction) => {
    //     setActiveIndex((prev) => direction === 'forward' ? prev + 1 : prev - 1)
    // }

    // useEffect(() => {
    //     const handleKeyDown = (event: KeyboardEvent) => {
    //         if (event.key === 'ArrowRight' && activeIndex !== carousalComps.length) {
    //             handleClick('forward')
    //         } else if (event.key === 'ArrowLeft' && activeIndex !== 1) {
    //             handleClick('backward')
    //         }
    //     }
    //     window.addEventListener('keydown', handleKeyDown)
    //     return () => window.removeEventListener('keydown', handleKeyDown)
    // }, [activeIndex])

    // useEffect(() => {
    //     const handleKeyDown = (event: KeyboardEvent) => {
    //         setActiveIndex((prev) => {
    //             if (event.key === 'ArrowRight' && prev < carousalComps.length) {
    //                 return prev + 1
    //             } else if (event.key === 'ArrowLeft' && prev > 1) {
    //                 return prev - 1
    //             }
    //             return prev
    //         })
    //     }
    //     window.addEventListener('keydown', handleKeyDown)
    //     return () => window.removeEventListener('keydown', handleKeyDown)
    // }, [])


    const move = (direction: direction) => {
        setActiveIndex(prev => {
            const next =
                direction === 'forward' ? prev + 1 : prev - 1;
            return Math.min(
                Math.max(next, 0),
                carousalComps.length - 1
            );
        });
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'ArrowRight') move('forward');
        if (event.key === 'ArrowLeft') move('backward');
    }

    return (
        <div
            className='carousal'
            tabIndex={0}
            onKeyDown={handleKeyDown}>
            <button disabled={activeIndex === 0} onClick={() => move('backward')} >Backward</button>
            <p>{carousalComps[activeIndex]?.name}</p>
            <button disabled={activeIndex === carousalComps.length - 1} onClick={() => move('forward')}>Forward</button>
        </div>
    )
}

export default Carousal

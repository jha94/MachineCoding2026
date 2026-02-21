import { useState, useEffect } from 'react'
import './component.css'

interface toastPropsType {
    message: string,
    duration?: number,
    position?: 'bottom' | 'top',
    type?: 'success' | 'err'
}

const Toast = (props: toastPropsType) => {
    const [displayAlert, setDisplayAlert] = useState<boolean>(true)
    const { message, duration = 3000, position = 'top', type = 'success' } = props;

    useEffect(() => {
        if (duration <= 0) return
        let timer = setTimeout(() => {
            setDisplayAlert(false)
        }, duration)
        return () => clearTimeout(timer)
    }, [duration, message])

    useEffect(() => {
        setDisplayAlert(true)
    }, [message])

    if (!displayAlert) return null

    return <div role='alert' aria-live={type === 'err' ? 'assertive' : 'polite'} className={`toastWrapper toast-${position} toast-${type}`} >
        {message}
        <button className='toast-close' onClick={() => setDisplayAlert(false)} >╳</button>
    </div>
}

export default Toast
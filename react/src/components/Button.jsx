const Button = (props) => {
    const {text, handleClick, isDisabled, isLoading, variant} = props
    return (
        <button onClick={handleClick} disabled={isDisabled||isLoading} className={`${variant}`} >{text}</button>
    )
}

export default Button
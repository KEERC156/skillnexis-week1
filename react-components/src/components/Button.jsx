function Button({ children, onClick, type = 'button', variant = 'primary', disabled = false }) {
  const variantClass = variant === 'secondary' ? ' ui-button--secondary' : ''

  return (
    <button
      className={`ui-button${variantClass}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button

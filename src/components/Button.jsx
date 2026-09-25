export const Button = ({ className = '', size = 'default', children, ...props }) => {
  const baseClasses =
    'neo relative overflow-hidden rounded-full font-medium bg-primary text-primary-foreground transition-all duration-200 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'

  const pressedClasses =
    'active:shadow-[inset_3px_3px_6px_var(--color-shadow-dark),inset_-3px_-3px_6px_var(--color-shadow-light)]'

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    default: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const classes = `${baseClasses} ${pressedClasses} ${sizeClasses[size] || sizeClasses.default} ${className}`

  return (
    <button type="button" className={classes} {...props}>
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  )
}
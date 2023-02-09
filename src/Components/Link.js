import useNavigation from '../hooks/use-navigation'
import classNames from 'classnames'

function Link({ to, children, className, activeClassName }) {
    const { navigate, currentPath } = useNavigation()

    const isCurrentPath = currentPath===to
    const classes = classNames(
        className,
        'text-blue-500',
        isCurrentPath && activeClassName
    )

    const handleClick = (event)=>{
        if(event.ctrlKey||event.metaKey) {
            return;
        }
        event.preventDefault()
        navigate(to)
    }
    return (
        <a 
            className={classes} 
            onClick={handleClick} 
            href={to}
        >
            {children}
        </a>
    )
}

export default Link

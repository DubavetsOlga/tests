type LinkProps = {
    onClick?: () => void
    href?: string
    children: any
}

export const Link = ({ onClick, href, children }: LinkProps) => {

    return (
        <a href={href} target="_blank" onClick={onClick}>{children}</a>
    )
}

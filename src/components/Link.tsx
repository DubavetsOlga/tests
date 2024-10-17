type LinkProps = {
    title: string,
    onClick?: () => void
    href?: string
}

export const Link = ({ title, onClick, href }: LinkProps) => {

    return (
        <a href={href} target="_blank" onClick={onClick}>{title}</a>
    )
}

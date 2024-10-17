type LinkProps = {
    title: string,
    onClick: () => void
}

export const Link = ({ title, onClick }: LinkProps) => {
    return (
        <a onClick={() => onClick()}>{title}</a>
    )
}

import { memo } from "react"

type LinkProps = {
    onClick?: () => void
    href?: string
    children: any
}

export const Link = memo(({ onClick, href, children }: LinkProps) => {
    return (
        <a href={href} target="_blank" onClick={onClick} style={{ display: "flex" }}>
            {children}
        </a>
    )
})

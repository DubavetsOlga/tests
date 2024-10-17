import styled from "styled-components"

type ButtonProps = {
    title: string
    onClick: () => void
    disabled?: boolean
}

export const Button = ({ title, onClick, disabled }: ButtonProps) => {
    return (
        <StyledButton disabled={disabled} isdisabled={disabled} onClick={onClick}>{title}</StyledButton>
    )
}

const StyledButton = styled.button<{isdisabled?: boolean}>`
    border-radius: 8px;
    padding: 4px 10px;
    border: none;
    color: #b18742;
    font-weight: bold;
    cursor: ${props => props.disabled ? "default" : "pointer"};

    &:hover {
        background-color: ${props => props.disabled ? "none" : "antiquewhite"};
    }
`

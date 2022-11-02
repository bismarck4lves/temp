import styled from "styled-components";
import colors from "../../styles/pallete"

interface ContainerProps {
    s1: boolean
}
export const Container =  styled.div<ContainerProps>`
    width: 100%;
    padding: ${props => props.s1 ? '8px 16px' : '45px'};
    border-bottom: 1px solid ${colors.gray};
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid ${colors.blue};
`
import Logo from './Logo'
import Profile from "./Profile"
import {Container} from "./Container"

export function Toolbar () {
    const foo = {}

    return (
        <Container s1={false}>
            <Logo/>
            <Profile/>
        </Container>
    )
}

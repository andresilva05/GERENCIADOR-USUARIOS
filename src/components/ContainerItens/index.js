import React from "react";

import {ContainerItens as Container} from './styles'
 
function ContainerItens(props,isBlur) {
    return <Container isBlur={isBlur}>{props.children}</Container>
}

export default ContainerItens
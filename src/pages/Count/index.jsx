
import { useContext } from 'react';
import { ContadorContext } from '../../contexts/Contador';
import { MainButton, Legenda, Container } from './style';
const Count = () => {

    const { contador, addContador } = useContext(ContadorContext)
    function handle(event) {
        addContador(contador)
    }

    return (
        <Container>
            <Legenda>
                <MainButton onClick={(handle)}> +1</MainButton>
            </Legenda>
        </Container>
    );
}

export default Count
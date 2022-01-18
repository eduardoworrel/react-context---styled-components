import { useContext } from 'react';
import { Container,Legenda } from './style';
import { ContadorContext } from '../../contexts/Contador';

const Home = () => {
    const { contador } = useContext(ContadorContext);
    return (
        <>
            <Container>
                <Legenda>
                    {contador}
                </Legenda>
            </Container>
        </>
    );
}

export default Home
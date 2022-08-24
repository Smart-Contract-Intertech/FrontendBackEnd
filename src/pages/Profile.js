import miras1 from './image/miras1.png';
import miras2 from './image/miras2.png';
import Container from 'react-bootstrap/Container';

export default function Profile(){
    return(
        <Container>
            <br/><br/><br/><br/><br/><img src={miras1} alt="" width="500" height="350"></img><br/><br/><br/><br/><br/>
            <img src={miras2} alt="" width="500" height="350"></img><br/><br/><br/><br/><br/><br/><br/>
        </Container>
    )
}
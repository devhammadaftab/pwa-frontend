import SearchBox from 'components/search';
import Results from 'components/results';
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

interface Props { }

const Home: React.FC<Props> = () => {
    return (
        <Container>
            <Row style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <SearchBox height='40px' width='400px' />
            </Row>
            <Row>
                <Col>
                    <Results />
                </Col>
            </Row>
        </Container>
    )
}

export default Home

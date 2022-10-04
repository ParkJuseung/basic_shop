import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  return (
    <div className="App">

      {/*네비게이션 바 */}
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Travel</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* 메인 사진 */}
      <div className='bg_img'/>

      {/* 목록 */}
      <Container>
      <Row>
        <Col xs>
          <img src="/ocean.jpg" width="80%"/>
          <h1>바닷가</h1>
          <p>맑고 투명한 바다</p>
        </Col>
        <Col xs={{ order: 12 }}>Second, but last</Col>
        <Col xs={{ order: 1 }}>Third, but second</Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;

//importing ract use state and countryinformantion from countryinfo file
import React, { useState} from 'react';
import CountryInformation from './components/CountryInfo';


// importing all bootstrap elements used
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import "bootstrap/dist/css/bootstrap.min.css";



function App(props){

    //declaring const variables for the popup modal and country infomation display 
    const [modalShow, setModalShow] = React.useState(false);
    const [country, setCountry] = useState(null);
    const [name, setName] = useState(null);
    //function for button to retrieve country info and make modal show
    const callClick = () => {
        retrieveCountry(setCountry, name);
         setModalShow(true);
    };
    //function to hide modal
    const closeModal = () => {
      setModalShow(false);
    };
    return (
      <div className="App">
        <header>
      {/* navbar header  */}
        <Navbar  className="bg-body-tertiary ">
      <Container>
        <Navbar.Brand href="#home">RestCountries</Navbar.Brand>
         
      </Container>
    </Navbar>
        </header>
        <Container className= "sd-flex justify-content-center align-items-center" style={{height: '30vh'}}>
        <Row>
          {/* container with background image of world map */}
          <Col className='text-center'>
          <Image src="https://images.desenio.com/zoom/7314_2.jpg" fluid />
          </Col>
        </Row>
        </Container>
        {/* container with classname to align button and search bar to screen center  */}
        <Container className= "sd-flex justify-content-center align-items-center" style={{height: '60vh'}}>
        <Row>
          <Col className='text-center'>
          
          {/* searchbar  and button code */}
          <input
              type="text"
              onChange={(text) => setName(text.target.value)}
        /> 
        
            <Button variant="dark" onClick={callClick} 
            type="submit">Search</Button>
            {/* searchbar and button code^ */}
          </Col>
        </Row>
        </Container>
    <Modal
    //modal code (this is where the country information is displayed ))
     show={modalShow}
     onHide={closeModal}
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          {/* calls countryinfo file to display the country information */}
        {country && <CountryInformation country={country} />}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={closeModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  
 
        <footer className = "py-5 my-5 bg-dark">
          <Container className = "px-4">
            <p className = "text-center text-white">By David Barcut</p>
          </Container>
        </footer>
      </div>
    );
};

//function to retrieve the information of the desired country
function retrieveCountry(setCountry, name) {
 
    return fetch('http://localhost:8080/country/' + name, {
      method: "GET"
      })
      .then( 
            resp => {
            if (!resp.ok) {
                throw `Server error: [${resp.status}] [${resp.statusText}] [${resp.url}]`;
            }
            return resp.json();
          })
      .then(json => {
        setCountry(json); })
      .catch(error => console.error(error));
  }


export default App;

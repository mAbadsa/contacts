import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Audience from "./components/Audience";
import Contacts from "./components/Contacts";
import "./App.css";

function App() {
  const [contactsNumber, setContactsNumber] = useState(0);
  const handleContactsNumber = (value: number) => {
    setContactsNumber(value);
  };
  return (
    <Container className="pt-2">
      <Row className="overflow-hidden border border-2">
        <Audience contactsNumber={contactsNumber} />
        <Contacts setContactsNumber={handleContactsNumber} />
      </Row>
    </Container>
  );
}

export default App;

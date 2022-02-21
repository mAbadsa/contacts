import { FC } from "react";
import { Col } from "react-bootstrap";
import Header from "./Header";
import AudienceType from "./Audience.type";
import "./styles.css";

const Audience: FC<AudienceType> = ({ contactsNumber }) => {
  return (
    <Col className="audience p-3" sm="3" md="3" lg="3">
      <Header contactsNumber={contactsNumber} />
    </Col>
  );
};

export default Audience;

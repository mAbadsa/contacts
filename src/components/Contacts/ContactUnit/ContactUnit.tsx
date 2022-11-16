import { FC } from "react";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

import Button from "../../Button";
import UserCard from "../../UserCard";

import ContactUnitType from "./ContactUnit.type";
import "./styles.css";

const ContactUnit: FC<ContactUnitType> = ({
  id,
  phoneNumber,
  name,
  img,
  selectedContacts,
  setSelectContact,
}) => {
  return (
    <Row className="justify-content-between py-2">
      <UserCard
        phoneNumber={phoneNumber}
        name={name}
        img={img}
        id={id}
        selectedContacts={selectedContacts}
        setSelectContact={setSelectContact}
      />
      <Col
        className="d-flex justify-content-end align-items-center"
        sm="6"
        md="6"
        lg="6"
      >
        <Button shape="circle" variant="success">
          <FontAwesomeIcon icon={faAdd} />
        </Button>
      </Col>
    </Row>
  );
};

export default ContactUnit;


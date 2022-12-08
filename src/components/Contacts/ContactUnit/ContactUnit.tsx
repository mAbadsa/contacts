import type { FC } from "react";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";

import Button from "../../Button";
import UserCard from "../../UserCard";

import type ContactUnitType from "./ContactUnit.type";
import "./styles.css";

const ContactUnit: FC<ContactUnitType> = ({
  id,
  phoneNumber,
  name,
  img,
  selectedContacts,
  setSelectContact,
}) => (
  <Row
    className="justify-content-between py-2"
    data-testid={`contactunit-${id}`}
  >
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
        <FontAwesomeIcon icon={faAdd as IconProp} />
      </Button>
    </Col>
  </Row>
);

export default ContactUnit;


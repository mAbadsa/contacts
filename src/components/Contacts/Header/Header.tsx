import { FC } from "react";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import Button from "../../Button";
import HeaderType from "./Header.type";
import "./styles.css";

const Header: FC<HeaderType> = () => {
  return (
    <Row>
      <Col sm="6" md="6" lg="6">
        All Contacts(100)
      </Col>
      <Col
        className="d-flex justify-content-end"
        sm="6"
        md="6"
        lg="6"
        justify-content="flex-end"
      >
        <Button shape="circle" variant="success">
          <FontAwesomeIcon icon={faAdd as IconProp} />
        </Button>
      </Col>
    </Row>
  );
};

export default Header;


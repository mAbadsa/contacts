import { ChangeEvent, FC, useState, useEffect, useContext } from "react";
import { debounce } from "lodash";
import { Row, Col, Form, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { AuthContext } from "../../context/Authentication";

import SearchType from "./Search.type";
import "./styles.css";

const Search: FC<SearchType> = ({ search }) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const { token } = useContext<{ token: string }>(AuthContext);

  const debouncedSearch = debounce(async (value: string) => {
    search(value);
  }, 300);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(evt.target.value);
  };

  useEffect(() => {
    !!token && debouncedSearch(searchValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  return (
    <Row>
      <Col sm="12">
        <InputGroup className="my-3 position-relative">
          <FontAwesomeIcon
            className="icon position-absolute text-secondary"
            icon={faMagnifyingGlass}
          />
          <Form.Control
            className="serach-input bg-secondary rounded py-2"
            type="search"
            placeholder="Search contacts"
            value={searchValue}
            onChange={handleChange}
          />
        </InputGroup>
      </Col>
    </Row>
  );
};

export default Search;


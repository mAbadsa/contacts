/* eslint-disable */

import type { ChangeEvent, FC } from 'react';
import { useState, useEffect, useContext } from 'react';
import { debounce } from 'lodash';
import { Row, Col, Form, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

import { AuthContext } from '../../context/Authentication';

import type SearchType from './Search.type';
import './styles.css';

const Search: FC<SearchType> = ({ search }) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const { token } = useContext<{ token: string }>(AuthContext);

  const debouncedSearch = debounce(async (value: string) => {
    search(value);
  }, 300);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(evt.target.value);
  };

  useEffect(() => {
    Boolean(token) && debouncedSearch(searchValue);
  }, [searchValue]);

  return (
    <Row>
      <Col sm='12'>
        <InputGroup className='my-3 position-relative'>
          <FontAwesomeIcon
            className='icon position-absolute text-secondary'
            icon={faMagnifyingGlass as IconProp}
          />
          <Form.Control
            className='serach-input bg-secondary rounded py-2'
            type='search'
            placeholder='Search contacts'
            value={searchValue}
            onChange={handleChange}
          />
        </InputGroup>
      </Col>
    </Row>
  );
};

export default Search;

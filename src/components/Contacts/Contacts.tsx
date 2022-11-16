/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useState, useEffect, useContext, useReducer } from "react";
import Axios, { AxiosResponse } from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { Col, Spinner, Alert } from "react-bootstrap";

import Header from "./Header";
import Search from "../Search";
import ActionComponent from "./Action";
import { AuthContext } from "../../context/Authentication";
import ContactsContainer from "./ContactsContainer/ContactsContainer";

import ContactsType from "./Contacts.type";

import "./styles.css";

type State = {
  contacts: Array<{ [key: string]: any }>;
  totalCount: number;
  isLoading: Boolean;
  selectedContact: Array<{ [key: string]: any }>;
  error: string;
  searchResult: Array<any>;
};

type Action = { type: string; payload?: any };

function contactsReducer(state: State, action: Action): State {
  const { type, payload } = action;

  switch (type) {
    case "fetch_contacts":
      return {
        ...state,
        contacts: payload.contacts,
        totalCount: payload.totalCount,
        isLoading: false,
      };
    case "select_all_contacts":
      return {
        ...state,
        selectedContact: payload,
        isLoading: false,
      };
    case "unselect_all_contacts":
      return {
        ...state,
        selectedContact: payload,
        isLoading: false,
      };
    case "select_contact":
      return {
        ...state,
        selectedContact: [...state.selectedContact, payload],
        isLoading: false,
      };
    case "unselect_contact":
      return {
        ...state,
        selectedContact: payload,
        isLoading: false,
      };

    case "contacts_search":
      return {
        ...state,
        searchResult: payload,
      };
    case "fetch_contacts_falid":
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
}

const Contacts: FC<ContactsType> = ({ setContactsNumber }) => {
  const [state, dispatch] = useReducer(contactsReducer, {
    contacts: [],
    totalCount: 0,
    isLoading: true,
    selectedContact: [],
    error: "",
    searchResult: [],
  });

  const [limit, setLimit] = useState<number>(10);
  const [hasMore, setHasMore] = useState(true);

  const { token } = useContext<{ token: string }>(AuthContext);

  const fetchContacts = async (unmounted: Boolean) => {
    try {
      const { data } = (await Axios.get(
        `https://api-im.chatdaddy.tech/contacts`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          params: {
            count: limit || 10,
            returnTotalCount: "true",
          },
        }
      )) as AxiosResponse;
      setLimit(limit + 10);
      console.log({ data });
      if (
        state.contacts.length === state.totalCount &&
        state.totalCount !== 0
      ) {
        console.log("all contacts was fetched");
        console.log({ state });
        console.log(hasMore);
        setHasMore(false);
      }

      if (unmounted) {
        dispatch({
          type: "fetch_contacts",
          payload: { contacts: data.contacts, totalCount: data.totalCount },
        });
        setContactsNumber(state.totalCount);
      }
    } catch (error: any) {
      console.log({ error });
      dispatch({
        type: "fetch_contacts_falid",
        payload: error.response.data.message || "Something went wrong!",
      });
    }
  };

  useEffect(() => {
    let unmounted: Boolean = true;
    !!token && fetchContacts(unmounted);
    return () => {
      unmounted = false;
    };
  }, [token]);

  const handleSelectAllContacts = () => {
    if (state.selectedContact.length === state.contacts.length) {
      dispatch({
        type: "unselect_all_contacts",
        payload: [],
      });
    } else if (state.selectedContact.length < state.contacts.length) {
      dispatch({
        type: "select_all_contacts",
        payload: state.contacts,
      });
    }
  };

  const handleselectedContact = (id: string, action: "select" | "unselect") => {
    if (action === "select") {
      dispatch({
        type: "select_contact",
        payload: state.contacts.find(
          (item: { [key: string]: any }) => item.id === id
        ),
      });
    } else if (action === "unselect") {
      dispatch({
        type: "unselect_contact",
        payload: [...state.selectedContact.filter((item) => item.id !== id)],
      });
    }
  };

  const handleSearch = async (queryValue: string) => {
    const res: AxiosResponse = await Axios.get(
      "https://api-im.chatdaddy.tech/contacts",
      {
        params: { q: queryValue, count: 20 },
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (queryValue !== "") {
      dispatch({
        type: "contacts_search",
        payload: res.data.contacts,
      });
    } else {
      dispatch({
        type: "contacts_search",
        payload: [],
      });
    }
  };

  return (
    <Col className="p-3" sm="9" md="9" lg="9">
      <Header />
      <Search search={handleSearch} />
      <ActionComponent
        selectAll={handleSelectAllContacts}
        selectedContacts={state.selectedContact}
        contacts={state.contacts}
      />

      <InfiniteScroll
        className="infinite-scroll"
        dataLength={state.contacts.length}
        next={() => fetchContacts(true)}
        hasMore={hasMore}
        loader={
          <Spinner
            className="d-block m-auto"
            animation="border"
            variant="success"
          />
        }
        endMessage={<Alert variant="success">"No more contacts"</Alert>}
      >
        <ContactsContainer
          contacts={state.contacts}
          selectedContacts={state.selectedContact}
          setSelectContact={handleselectedContact}
          searchResult={state.searchResult}
        />
      </InfiniteScroll>
    </Col>
  );
};

export default Contacts;


import { render, screen } from "@testing-library/react";
import Contacts from "../";
import AuthProvider from "../../../context/Authentication";

// import axios from "axios";

// Mock jest and set the type
// jest.mock("axios");
// const mockedAxios = axios as jest.Mocked<typeof axios>;

const setContactsNumber = jest.fn(() => 10);
const MockContacts = () => {
  return (
    <AuthProvider>
      <Contacts setContactsNumber={setContactsNumber} />
    </AuthProvider>
  );
};

describe("Contacts", () => {
  describe("Contacts should have", () => {
    test("Contact should render contacts elements", async () => {
      render(<MockContacts />);
      // mockedAxios.get.mockResolvedValue(mockResponse);

      const contactsCounter = await screen.findByTestId("contactunit-1");
      expect(contactsCounter).toBeInTheDocument();
    });

    test("Contact should render 10 contacts elements", async () => {
      render(<MockContacts />);
      const contactsCounter = await screen.findAllByTestId(/contactunit-/);
      expect(contactsCounter.length).toBe(10);
    });
  });
});


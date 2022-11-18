import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
  test('Header title', () => {
    render(<Header contactsNumber={1} />);
    const audienceElm = screen.getByText(/Audience/i);
    expect(audienceElm).toBeInTheDocument();
  });

  test('Contacts Counter', () => {
    render(<Header contactsNumber={1} />);
    const paragraphElm = screen.getByText(/\d\scontact[s]*?/i);
    expect(paragraphElm).toBeInTheDocument();
  });

  test('Should render the contacts counter value were passed to the Header', () => {
    const contactsNumber = 1;
    render(<Header contactsNumber={contactsNumber} />);
    const paragraphElm = screen.getByText(/1/);
    expect(paragraphElm.textContent).toBe(`${contactsNumber} Contact`);
  });
});

import { fireEvent, getByRole, render, screen, waitFor } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import CardList from './components/CardList/CardList';

describe('App' , () => {
  test('renders App', () => {
    render(<App />);
    // screen.debug();
});


test('renders first filter by name', ()=> {
  render(<App/>);
  const navigation = screen.getByText("High ABV (>6%)");
  expect(navigation).toBeInTheDocument();

} )

test('renders second filter by name', ()=> {
  render(<App/>);
  const navigation = screen.getByText("Classic Range");
  expect(navigation).toBeInTheDocument();

} )

test('renders third filter by name', ()=> {
  render(<App/>);
  const navigation = screen.getByText("Acidic (ph < 4)");
  expect(navigation).toBeInTheDocument();

} )

test('renders #1 checkbox by name', ()=> {
  render(<App/>);
  const myCheckbox = screen.getByRole('checkbox', {name: "High ABV (>6%)"});
  expect(myCheckbox).toBeInTheDocument();
} )

test('click the #1 checkbox', ()=> {
  render(<App/>);
  const myCheckbox = screen.getByRole('checkbox', {name: "High ABV (>6%)"});
  expect(myCheckbox).toBeInTheDocument();
  expect(myCheckbox).not.toBeChecked();
  userEvent.click(myCheckbox);
  expect(myCheckbox).toBeChecked();
  userEvent.click(myCheckbox);
} )

test('renders #2 checkbox by name', ()=> {
  render(<App/>);
  const myCheckbox = screen.getByRole('checkbox', {name: "Classic Range"});
  expect(myCheckbox).toBeInTheDocument();
} )

test('click the #2 checkbox', ()=> {
  render(<App/>);
  const myCheckbox = screen.getByRole('checkbox', {name: "Classic Range"});
  expect(myCheckbox).toBeInTheDocument();
  expect(myCheckbox).not.toBeChecked();
  userEvent.click(myCheckbox);
  expect(myCheckbox).toBeChecked();
  userEvent.click(myCheckbox);
} )

test('renders #3 checkbox by name', ()=> {
  render(<App/>);
  const myCheckbox = screen.getByRole('checkbox', {name: "Acidic (ph < 4)"});
  expect(myCheckbox).toBeInTheDocument();
} )

test('click the #3 checkbox', ()=> {
  render(<App/>);
  const myCheckbox = screen.getByRole('checkbox', {name: "Acidic (ph < 4)"});
  expect(myCheckbox).toBeInTheDocument();
  expect(myCheckbox).not.toBeChecked();
  userEvent.click(myCheckbox);
  expect(myCheckbox).toBeChecked();
  userEvent.click(myCheckbox);
} )

test('renders Search', ()=> {
  render(<App/>);
  const mySearch = screen.getByRole('textbox');
  expect(mySearch).toBeInTheDocument();
  expect(mySearch).toHaveAttribute("type","text")
  expect(mySearch).toHaveAttribute("value", "Search...")
} )

test('click on 3 checkboxes and check epmty filter', ()=> {
  render(<App/>);
  const myFirstCheckbox = screen.getByRole('checkbox', {name: "High ABV (>6%)"});
  const mySecondCheckbox = screen.getByRole('checkbox', {name: "Classic Range"});
  const myThirdCheckbox = screen.getByRole('checkbox', {name: "Acidic (ph < 4)"});
  expect(myFirstCheckbox).toBeInTheDocument();
  expect(mySecondCheckbox).toBeInTheDocument();
  expect(myThirdCheckbox).toBeInTheDocument();
  userEvent.click(myFirstCheckbox);
  userEvent.click(mySecondCheckbox);
  userEvent.click(myThirdCheckbox);
  expect(myFirstCheckbox).toBeChecked();
  expect(mySecondCheckbox).toBeChecked();
  expect(myThirdCheckbox).toBeChecked();
  const nothingFoundText = screen.getByText(/Nothing to display, please modify your search/)
  expect(nothingFoundText).toBeVisible();
  userEvent.click(myFirstCheckbox);
  userEvent.click(mySecondCheckbox);
  userEvent.click(myThirdCheckbox);
} )

test('check epmty filter when list of beers is not there', ()=> {
  render(<App/>);
  const nothingFoundText = screen.getByText(/Nothing to display, please modify your search/)
  expect(nothingFoundText).toBeTruthy();
} )


test('perform Search', ()=> {
  render(<App/>);
  const mySearch = screen.getByRole('textbox');
  userEvent.type(mySearch, "abcdef");
  const nothingFoundText = screen.getByText(/Nothing to display, please modify your search/)
  expect(nothingFoundText).toBeTruthy();
} )

test("should fetch and display Buzz", async () => {
  render(<App />);
  await waitFor(() => expect(screen.getByText("Buzz")).toBeInTheDocument(), {timeout: 2000});
});

test("should not display error if beers are displayed", async () => {
  render(<App />);
  await waitFor(() => expect(screen.getByText("Buzz")).toBeInTheDocument(), {timeout: 2000});
  expect(screen.queryByText(/Nothing to display, please modify your search/)).toBeFalsy();
});

test("should filter with #1 and display Pilsen Lager", async () => {
  render(<App />);
  await waitFor(() => expect(screen.getByText("Buzz")).toBeInTheDocument(), {timeout: 2000});
  const myCheckbox = screen.getByRole('checkbox', {name: "High ABV (>6%)"});
  expect(myCheckbox).toBeInTheDocument();
  expect(myCheckbox).not.toBeChecked();
  userEvent.click(myCheckbox);
  expect(myCheckbox).toBeChecked();
  expect(screen.getByText("Pilsen Lager")).toBeInTheDocument()
  userEvent.click(myCheckbox);
});

test("should filter with #2 and display Trashy Blonde", async () => {
  render(<App />);
  await waitFor(() => expect(screen.getByText("Buzz")).toBeInTheDocument(), {timeout: 2000});
  const myCheckbox = screen.getByRole('checkbox', {name: "Classic Range"});
  expect(myCheckbox).toBeInTheDocument();
  expect(myCheckbox).not.toBeChecked();
  userEvent.click(myCheckbox);
  expect(myCheckbox).toBeChecked();
  expect(screen.getByText("Trashy Blonde")).toBeInTheDocument()
  userEvent.click(myCheckbox);
});

test("should filter with #3 and display Whisky Sour - B-Sides", async () => {
  render(<App />);
  await waitFor(() => expect(screen.getByText("Buzz")).toBeInTheDocument(), {timeout: 2000});
  const myCheckbox = screen.getByRole('checkbox', {name: "Acidic (ph < 4)"});
  expect(myCheckbox).toBeInTheDocument();
  expect(myCheckbox).not.toBeChecked();
  userEvent.click(myCheckbox);
  expect(myCheckbox).toBeChecked();
  expect(screen.getByText("Whisky Sour - B-Sides")).toBeInTheDocument()
  userEvent.click(myCheckbox);
});

test("should search for Pilsner", async () => {
  render(<App />);
  await waitFor(() => expect(screen.getByText("Buzz")).toBeInTheDocument(), {timeout: 2000});
  const mySearch = screen.getByRole('textbox');
  userEvent.type(mySearch, "ils");
  expect(screen.getByText("Sub Hop")).toBeInTheDocument()
});

});

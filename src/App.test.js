import { fireEvent, getByRole, render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom/extend-expect';
import App from './App';

describe('App' , () => {
  test('renders App', () => {
    render(<App />);
    screen.debug();
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

test('renders 1 checkbox by name', ()=> {
  render(<App/>);
  const myCheckbox = screen.getByRole('checkbox', {name: "High ABV (>6%)"});
  expect(myCheckbox).toBeInTheDocument();
} )

test('click the 1 checkbox', ()=> {
  render(<App/>);
  const myCheckbox = screen.getByRole('checkbox', {name: "High ABV (>6%)"});
  expect(myCheckbox).toBeInTheDocument();
  expect(myCheckbox).not.toBeChecked();
  userEvent.click(myCheckbox);
  expect(myCheckbox).toBeChecked();
  userEvent.click(myCheckbox);
} )

test('renders 2 checkbox by name', ()=> {
  render(<App/>);
  const myCheckbox = screen.getByRole('checkbox', {name: "Classic Range"});
  expect(myCheckbox).toBeInTheDocument();
} )

test('click the 2 checkbox', ()=> {
  render(<App/>);
  const myCheckbox = screen.getByRole('checkbox', {name: "Classic Range"});
  expect(myCheckbox).toBeInTheDocument();
  expect(myCheckbox).not.toBeChecked();
  userEvent.click(myCheckbox);
  expect(myCheckbox).toBeChecked();
  userEvent.click(myCheckbox);
} )

test('renders 3 checkbox by name', ()=> {
  render(<App/>);
  const myCheckbox = screen.getByRole('checkbox', {name: "Acidic (ph < 4)"});
  expect(myCheckbox).toBeInTheDocument();
} )

test('click the 3 checkbox', ()=> {
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

test('do not click on 3 checkboxes and check epmty filter', ()=> {
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

});



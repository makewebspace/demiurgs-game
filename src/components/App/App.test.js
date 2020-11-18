import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import App, { TITLE_TEXT, FAB_TEXT, CELL_LIST_ID } from './App';
import { CELL_ID } from '../Card/Card';

afterEach(cleanup);

test('when cell list is empty', () => {
  render(<App />);

  const titleElement = screen.getByText(TITLE_TEXT);
  const buttonElement = screen.getByText(FAB_TEXT);
  const cellListElement = screen.getByTestId(CELL_LIST_ID);

  expect(titleElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
  expect(cellListElement).toBeInTheDocument();
  expect(cellListElement).toBeEmptyDOMElement();
});

test('when click to FAB button', () => {
  render(<App />);

  window.HTMLElement.prototype.scrollIntoView = () => {};

  const buttonElement = screen.getByText(FAB_TEXT);
  const cellListElement = screen.getByTestId(CELL_LIST_ID);

  fireEvent.click(buttonElement);

  expect(cellListElement).not.toBeEmptyDOMElement();
  expect(cellListElement).toContainElement(screen.getByTestId(`${CELL_ID}-0`));
});

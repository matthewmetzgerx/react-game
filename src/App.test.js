import React from 'react';
import ReactDOM from 'react-dom';
import {mount} from 'enzyme'
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const app = mount(<App />);
it('loads TicTacToe component', () => {
  expect(app.find('TicTacToe')).toHaveLength(1);
});


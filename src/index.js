import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import data from '../content.json';

class App extends React.Component {
  render() {
    return (
      <div>
        <Hello
          paurnima={data.page}
         />
      </div>
      
    )
  }
}

render(<App />, document.getElementById('root'));

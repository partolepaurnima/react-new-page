import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import data from '../content.json';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>{data.page.heading}</h1>
        <p>{data.page.paragraph}</p>
        <Hello
          paurnima={data.page}
         />
      </div>
      
    )
  }
}

render(<App />, document.getElementById('root'));

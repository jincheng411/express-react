import React from 'react';
import ReactDOM from 'react-dom'
import Input from './components/Input.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    }
  }
  render() {
    return (
      <div>
        {/* <Input /> */}
        <h2>aaa</h2>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
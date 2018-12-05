import React from 'react';
import MenuBar from './MenuBar';

export default class App extends React.Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {
  //       currentView: 0,
  //       open: false,
  //       message: '',
  //     };
  //     this.update = this.update.bind(this);
  //   }
  // update = (key, val) => this.setState({ [key]: val });

  render = () => {
    const handleClose = () => this.update('open', false);
    const notify = message => {
      this.update('message', message);
      this.update('open', true);
    };

    return (
      <div className="App">
        <div>
          <MenuBar />
        </div>
      </div>
    );
  };
}

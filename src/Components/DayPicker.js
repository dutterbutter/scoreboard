import React, { Component } from 'react';
import DatePicker from 'react-date-picker';

class DayPicker extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => {
      this.setState({ date }, () => this.props.dateParserHandler(this.state));
  }
  
  render() {
   
    return (
      <div>
        <DatePicker
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}
export default DayPicker;
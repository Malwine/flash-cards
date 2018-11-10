import React, {Component} from 'react';

class Set extends Component {
  state = {
    id: null
  }

  componentDidMount() {
    let id = this.props.match.params.set_id
    this.setState({
      id: id
    })
  }

  render() {
    return (
      <div className='container'>
        <h4>{this.state.id}</h4>
      </div>
    )
  }
}
export default Set
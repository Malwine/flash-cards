import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid'
import SetPreview from '../components/SetPreview'

class SetList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sets: []
    };
  }

  componentWillMount() {
    const sets = JSON.parse(localStorage.getItem('sets'));
    this.setState({ sets })
  }

  render() {
    return (
      <div>
        {this.state.sets ? (
          <div>
            <Grid container spacing={24} style={{ padding: 24 }}>
              {this.state.sets.map(currentSet => (
                <Grid key={ currentSet.title } item xs={12} sm={6} lg={4} xl={3}>
                  <SetPreview set={currentSet} />
                </Grid>
              ))}
            </Grid>
          </div>
        ) : "No sets"}
      </div>
    )
  }
}


export default SetList;
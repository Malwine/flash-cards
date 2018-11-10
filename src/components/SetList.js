import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid'
import Set from '../components/Set'

class SetList extends Component {

  state = {
    sets: [{ title: "Learn German" }, { title: "Learn historic dates" }]
  }

  render() {
    return (
      <div>
        {this.state.sets ? (
          <div>
            <Grid container spacing={24} style={{ padding: 24 }}>
              {this.state.sets.map(currentSet => (
                <Grid item xs={12} sm={6} lg={4} xl={3}>
                  <Set set={currentSet} />
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
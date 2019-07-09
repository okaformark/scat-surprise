import React from 'react';
import scatsData from '../../helpers/data/scatsData';
import 'firebase/auth';

import './SingleScat.scss';

class SingleScat extends React.Component {
  state = {
    scat: {},
  }

  componentDidMount() {
    const scatId = this.props.match.params.id;
    scatsData.getSingleScat(scatId)
      .then(scatPromise => this.setState({ scat: scatPromise.data }))
      .catch(err => console.error('unable to get single scat', err));
  }

  deleteScat = () => {
    const scatId = this.props.match.params.id;
    scatsData.deleteScat(scatId)
      .then(() => this.props.history.push('/home'))
      .catch(err => console.error('unable to delete', err));
  }

  render() {
    const { scat } = this.state;
    return (
      <div className="SingleScat">
        <h1>{scat.samplename}</h1>
        <h2>{scat.location}</h2>
        <h3>{scat.animal}</h3>
        <h4>{scat.color}</h4>
        <button className="btn btn-danger" onClick={this.deleteScat}>Delete</button>
      </div>
    );
  }
}
export default SingleScat;

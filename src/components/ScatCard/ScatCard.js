import React from 'react';
import scatShape from '../../helpers/propz/scatShape';


class ScatCard extends React.Component {
  static propTypes = {
    scat: scatShape.scatShape,
  }

  render() {
    const { scat } = this.props;
    return (
      <div className="ScatCard col-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{scat.sampleName}</h5>
            <p className="card-text">{scat.location}</p>
          </div>
        </div>
        <h2>{scat.sampleName}</h2>
      </div>
    );
  }
}
export default ScatCard;

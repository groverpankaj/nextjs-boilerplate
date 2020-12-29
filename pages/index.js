import React from 'react';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NumberPanel from '../components/NumberPanel';

const Home = () => (
  <div>
    <p>Hello World</p>
    <button type="button" className="btn btn-primary">Button</button>
    <br />
    <FontAwesomeIcon icon={faCoffee} />
    <NumberPanel
      val={210}
    />
  </div>
);

export default Home;

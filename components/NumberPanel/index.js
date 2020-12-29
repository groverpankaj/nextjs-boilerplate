import React from 'react';
import PropTypes from 'prop-types';
import s from './index.module.scss';

const NumberPanel = ({ val }) => (
  <div className={s.outer}>
    {val}
  </div>
);

export default NumberPanel;

NumberPanel.propTypes = {
  val: PropTypes.number.isRequired,
};

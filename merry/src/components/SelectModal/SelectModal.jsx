import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { map } from 'ramda';

import { BlankButton, RelativeModal } from 'components';

import styles from './SelectModal.scss';

const boundStyles = classNames.bind(styles);

const SelectModal = props => {
  const { options, className, ...other } = props;

  const optionStyles = option =>
    boundStyles({
      base: true,
      option: !!option.label && !!option.onClick,
      heading: !!option.label && !option.onClick,
      divider: !option.label && !option.onClick,
    });

  return (
    <RelativeModal className={classNames(styles.modal, className)} {...other}>
      {map(
        option => (
          <BlankButton className={optionStyles(option)} onClick={option.onClick} key={option.label}>
            {option.label}
          </BlankButton>
        ),
        options,
      )}
    </RelativeModal>
  );
};

SelectModal.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      onClick: PropTypes.func,
    }),
  ).isRequired,
  className: PropTypes.string,
};

SelectModal.defaultProps = {
  className: '',
};

export default SelectModal;

import PropTypes from 'prop-types';

const jeanShape = PropTypes.shape({
  imageUrl: PropTypes.string.isRequired,
  jeanName: PropTypes.string.isRequired,
  whatBrand: PropTypes.string.isRequired,
  whereMade: PropTypes.string.isRequired,
  whatColorTab: PropTypes.string.isRequired,
  fabricType: PropTypes.string.isRequired,
  isVintage: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
});

export default { jeanShape };

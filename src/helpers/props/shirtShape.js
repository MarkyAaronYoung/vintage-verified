import PropTypes from 'prop-types';

const shirtShape = PropTypes.shape({
  imageUrl: PropTypes.string.isRequired,
  isTshirt: PropTypes.bool.isRequired,
  shirtName: PropTypes.string.isRequired,
  whatBrand: PropTypes.string.isRequired,
  whereMade: PropTypes.string.isRequired,
  stitchType: PropTypes.string.isRequired,
  fabricType: PropTypes.string.isRequired,
  isVintage: PropTypes.bool.isRequired,
  uid: PropTypes.string.isRequired,
});

export default { shirtShape };

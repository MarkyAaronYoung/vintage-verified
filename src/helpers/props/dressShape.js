import PropTypes from 'prop-types';

const dressShape = PropTypes.shape({
  imageUrl: PropTypes.string.isRequired,
  isSkirt: PropTypes.bool.isRequired,
  dressName: PropTypes.string.isRequired,
  zipperAndTongType: PropTypes.string.isRequired,
  whereMade: PropTypes.string.isRequired,
  fabricType: PropTypes.string.isRequired,
  isVintage: PropTypes.bool.isRequired,
  uid: PropTypes.string.isRequired,
});

export default { dressShape };

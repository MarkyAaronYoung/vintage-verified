import PropTypes from 'prop-types';

const dressShape = PropTypes.shape({
  imageUrl: PropTypes.string.isRequired,
  isSkirt: PropTypes.string.isRequired,
  dressName: PropTypes.string.isRequired,
  zipperAndTongType: PropTypes.string.isRequired,
  whereMade: PropTypes.string.isRequired,
  fabricType: PropTypes.string.isRequired,
  isVintage: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
});

export default { dressShape };

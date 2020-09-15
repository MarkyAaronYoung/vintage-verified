import PropTypes from 'prop-types';

const pantShape = PropTypes.shape({
  imageUrl: PropTypes.string.isRequired,
  pantsName: PropTypes.string.isRequired,
  zipperAndTongType: PropTypes.string.isRequired,
  whereMade: PropTypes.string.isRequired,
  fabricType: PropTypes.string.isRequired,
  isVintage: PropTypes.bool.isRequired,
  uid: PropTypes.string.isRequired,
});

export default { pantShape };

import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

export const Filter = ({ value, onFilterChange }) => (
  <Label>
    Search by name
    <Input type="text" value={value} onChange={onFilterChange} />
  </Label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

import { useDispatch } from 'react-redux';
import { filterChange } from 'redux/contactsSlice';
import { Label, Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Label>
      Search by name
      <Input
        type="text"
        onChange={e => dispatch(filterChange(e.currentTarget.value))}
      />
    </Label>
  );
};

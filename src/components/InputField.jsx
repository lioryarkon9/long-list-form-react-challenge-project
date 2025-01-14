import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

const StyledTextField = styled(TextField)({
  boxShadow: 'none',
  textTransform: 'none',
  backgroundColor: '#909196',
  borderRadius: '4px',
});

const InputField = ({
  name,
  value,
  onChangehandler,
  error,
  disabled,
  placeholder,
  fullWidth = true,
  onFocus,
  onBlur,
}) => {
  return (
    <StyledTextField
      name={name}
      value={value}
      onChange={(e) => onChangehandler(e.target.name, e.target.value)}
      error={error}
      disabled={disabled}
      placeholder={placeholder}
      variant="outlined"
      size="small"
      fullWidth={fullWidth}
      autoComplete="off"
      inputProps={{
        autoComplete: 'off',
      }}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

InputField.defaultProps = {
  name: 'text_field_name',
  value: '',
  onChangehandler: () => {},
  error: false,
  disabled: false,
  placeholder: '',
};

export default InputField;

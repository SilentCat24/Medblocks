import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

const Custom = styled(TextField)(({ theme }) => ({
  '& label': {
    color: 'black',
  },
  '& label.Mui-focused': {
    color: 'black',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'black',
      borderWidth:"1px"
    },
    '&:hover fieldset': {
      borderColor: 'black',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'black',
    },
  },
}));

export default Custom;
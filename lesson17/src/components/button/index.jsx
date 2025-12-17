import { styled } from '@mui/system'

const MyButton = styled('button')({
  backgroundColor: '#6200ea',
  color: '#ffffff',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '16px',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: '#3700b3',
    opacity: 0.5,
  },
})
function Button() {
  return <MyButton>Click me</MyButton>
}

export default Button

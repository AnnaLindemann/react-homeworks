import Question from './components/question';
import { Container, Stack, Typography,Button } from '@mui/material';
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { submitAnswers } from './redux/slices/questionnaireSlice';
import Result from './components/result';

function App() {
  const dispatch = useDispatch()
  const questions = useSelector((state) => state.questionnaire.questions)

  const handleSubmit = () => {
    dispatch(submitAnswers())
  }
  return (
  <Container maxWidth="sm" sx={{ py: 4 }}>
      <Stack spacing={2.5}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          React Quiz
        </Typography>

        <Stack spacing={2}>
          {questions.map((q) => (
            <Question key={q.id} question={q} />
          ))}
        </Stack>

        <Button variant="contained" size="large" onClick={handleSubmit}>
          Submit
        </Button>
        <Result/>
      </Stack>
    </Container>
  )
}

export default App

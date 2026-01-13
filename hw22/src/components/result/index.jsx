import { Stack, Alert } from "@mui/material";
import { useSelector } from "react-redux";

export default function Result() {
  const error = useSelector((state) => state.questionnaire.error);
  const submitted = useSelector((state) => state.questionnaire.submitted);
  const result = useSelector((state) => state.questionnaire.result)
 const total = useSelector((state) => state.questionnaire.total)
   const answeredCount = useSelector((state) => Object.keys(state.questionnaire.answers).length);

if(error){
  return <Alert  severity="error" variant="outlined" sx={{borderRadius: 2}}>{error}</Alert>
}

if (submitted && result){
  return <Alert severity="success" variant="filled" sx={{ borderRadius: 2 }}>Result: {result.correctCount}/{result.total}</Alert>
}

return(
    <Stack spacing={1}>
      <Alert severity="info" variant="outlined" sx={{ borderRadius: 2 }}>
        Answered: {answeredCount} / {total}. Then click “Submit”.
      </Alert>
    </Stack>
)
}


import { Card,Typography, CardContent, RadioGroup, FormControlLabel,Radio,Stack } from "@mui/material";
import { useDispatch,useSelector } from "react-redux";
import { answerQuestion } from "../../redux/slices/questionnaireSlice";

export default function Question({question}){
const dispatch = useDispatch()

const selectedValue = useSelector((state) => state.questionnaire.answers[question.id] ?? "")

const handleChange = (e) => {
  dispatch(answerQuestion({ questionId: question.id,selectedValue: e.target.value,}))
}
  
  return (
<Card sx={{ borderRadius: 3, border: "1px solid", borderColor: "divider", boxShadow: 0 }}>
<CardContent>
<Stack spacing={1.5}>
<Typography variant="h6" sx={{ fontWeight: 600 }}>{question.text}</Typography>
<RadioGroup  value={selectedValue}
            onChange={handleChange}
            sx={{ gap: 0.5 }}>
{question.options.map((opt) => 
(<FormControlLabel  key={opt.value} value={opt.value} control={<Radio />} label={opt.label}/>) )}
</RadioGroup>
</Stack>
</CardContent>
</Card>
  )
}
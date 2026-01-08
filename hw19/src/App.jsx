import InfoForm from './components/infoForm'
import './App.css'
import { useState } from 'react'
import ResponseCard from './components/responseCard'
import { Row, Col,Typography, Space } from 'antd'

function App() {
 const [submittedData, setSubmittedData] = useState(null)

 const handleSubmit = (values) => setSubmittedData(values)
  return (
    <Row justify="center" style={{padding: 24}}>
      <Col xs={24} sm={20} md={14} lg={10} xl={8}>
      <Space orientation='vertical' size={16} style={{width: "100%"}}>
        <Typography.Title level={3} style={{margin:0}}>Form with Ant Design</Typography.Title>
    <InfoForm onSubmit={handleSubmit}/>
    <ResponseCard data={submittedData}/>
    </Space>
    </Col>
    </Row>
  )
}

export default App

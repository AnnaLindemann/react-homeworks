import { Card,Typography, Descriptions} from "antd"

export default function ResponseCard({data}){
if(!data){
  return null;
}

  return(
    <Card>
      <Typography.Title level={4}>Sendet Data</Typography.Title>
      <Descriptions column={1} size="small"  labelStyle={{ fontWeight: 600, fontSize: 16 }}  >
  <Descriptions.Item label="Username">{data.username}</Descriptions.Item>
  <Descriptions.Item label="Description">{data.description}</Descriptions.Item>
      </Descriptions>
    </Card>
  )
}
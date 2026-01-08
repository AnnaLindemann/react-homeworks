import { AvatarGroup, Avatar } from 'rsuite'
import 'rsuite/dist/rsuite.min.css'
const users = [
  { avatar: 'https://i.pravatar.cc/150?u=1', name: 'John Doe' },
  { avatar: 'https://i.pravatar.cc/150?u=2', name: 'Tom Doe' },
  { avatar: 'https://i.pravatar.cc/150?u=3', name: 'Jerry Doe' },
  { avatar: 'https://i.pravatar.cc/150?u=4', name: 'Lily Doe' },
  { avatar: 'https://i.pravatar.cc/150?u=5', name: 'Lucy Doe' },
  { avatar: 'https://i.pravatar.cc/150?u=6', name: 'Mike Doe' },
  { avatar: 'https://i.pravatar.cc/150?u=7', name: 'Jane Doe' },
  { avatar: 'https://i.pravatar.cc/150?u=8', name: 'Kate Doe' },
  { avatar: 'https://i.pravatar.cc/150?u=9', name: 'Jack Doe' },
  { avatar: 'https://i.pravatar.cc/150?u=10', name: 'Rose Doe' },
]

const max = 6

const App = () => (
  <>
    <AvatarGroup stack>
      {users.map(user => (
        <Avatar
          bordered
          circle
          key={user.name}
          src={user.avatar}
          alt={user.name}
        />
      ))}
    </AvatarGroup>

    <hr />

    <AvatarGroup stack>
      {users
        .filter((user, i) => i < max)
        .map(user => (
          <Avatar
            bordered
            circle
            key={user.name}
            src={user.avatar}
            alt={user.name}
          />
        ))}
      <Avatar bordered circle style={{ background: '#f09393ff' }}>
        +{users.length - max}
      </Avatar>
    </AvatarGroup>
  </>
)
export default App


**Secon TAsk**
import { Container, Header, Content, Footer, Button, Panel } from 'rsuite'
import 'rsuite/dist/rsuite.min.css'
import './App.css'


const App = () => (
  <Container className='app'>
    <Header className='appHeader'>My React Site App</Header>
 <Content>
<Panel bordered className='appPanel'>
  <h3 className='appH'>Welcome!</h3>
  <p className='appP'>This is simple application using React Suite components:</p>
  <Button appearance="primary" className='appButton'>Click Me</Button>
</Panel>

 </Content>
<Footer className='appFooter'>
<p>© 2024 My Company. All Rights Reserved.</p>
</Footer>
  </Container>
)
export default App
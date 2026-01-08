import { useState } from 'react';
import { Container, Content, Input, InputGroup, IconButton, Panel } from 'rsuite';
import PlusIcon from '@rsuite/icons/Plus';
import './App.css';
import 'rsuite/dist/rsuite.min.css';


export default function App() {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  function addItem() {
    setResult(text);
    setText('');
  }

  return (
    <Container className="app">
      <Content className="appContent">
        <Panel bordered className="appPanel">
          <InputGroup className="appInputGroup">
            <Input
              className="appInput"
              placeholder="Enter a new item"
              value={text}
              onChange={setText}
            />
            <InputGroup.Addon className="appAddon">
              <IconButton
                className="appAddButton"
                icon={<PlusIcon />}
                appearance="primary"
                onClick={addItem}
                aria-label="Add"
              />
            </InputGroup.Addon>
          </InputGroup>

          <div className="appSpacer" />

          <Input
            className="appResult"
            placeholder="Result will appear here"
            value={result}
            readOnly
          />
        </Panel>
      </Content>
    </Container>
  );
}

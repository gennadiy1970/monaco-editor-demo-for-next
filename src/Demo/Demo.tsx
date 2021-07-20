import React, { useState } from 'react';
import MonacoEditor from '../MonacoEditor';
import { CodeWrapper, Container, Button } from './Demo.styles';
import { code } from '../code';
import { options } from '../options';
import { ITheme, IMode } from '../types';
import { editor } from 'monaco-editor';

const theme: ITheme = {
  dark: 'vs-dark',
  light: 'light',
};

const mode: IMode = {
  js: 'javascript',
  ts: 'typescript',
  html: 'html',
  css: 'css',
  less: 'less',
  java: 'java',
  python: 'python',
};

function Demo() {
  const [stateTheme, setStateTheme] = useState(theme.dark);
  const [stateMode, setStateMode] = useState(mode.js);
  const [codeValue, setCodeValue] = useState(code.js);
  const onChangeCode = (value = '', event: editor.IModelContentChangedEvent) =>
    setCodeValue(value);
  return (
    <>
      <Container>
        <Button onClick={() => setStateTheme(theme.dark)}>
          The Dark theme
        </Button>
        <Button onClick={() => setStateTheme(theme.light)}>
          The Light theme
        </Button>
      </Container>
      <Container>
        <Button onClick={() => setStateMode(mode.js)}>javascript</Button>
        <Button onClick={() => setStateMode(mode.ts)}>typescript</Button>
        <Button onClick={() => setStateMode(mode.html)}>html</Button>
        <Button onClick={() => setStateMode(mode.css)}>css</Button>
        <Button onClick={() => setStateMode(mode.less)}>
          less (blocked editor)
        </Button>
        <Button onClick={() => setStateMode(mode.java)}>java</Button>
        <Button onClick={() => setStateMode(mode.python)}>python</Button>
      </Container>
      {stateMode === mode.js && (
        <MonacoEditor
          theme={stateTheme}
          mode={mode.js}
          code={codeValue}
          options={options}
          onChange={onChangeCode}
        />
      )}
      {stateMode === mode.ts && (
        <MonacoEditor
          theme={stateTheme}
          mode={mode.ts}
          code={code.ts}
          options={options}
          onChange={onChangeCode}
        />
      )}
      {stateMode === mode.html && (
        <MonacoEditor
          theme={stateTheme}
          mode={mode.html}
          code={code.html}
          options={options}
          onChange={onChangeCode}
        />
      )}
      {stateMode === mode.css && (
        <MonacoEditor
          theme={stateTheme}
          mode={mode.css}
          code={code.css}
          options={options}
          onChange={onChangeCode}
        />
      )}
      {stateMode === mode.less && (
        <MonacoEditor
          theme={stateTheme}
          mode={mode.less}
          code={code.less}
          options={{ ...options, readOnly: true }}
          className="disable"
          onChange={onChangeCode}
        />
      )}
      {stateMode === mode.java && (
        <MonacoEditor
          theme={stateTheme}
          mode={mode.java}
          code={code.java}
          options={options}
          onChange={onChangeCode}
        />
      )}
      {stateMode === mode.python && (
        <MonacoEditor
          theme={stateTheme}
          mode={mode.python}
          code={code.python}
          options={options}
          onChange={onChangeCode}
        />
      )}
      <Container>
        <Button onClick={() => setStateMode(mode.js)}>Get code</Button>
      </Container>
      <CodeWrapper>{codeValue}</CodeWrapper>
    </>
  );
}

export default Demo;

import React, { useEffect, useRef } from 'react';
import Editor, { useMonaco } from '@monaco-editor/react';

import { editor } from 'monaco-editor';
import { Container } from './MonacoEditor.styles';
import { IMonacoEditorProps } from '../types';


const MonacoEditor: React.FC<IMonacoEditorProps> = ({
  theme,
  mode,
  code,
  options,
  className = '',
  onChange,
}) => {
  const monaco = useMonaco();
  type TMonaco = typeof monaco;
  type TEditor = editor.ICodeEditor;

  const monacoRef = useRef(null);
  useEffect(() => {
    // do conditional chaining
    monaco?.languages.typescript.javascriptDefaults.setEagerModelSync(true);
    // or make sure that it exists by other ways
    if (monaco) {
      console.log('here is the monaco instance:', monaco);
    }
  }, [monaco]);
  // function handleEditorWillMount(monaco: TMonaco) {
  //   // here is the monaco instance
  //   // do something before editor is mounted
  //   // monaco?.languages.typescript.javascriptDefaults.setEagerModelSync(true);
  // }

  function handleEditorDidMount(editor: TEditor, monaco: TMonaco) {
    // here is another way to get monaco instance
    // you can also store it in `useRef` for further usage
    if (monaco && editor) {
      editor.focus();
      editor.setPosition({ lineNumber: 3, column: 4 });
      editor.deltaDecorations(
        [],
        [
          {
            range: new monaco.Range(3, 1, 5, 1),
            options: {
              isWholeLine: true,
              linesDecorationsClassName: 'myLineDecoration',
            },
          },
          {
            range: new monaco.Range(2, 20, 2, 25),
            options: { inlineClassName: 'myInlineDecoration' },
          },
          {
            range: new monaco.Range(6, 20, 6, 25),
            options: { inlineClassName: 'myInlineDecoration' },
          },
          // {
          //   range: new monaco.Range(3, 1, 5, 80),
          //   options: { inlineClassName: 'editabaleCodeBackground' },
          // },
        ]
      );
    }
  }
  return (
    <Container>
      <Editor
        height="100%"
        options={options}
        defaultValue={code}
        defaultLanguage={mode}
        theme={theme}
        className={className}
        // beforeMount={handleEditorWillMount}
        onMount={handleEditorDidMount}
        onChange={onChange}
      />
    </Container>
  );
};

export default MonacoEditor;

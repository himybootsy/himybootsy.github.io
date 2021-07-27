import React from 'react';
import MonacoEditor from 'react-monaco-editor';

class Monaco extends React.Component {
  editorDidMount(editor) {
    editor.focus();
  }
  onChange(newValue) {
    localStorage.setItem('custom__css', newValue)
    if(document.querySelector('head>#custom__css')) {
        document.querySelector('head>#custom__css').innerHTML = `${newValue}`
    } else {
        document.querySelector('head').innerHTML += `<style id="custom__css">${newValue}</style>`
    }
  }
  render() {
    const options = {
      selectOnLineNumbers: true
    };
    return (
      <MonacoEditor
        width="100vw"
        height="100vh"
        language="css"
        theme="vs-dark"
        value={localStorage.getItem('custom__css')}
        options={options}
        onChange={this.onChange}
        editorDidMount={this.editorDidMount}
      />
    );
  }
}


export default Monaco;

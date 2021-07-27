import React from "react";
import MonacoEditor from 'react-monaco-editor';
// import AceEditor from 'react-ace';

class Settings extends React.Component {
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
  render(props) {
    return (
      <div className="Settings">
        <h2 className="Header">Custom css editor</h2>
        <div>
           <MonacoEditor
             width="calc(100% - 2rem - 4px)"
             height="600"
             language="css"
             theme="vs-dark"
             value={localStorage.getItem('custom__css')}
             onChange={this.onChange}
             editorDidMount={this.editorDidMount}
           />
        </div>
      </div>
    );
  }
}
// AceEditor if monaco gets annoying
// <div className="hidden">
//   <AceEditor
//     placeholder=""
//     mode="css"
//     theme="monokai"
//     name="AceEditor"
//     onChange={null}
//     fontSize={13}
//     showPrintMargin={true}
//     showGutter={true}
//     highlightActiveLine={true}
//     value={localStorage.getItem('custom__css')}
//     setOptions={{
//         tabSize: 2,
//     }
//   }/>
// </div> 

export default Settings;

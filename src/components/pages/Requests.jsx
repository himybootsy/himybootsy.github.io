import React from "react";

import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-monokai";

function Requests() {
  return (
    <div className="Requests">
        <div id="id">
            <h2 className="Header">Author</h2>
            <input type="text" />
        </div>
        <div id="Name">
            <h2 className="Header">Snippet Name</h2>
            <input type="text" />
        </div>
        <div id='css'>
            <h2 className="Header">Snippet CSS</h2>
                <AceEditor
                    placeholder=""
                    mode="css"
                    theme="monokai"
                    name="AceEditor"
                    onChange={null}
                    fontSize={13}
                    showPrintMargin={true}
                    showGutter={true}
                    highlightActiveLine={true}
                    value={''}
                    setOptions={{
                        tabSize: 4,
                    }
                }/>
        </div>
        <div id='scss'>
            <h2 className="Header">Snippet SCSS</h2>
                <AceEditor
                    placeholder=""
                    mode="scss"
                    theme="monokai"
                    name="AceEditor"
                    onChange={null}
                    fontSize={13}
                    showPrintMargin={true}
                    showGutter={true}
                    highlightActiveLine={true}
                    value={''}
                    setOptions={{
                        tabSize: 4,
                    }
                }/>
        </div>
        <div id="warn">
            All submisions must be under 4k characters each
        </div>
        <button id="submit">submit</button>
    </div>
  );
}

export default Requests;

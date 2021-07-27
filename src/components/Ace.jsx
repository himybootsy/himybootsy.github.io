import React from 'react';

// Import Brace and the AceEditor Component
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-monokai";

class Ace extends React.Component {
    constructor(props, context) {
        super(props, context);
        
        this.onChange = this.onChange.bind(this);
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
            <div>
                <AceEditor
                    placeholder=""
                    mode="css"
                    theme="monokai"
                    name="AceEditor"
                    onChange={this.onChange}
                    fontSize={13}
                    showPrintMargin={true}
                    showGutter={true}
                    highlightActiveLine={true}
                    value={localStorage.getItem('custom__css')}
                    setOptions={{
                        tabSize: 4,
                    }
                }/>
            </div>
        )
    }
}

export default Ace;

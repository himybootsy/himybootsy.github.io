import React from "react";
import { CodeBlock, vs2015 } from "react-code-blocks";
import { CopyToClipboard } from 'react-copy-to-clipboard';


function SnippetCard(props) {
    return (
        <div className="snippetcard">
            <div>
                <h2>{props.name} | {props.author}</h2>
            </div>
            <CodeBlock
                text={props.code}
                language='css'
                theme={vs2015}
            />
            <CopyToClipboard text={props.code}>
              <button>Copy</button>
            </CopyToClipboard>
        </div>
    );
}

export default SnippetCard;

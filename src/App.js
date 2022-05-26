import './App.css';
import React, {useState, useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMaximize} from '@fortawesome/free-solid-svg-icons';
import { marked } from 'marked';

marked.setOptions({
    breaks: true,
  });

  

function App() {

  const text = `# Custom Markdown Previewer

## Sub-heading...
### Other Possibilities:

Code, \`<div></div>\`, between 2 backticks.

\`\`\`
// Multi-line code:

function example(x, y) {
  if (x == '\`\`\`' && y == '\`\`\`') {
    return example;
  }
}
\`\`\`

Make text **bold**, _italic_, or **_both_**
Cross out text: ~~example~~.

[Links](https://www.linkedin.com/in/noah-haglund-5b9704198/)

> |Block Quotes!

Tables:

Header 1 | Header 2 | Header 3
------------ | ------------- | -------------
Content |  Content |  Content 
Content  |  Content  |  Content 

- Lists.
  - Bulleted.
     - Indentation levels.


1. Numbered lists
2. And finally, embedded images:

![Custom Image](https://picsum.photos/200)
`;

  const initialText = ""

  const [preview, setPreview] = useState(text) 
  const [expandEditor, setExpandEditor] = useState(false)
  const [expandPreviewer, setexpandPreviewer] = useState(false)
  const previewerZ = "0"

  const sendToPreview = (e) => {
    setPreview(e.target.value);
  };
  
  const expandEditorFxn = () => {
    setExpandEditor(!expandEditor);
  };

  const expandPreviewerFxn = () => {
    setexpandPreviewer(!expandPreviewer);
  };

  return (
    <div className="App">

      <div className='editorcontainer' style={expandPreviewer ? {position: "absolute",zIndex: "-1"} : {zIndex: "0"}}>
        <div id="editorheader">
          <h3>Editor</h3>
          <div><FontAwesomeIcon className="icon" icon={faMaximize} size={"1x"} onClick={() => expandEditorFxn()}/></div>
        </div>
        <textarea id="editor" style={expandEditor ? {height: "80vh"} : {zIndex: "0"}}defaultValue={preview} onChange={(e) => sendToPreview(e)}/>
      </div>

      <div className='previewcontainer' style={expandEditor ? {position: "relative",zIndex: "-1"} : {zIndex: "0"}}>
        <div id="previewheader">
          <h3>Previewer</h3>
          <div><FontAwesomeIcon className="icon" icon={faMaximize} size={"1x"} onClick={() => expandPreviewerFxn()}/></div>
        </div>
        <div id="preview" dangerouslySetInnerHTML={{ __html: marked.parse(preview) }}></div>
      </div>

    </div>
  );
}

export default App;

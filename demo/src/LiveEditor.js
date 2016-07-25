import React from 'react'

var CodeMirrorEditor = require("react-live-editor/code-mirror-editor");
var ComponentPreview = require("./live-compile");

require('./css/codemirror.css')
require('./css/syntax.css')
require('./css/react.css')

var ReactPlayground = React.createClass({
  propTypes: {
    codeText: React.PropTypes.string.isRequired
  },

  getInitialState: function() {
    return {
      code: this.props.codeText,
      showCode: false
    };
  },

  handleCodeChange: function(code) {
    this.setState({ code });
  },

  toggleShowCode(e){
    e.preventDefault()
    this.setState({
      showCode: !this.state.showCode
    })
  },

  render: function() {
    const {code, showCode} = this.state;


    return <div className="playground">
      <div className="playgroundPreview">
        <ComponentPreview code={code} />
      </div>
      <div className="playgroundCode" style={{display: showCode ? 'block' : 'none'}}>
        {showCode && <CodeMirrorEditor
                      onChange={this.handleCodeChange}
                      className="playgroundStage"
                      codeText={code}
                    />}
      </div>
      <button onClick={this.toggleShowCode} className={"playgroundCodeToggle c-link " + (showCode ? "open" : "closed")}>
        {showCode ? 'hide' : 'show'} code
      </button>
    </div>;
  },
});


module.exports = ReactPlayground;
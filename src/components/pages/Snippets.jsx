import React from "react";
import { SnippetCard, SassCss } from "../";

class Snippets extends React.Component {
  state = {
    content: null,
    mode: "css"
  }  

  async componentDidMount() {
    try {
      this.setState({
        content: await fetch('https://doggybootsy.github.io/snippets.json').then(res => res.json())
      });
    } catch (error) {
      console.error(error);
    }
  }


  render() {
    let mode = this.state.mode
    let data = this.state.content
    if (!data) return (
      <div className="Snippets">
        <p>Loading...</p>      
      </div>
    );

    return (
      <div className="Snippets">
          {Object.keys(data).map(key => <SnippetCard key={key} name={data[key].name} author={data[key].author} code={data[key][mode]} type="css"/>)}
          <div className="switchtype">
              <button onClick={
                  () => {
                    this.setState({mode: mode === "css" ? "scss" : "css"})
                  }
                }>
                <SassCss type={mode} />
              </button>
          </div>
      </div>
    );
  }
}

export default Snippets;

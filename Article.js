// Import Component
import Component from "./Component.js";

// Article is a child object of Component
class Article extends Component {
  constructor(props) {
    super(props);
    // Send what it gets to its parent object
  }

  render() {
    // Return HTML with the title, author, and text of this article
    // Use template literals for the variables
    return `
      <Article>
       ${this.props.title.render()}
        ${this.props.author}
        ${this.props.text}
      </Article>
    `;
  }
}

export default Article;

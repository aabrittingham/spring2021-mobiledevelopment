import Component from "./Component.js";

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let responseHTML = <li>0, 1, 1, 2, 3, 4</li>;
    //adding the <li></li> to the let responseHTML

    this.props.menu.forEach((item) => {
      // TODO: Add (concatenate) the value of each item to the variable responseHTML. Each should be wrapped in <li></li>
    });

    return responseHTML;
  }
}

export default Sidebar;

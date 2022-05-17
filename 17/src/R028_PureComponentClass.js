import React, { PureComponent } from "react";
class R028_PureComponentsClass extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      StateString: "react",
      StateArrayObj: ["react", { react: "200" }]
    };
  }
  buttionClick = (type) => {
    if (type === "String") {
      this.setState({ StateString: "react" });
    } else {
      this.setState({ StateArrayObj: ["react", { react: "200" }] });
    }
  };
  render() {
    console.log("render()실행");
    return (
      <div>
        <button onClick={(e) => this.buttionClick("String")}>문자열변경</button>
        <button onClick={(e) => this.buttionClick("ArrayObject")}>
          객체 배열 변경
        </button>
      </div>
    );
  }
}
export default R028_PureComponentsClass;

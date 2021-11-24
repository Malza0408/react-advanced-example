import logo from "./logo.svg";
import "./App.css";
import { Component, memo } from "react";
import { PureComponent } from "react";

// class Foo extends PureComponent {
//   // componentDidMount() {
//   //   console.log("Foo ComponentDidMount");
//   // }

//   // componentWillUnmount() {
//   //   console.log("Foo componentWillUnmount");
//   // }

//   // static getDerivedStateFromProps(nextProps, prevProps) {
//   //   console.log("Foo getDerivedStateFromProps", nextProps, prevProps);
//   //   return {};
//   // }

//   render() {
//     // console.log("Foo render : ", this.props.children);
//     console.log("Person render");
//     const { name, age } = this.props;
//     return (
//       <p>
//         {name} / {age}
//       </p>
//     );
//   }
// }

const Foo = memo(({ name, age }) => {
  console.log("Person render");
  return (
    <p>
      {name} / {age}
    </p>
  );
});

class App extends Component {
  state = {
    count: 0,
    text: "",
    persons: [
      {
        id: 1,
        name: "malza",
        age: 29,
      },
      {
        id: 2,
        name: "hana",
        age: 20,
      },
    ],
  };

  // componentDidMount() {
  //   setInterval(() => {
  //     this.setState({ count: this.state.count + 1 });
  //   }, 1000);
  // }
  render() {
    // 1초마다 rerendering 된다. div 태그와 span 태그는 다른 것이기 때문이다. 따라서 다른 트리를 만들어낸다.
    // if (this.state.count % 2 === 0) {
    //   return (
    //     <div>
    //       <Foo />
    //     </div>
    //   );
    // }

    // return (
    //   <span>
    //     <Foo />
    //   </span>
    // );

    // className 만 변하는 것을 확인 할 수 있다. 같은 Dom이기 때문에 attribute 만 바꿔준다.
    // if (this.state.count % 2 === 0) {
    //   return <div className="before" title="stuff" />;
    // }

    // return <div className="after" title="stuff" />;

    // 마찬가지로 inline Style 만 바뀌는 것을 볼 수 있다.
    // if (this.state.count % 2 === 0) {
    //   return <div style={{ color: "red", fontWeight: "bold" }} />;
    // }

    // return <div style={{ color: "green", fontWeight: "bold" }} />;

    // mount, unmount 가 아닌, getDerivedStateFromProps 가 호출된다.
    // if (this.state.count % 2 === 0) {
    //   return <Foo name="malza" />;
    // }

    // return <Foo name="Hana" />;

    // 얼핏 보기에는 first 가 앞에 들어오는 것이어야 하지만 react 는 그것을 모르기 때문에 third는
    // 계속해서 mount, unmount 한다.
    // if (this.state.count % 2 === 0) {
    //   return (
    //     <ul>
    //       <Foo key="2">second</Foo>
    //       <Foo key="3">third</Foo>
    //     </ul>
    //   );
    // }
    // // 위의 Dom 과 아래 Dom 을 연관지어주는 것이 바로 key! 서로 연관이 있다고 react 에게 알려줘야 한다.
    // // key를 주니까 first 가 mount, unmount 하는 것을 볼 수 있다.
    // return (
    //   <ul>
    //     <Foo key="1">first</Foo>
    //     <Foo key="2">second</Foo>
    //     <Foo key="3">third</Foo>
    //   </ul>
    // );

    const { text, persons } = this.state;
    if (this.state.count % 2 === 0) {
      return (
        <div>
          <input type="text" value={text} onChange={this._change} />
          <ul>
            {persons.map((person) => {
              return <Foo {...person} key={person.id} />;
            })}
          </ul>
        </div>
      );
    }
  }

  _change = (e) => {
    this.setState({ ...this.state, text: e.target.value });
  };
}

export default App;

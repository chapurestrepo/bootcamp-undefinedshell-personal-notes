import { useEffect, useState } from "react";

const log = (key) => console.log(`${key} ${new Date().getTime()}`);

const rootId = document.getElementById("AppEx");

export function AppEx() {
  const [seconts, setSeconts] = useState(60);
  
  const interval = setInterval(tick, 1000);

  function tick() {
    if (seconts >= 65) {
      clearInterval(interval);
        // TODO destruir
      return console.log("Es mayor");
    } else {
      setSeconts(seconts + 1);
      log("tick");
    }
  }


  useEffect(() => {
    interval;
    log("constructor");
  }, []);

  return (
    <>
      <div className="AppEx" id="AppEx">
        <h1>{seconts}</h1>
      </div>
    </>
  );
}

// export default class AppEx extends Component {
//   constructor() {
//     super();
//     this.state = { seconds: 60 };
//     this.tick = this.tick.bind(this);
//     log("constructor");
//   }

//   tick() {
//     if (this.state.seconds >= 65) {
//       clearInterval(this.interval);
//       ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this).parentNode);
//       return;
//     } else {
//       this.setState({ seconds: this.state.seconds + 1 });
//     }

//     log("tick");
//   }

//   componentDidMount() {
//     log("did mount");
//     this.interval = setInterval(this.tick, 1000);
//   }

//   componentWillUnmount() {
//     log("will unmount");
//   }

//   render() {
//     log("render");

//     return (
//       <div className="AppEx">
//         <h1>{this.state.seconds}</h1>
//       </div>
//     );
//   }
// }

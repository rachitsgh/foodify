import React from "react";
import  ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
// import Restaurant from "./components/Restaurant";


//header 
//   - Logo
//   - Nav item
//body
//   - search
//   - Restaurabt container
//        -restraun card
//footer
//   - copyright
//   - Links
//   - Address
//   - contact



//  inline style (not recommended)
// const style= {
//     backgroundColor:'#f0f0f0',
// };



const AppLayout = ()=>(
    <div className="App">
        <div className="high">
            <Header></Header>
            <Body></Body>
        </div>
    </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
// root.render(jsxHeading);

// root.render(HeadingComponent1); will not render   react componenet like this.

root.render(<AppLayout />);
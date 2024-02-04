import React from "react";
import  ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Restaurantmenu from "./components/Restaurantmenu";
import User from "./components/User";
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
            <Outlet/>
            {/* if path=/ */}
            {/* <Body/> */}
            {/* if path =/about */}
            {/* <About/> */}
            {/* if path = /contact */}
            {/* <Contact/> */}
        </div>
    </div>
);

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[{
            path:"/",
            element:<Body/>
        },
            {
                path:"/about",
                element:<About/>,
                children:[{
                    path:"profile",
                    element:<User/>
                }]
            },{
                path:"/contact",
                element:<Contact/>
            },{
                path:"/restaurants/:resId",
                element:<Restaurantmenu/>
            }
        ],
        errorElement:<Error/>,
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
// root.render(jsxHeading);

// root.render(HeadingComponent1); will not render   react componenet like this.

root.render(<RouterProvider router={appRouter} />);
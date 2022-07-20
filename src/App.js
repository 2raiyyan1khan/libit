import Layout from "./Containers/Layout";
import {Routes,Route} from "react-router-dom"
import Explore from "./Components/core/Explore";
import Categories from "./Components/core/Categories";
import MyLib from "./Components/core/MyLib/MyLib";

function App() {
  return (

     <Layout>
         <Routes>
             <Route exact path="/" element={<Explore/>}/>
             <Route exact path="/categories" element={<Categories/>}/>
             <Route exact path="/mylib" element={<MyLib/>}/>

         </Routes>

     </Layout>

  );
}

export default App;

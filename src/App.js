import "./App.css";

import Header from "./components/header/Header";
import Create from "./components/create/Create";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Create></Create>
            <Footer></Footer>
        </div>
    );
}

export default App;

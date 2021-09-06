import DataTable from "Components/DataTable";
import Footer from "Components/Footer";
import Navbar from "Components/Navbar";

function App() {
  return (
    <>
      <Navbar/>
      <div className="container">
        <DataTable/>
      </div>
      <Footer/>
    </>
  );
}

export default App;

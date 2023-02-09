import DropdownPage from "./Pages/DropdownPage";
import AccordionPage from "./Pages/AccordionPage";
import ButtonPage from "./Pages/ButtonPage";
import ModalPage from "./Pages/ModalPage";
import TablePage from "./Pages/TablePage";


function App() {
  return (
    <div className="App">
      <ButtonPage/>
      <br/>
      <AccordionPage/>
      <br/>
      <DropdownPage/>
      <br/>
      <TablePage/>
      <br/>
      <ModalPage/>
    </div>
  );
}

export default App;

import Header from "./components/Header";

function App() {
  const name = 'Giovanni'
  //use Header component
  return (
    <div className="container">
      <Header title={'Hello'}/> 
    </div>
    //You should put every thing inside in one element
  );
}

export default App;

import Top from './Top'
import "./style.css"
import AllInput from './All_input';

const App = () => {
  console.log("App");
  return (
    <div className="container">
      <Top />
      <AllInput />
    </div >
  );
};
export default App
import Higdemo from "./components/Higdemo";
import Higdemo1 from "./components/Higdemo1";
import UseMemo from "./components/UseMemo";
import Blog from "./components/Blog";
import News from "./components/Software";
import WithoutMemo from "./components/WithoutMemo";
import './App.css';
import X from "./components/X";
import A from "./components/A";
import Ref from "./components/RefHook"


function App() {
  return (
    <>
      <Higdemo />
      <Higdemo1 />
      <UseMemo />
      <Blog />
      <News />
      <WithoutMemo />
      <Ref/>
      <A />
      <X />
    </>
  );
}

export default App;

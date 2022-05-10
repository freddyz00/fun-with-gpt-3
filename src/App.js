import "./App.css";
import useLocalStorage from "./hooks/useLocalStorage";

import ResponsesList from "./components/ResponsesList";
import TextInput from "./components/TextInput";

function App() {
  const [responses, setResponses] = useLocalStorage([]);

  return (
    <div className="App">
      {/* left section */}
      <TextInput responses={responses} setResponses={setResponses} />

      {/* right section */}
      <ResponsesList responses={responses} setResponses={setResponses} />
    </div>
  );
}

export default App;

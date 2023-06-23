import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import Body from "./components/Body/Body.tsx";
import Title from "./components/Title/Title.tsx";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Body></Body>
    </QueryClientProvider>
  );
}

export default App;

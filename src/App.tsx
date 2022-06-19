import { FC } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";

const App: FC = () => {
  return (
    <Router>
      <Layout>
        <div>Hello</div>
      </Layout>
    </Router>
  );
};

export default App;

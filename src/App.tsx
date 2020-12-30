// src\App.tsx
import { Switch, Route } from "react-router-dom";
import Layout from "./components/layout/layout.component";
import EditMatch from "./pages/edit-match.page";
import Home from "./pages/home.page";
import MatchDetailed from "./pages/match-detailed.page";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/match" exact>
          <MatchDetailed />
        </Route>
        <Route path="/edit-match" exact>
          <EditMatch />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

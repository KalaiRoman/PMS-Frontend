import { Routes, Route } from "react-router-dom";
import PMSContant from "../constants/Routing-PMS-constant";
import ProtectedRouter from "../app/ProtectedRouter";
function RoutePoints() {
  return (
    <Routes>
      {PMSContant?.map((item, index) => {
        const Component = item.element;
        if (item.auth) {
          return (
            <Route
              key={index}
              path={item.path}
              element={<Component />}
            />
          );
        }
        else
        {
            <Route element={<ProtectedRouter/>}>
              <Route
              key={index}
              path={item.path}
              element={<Component />}
            />
            </Route>
        }
      })}
    </Routes>
  );
}

export default RoutePoints;
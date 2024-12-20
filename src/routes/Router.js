import { Navigate } from "react-router-dom";
import FullLayout from "../layouts/FullLayout/FullLayout.js";
import Dashboard1 from "../views/dashboards/Dashboard1.js";
import BasicTable from "../views/tables/BasicTable.js";
import ExAutoComplete from "../views/FormElements/ExAutoComplete.js";
import ExButton from "../views/FormElements/ExButton.js";
import ExCheckbox from "../views/FormElements/ExCheckbox.js";
import ExRadio from "../views/FormElements/ExRadio.js";
import ExSlider from "../views/FormElements/ExSlider.js";
import ExSwitch from "../views/FormElements/ExSwitch.js";
import FormLayouts from "../views/FormLayouts/FormLayouts.js";
import Target from "../views/kpi/Target.js";
import AddKPI from "../views/kpi/AddKPI.js";
import Personal from "../views/personal/Personal.js";
import KPIFake from "../views/kpi/KPIFake.js";
import TargetDetailWeightLoss from "../views/kpi/TargetDetailWeightLoss.js";
import TargetDetailWeightGain from "../views/kpi/TargetDetailWeightGain.js";
import TargetDetailHealthImprove from "../views/kpi/TargetDetailHealthImprove.js";
import Setting from "../views/Setting/Setting.js";
import UpdateProgress from "../views/update-progress/UpdateProgress.js";
import Login from "../views/login/LoginPage.js";
import SignUp from "../views/signup/SignupPage.js";
import AddAssignment from "../views/kpi/AddAssignment.js";
import LandingPage from "../views/landingPage/LandingPage.js";
import Statistics from "../views/Statistics/Statistics.js";

/*****Routes******/

const ThemeRoutes = [
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/app", element: <LandingPage /> },
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/app" /> },
      { path: "dashboards", exact: true, element: <Dashboard1 /> },
      { path: "tables/basic-table", element: <BasicTable /> },
      { path: "/form-layouts/form-layouts", element: <FormLayouts /> },
      { path: "/form-elements/autocomplete", element: <ExAutoComplete /> },
      { path: "/form-elements/button", element: <ExButton /> },
      { path: "/form-elements/checkbox", element: <ExCheckbox /> },
      { path: "/form-elements/radio", element: <ExRadio /> },
      { path: "/form-elements/slider", element: <ExSlider /> },
      { path: "/form-elements/switch", element: <ExSwitch /> },
      { path: "/target", element: <Target /> },
      { path: "/setting", element: <Setting /> },
      { path: "/kpi/add-kpi", element: <AddKPI /> },
      { path: "/kpi/add-success", element: <KPIFake /> },
      { path: "/target/detail1", element: <TargetDetailWeightLoss /> },
      { path: "/target/detail2", element: <TargetDetailWeightGain /> },
      { path: "/target/detail3", element: <TargetDetailHealthImprove /> },
      { path: "/update-progress", element: <UpdateProgress /> },
      { path: "/personal", element: <Personal /> },
      // { path: "/kpi/detail-add", element: <KPIDetailFake /> },
      { path: "/kpi/add-assignment", element: <AddAssignment /> },
      { path: "/", element: <Navigate to="/app" /> },
      { path: "statistics", element: <Statistics /> },
    ],
  },
];

export default ThemeRoutes;

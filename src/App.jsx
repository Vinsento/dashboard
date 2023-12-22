import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./config/Routes";
import Layout from "./components/Layout"
import { Customers } from "./components/Customers"
import { TempPage } from "./components/TempPage";
import "../styles/global.scss"

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={ROUTES.customers} element={<Customers />} />
        <Route path={ROUTES.dashboard} element={<TempPage message="We work hard! Very soon, you can see beatuful dashboard with all your statistics!" />} />
        <Route path={ROUTES.product} element={<TempPage message="Our trucks are on the way and very soon you will see our products!" />} />
        <Route path={ROUTES.wallet} element={<TempPage message="Oops... Looks like you don't have any income yet... Hmmm..." />} />
        <Route path={ROUTES.promote} element={<TempPage message="Sorry, but no discounts until the products arrive. Be patient." />} />
        <Route path={ROUTES.help} element={<TempPage message="Remember you can always call 911. Take care of yourself!" />} />
      </Routes>
    </Layout>
  )
}

export default App

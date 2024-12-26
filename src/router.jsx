import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./layout";
import HomePage from "./pages/HomePage";

export function Router() {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
        </Route>
    ))
    return router
}
import RootLayout from "@/layouts/root";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Suspense } from "react";
import { Shop } from "@/pages/shop";
import { About } from "@/pages/about";
import { paths } from "./routes";


export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path={paths.ROOT} element={<RootLayout />}>
            <Route path={paths.ABOUT} element={<Suspense fallback={'Loading...'}><About /></Suspense>} />
            <Route path={paths.SHOP} element={<Suspense fallback={'Loading...'}><Shop /></Suspense>} />
        </Route>
    ),
    {
        future: {
            v7_relativeSplatPath: true,
            v7_fetcherPersist: true,
            v7_normalizeFormMethod: true,
            v7_partialHydration: true,
            v7_skipActionErrorRevalidation: true,
        },
    }
);

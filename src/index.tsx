import React from "react";
import { createRoot } from "react-dom/client";
import { router } from "./routes/router";
import { RouterProvider } from "react-router-dom";

const root = document.getElementById("root");

if (!root) {
    throw new Error('root not found.');
}

const container = createRoot(root)

container.render(
    <RouterProvider router={router}/>
)
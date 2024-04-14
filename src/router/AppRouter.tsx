import React, { lazy, LazyExoticComponent, Suspense } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { ERouterPath } from "./_router.constants.ts"
import { TFCReturn } from "@/types/_common.types.ts"

const LazyPage = (Page: LazyExoticComponent<() => TFCReturn>): TFCReturn => (
  <Suspense fallback={<div>loading...</div>}>
    <Page />
  </Suspense>
)

const routerList = createBrowserRouter([
  {
    path: ERouterPath.HOME,
    element: LazyPage(lazy(() => import("../pages/HomePage"))),
  },
  {
    path: "*",
    element: LazyPage(lazy(() => import("../pages/404"))),
  },
])

export const AppRouter: React.FC = () => {
  return <RouterProvider router={routerList} />
}

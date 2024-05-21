import { useEffect } from "react";
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from "react-router-dom";

// @Views
import HomeView from "./views/HomeView";
import DashboardView, { DashboardLoader } from "./views/DashboardView";
import AuthView from "./views/AuthView";
import Content, { ContentLoader } from "./components/Tasks/Content";

import { ManagerProvider } from "./context/ManagerContext";
import NotFound from "./views/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<HomeView/>}/>
      <Route path="todo" element={<DashboardView/> } loader={DashboardLoader} >
        <Route path=":listId" element={<Content/>} loader={ContentLoader}/>
      </Route>
      <Route path="/login" element={<AuthView/>} />
      <Route path="/register" element={<AuthView/>} />
      <Route path="*" element={<NotFound/>} />
    </Route>
  )
)

function App() {
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    // if (window.location.pathname === '/todo') {
    //   window.location = '/todo/upcoming';
    // }
}, []);

  return (
        <main className={`w-screen h-screen overflow-hidden bg-slate-200 dark:bg-neutral-900 text-slate-900 dark:text-slate-100 transition-colors`}>
          <ManagerProvider>
            <RouterProvider router={router} />
          </ManagerProvider>
        </main>
  )
}

export default App

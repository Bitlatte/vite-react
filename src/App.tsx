import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './home/Home'

export const App = () => {

  const routes = [
    {
      path: '/',
      element: <Home />
    }
  ]

  return (
    <BrowserRouter>
      <Routes>
        {routes.map(route => (
          <Route path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}
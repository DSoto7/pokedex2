import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { DashboardPage } from './pages/dashboard';
import { MyCollection } from './pages/mycollection';
import { Details } from './pages/details';
import { Layout } from './pages/Layout';

import './App.css';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL ?? '/'}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<DashboardPage />} />
          <Route path="my-collection" element={<MyCollection />} />
          <Route path="about" element={<section>About Page</section>} />
          <Route path="/details/:code" element={<Details />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

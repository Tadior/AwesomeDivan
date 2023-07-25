import { Header } from '@/widgets/Header';
import { MainPage } from '@/pages/MainPage';
import { Footer } from '@/widgets/Footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import { ProductsPage } from '@/pages/ProductsPage';
import { ErrorPage } from '@/pages/ErrorPage';
import { ProductPage } from '@/pages/ProductPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: ':typeOfProduct',
    element: <ProductsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: ':typeOfProduct/:filterInfo',
    element: <ProductsPage />,
  },
  {
    path: ':typeOfProduct/:filterInfo/:productId',
    element: <ProductPage />,
  },
]);
const App = () => {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
};

export default App;

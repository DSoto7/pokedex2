// Page.jsx
import React from 'react';
import Navbar from './Navbar';

export default function Page({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}

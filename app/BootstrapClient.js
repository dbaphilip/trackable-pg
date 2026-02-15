'use client'; // This directive marks the component as a Client Component

import { useEffect } from 'react';

export default function BootstrapClient() {
  useEffect(() => {
    // Dynamically require the Bootstrap JS bundle inside useEffect
    // useEffect only runs on the client side after the initial render
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return null; // This component doesn't render anything itself
}

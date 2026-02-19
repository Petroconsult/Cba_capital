import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 p-4 text-center">
      <p>© {new Date().getFullYear()} CBA Capital. All rights reserved.</p>
    </footer>
  );
}

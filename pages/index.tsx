'use client';

import dynamic from 'next/dynamic';

const App = dynamic(() => import("../components/App"), {
  ssr: false,
  loading: () => <div>Carregando footer...</div>
});

export default function Home() {
  return <App />;
}

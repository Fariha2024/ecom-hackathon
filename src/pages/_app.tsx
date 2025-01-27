"use client";
//src/pages/_app.tsx
import { CartProvider } from '../app/components/cart-context'; // Import CartProvider
import { AppProps } from 'next/app'; // Import AppProps for proper typing
import { ErrorBoundary } from 'react-error-boundary'; // Import ErrorBoundary
//import '../styles/globals.css'; // Import global styles (if any)

// Error fallback component
function ErrorFallback({ error }: { error: Error }) {
  return (
    <div className="p-4 text-red-500">
      <h2>Something went wrong:</h2>
      <p>{error.message}</p>
    </div>
  );
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Component {...pageProps} />
      </ErrorBoundary>
    </CartProvider>
  );
}

export default MyApp;
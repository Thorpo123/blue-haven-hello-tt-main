
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log("Main.tsx is executing");

try {
  console.log("Attempting to find root element and render app");
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    console.error("Failed to find the root element");
  } else {
    console.log("Root element found, rendering app");
    createRoot(rootElement).render(<App />);
    console.log("App rendering completed");
  }
} catch (error) {
  console.error("Fatal error during app initialization:", error);
  // Try to display an error message on the page
  document.body.innerHTML = `
    <div style="color: red; text-align: center; margin-top: 50px;">
      <h1>Application Error</h1>
      <p>Failed to initialize the application. Please check the console for details.</p>
      <pre>${error instanceof Error ? error.message : String(error)}</pre>
    </div>
  `;
}

@import "tailwindcss" source("../");
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600&display=swap');

:root {
  --color-primary: #2CB67D;
  --color-secondary: #1F4E79;
  --color-accent: #00A6FB;
  --color-bg: #F4F6F8;
  --color-text: #1F2937;
}

* {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
  background-color: #F4F6F8;
  color: #1F2937;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Montserrat', sans-serif;
}

.glass {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.4);
}

.glass-dark {
  background: rgba(31, 78, 121, 0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

code {
  font-family: Menlo, Monaco, Consolas, 'Courier New', monospace;
}

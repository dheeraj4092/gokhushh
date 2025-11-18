#!/usr/bin/env node

// Direct Next.js startup without npm/pnpm
console.log('🚀 Starting Next.js development server...');

// Clear require cache
Object.keys(require.cache).forEach(key => delete require.cache[key]);

// Set environment
process.env.NODE_ENV = 'development';

// Import and start Next
try {
  const next = require('next');
  const app = next({ dev: true });
  const handle = app.getRequestHandler();
  
  app.prepare().then(() => {
    const http = require('http');
    
    http.createServer((req, res) => {
      handle(req, res);
    }).listen(3000, (err) => {
      if (err) throw err;
      console.log('✅ Server ready on http://localhost:3000');
    });
  }).catch(err => {
    console.error('❌ Error starting server:', err);
    process.exit(1);
  });
} catch (error) {
  console.error('❌ Failed to load Next.js:', error);
  process.exit(1);
}

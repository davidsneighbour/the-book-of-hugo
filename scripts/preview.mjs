import { createServer } from 'http';
import fs from 'fs';

const PORT = 3000;
const filePath = './hugo-book.md';

const server = createServer((req, res) => {
  if (req.url === '/') {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(content);
    } catch (err) {
      res.writeHead(500);
      res.end('Error loading book');
    }
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Preview server running at http://localhost:${PORT}`);
});

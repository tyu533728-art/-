import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('.', import.meta.url)));
const mimeTypes = {
  '.avif': 'image/avif',
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.webp': 'image/webp',
  '.xml': 'application/xml; charset=utf-8'
};

async function safeFile(url) {
  const requested = decodeURIComponent(url.pathname.replace(/^\/+/, ''));
  const candidate = resolve(root, requested || 'index.html');
  if (!candidate.startsWith(`${root}${sep}`) && candidate !== root) return null;

  try {
    const metadata = await stat(candidate);
    const file = metadata.isDirectory() ? resolve(candidate, 'index.html') : candidate;
    return mimeTypes[extname(file)] ? file : null;
  } catch {
    return null;
  }
}

const server = createServer(async (request, response) => {
  if (!['GET', 'HEAD'].includes(request.method)) {
    response.writeHead(405, { Allow: 'GET, HEAD' });
    response.end();
    return;
  }

  const url = new URL(request.url, 'http://localhost');
  if (url.pathname === '/') {
    response.writeHead(302, { Location: '/en/' });
    response.end();
    return;
  }

  const file = await safeFile(url);
  if (!file) {
    response.writeHead(404);
    response.end('Not found');
    return;
  }

  try {
    const body = await readFile(file);
    response.writeHead(200, { 'Content-Type': mimeTypes[extname(file)], 'X-Content-Type-Options': 'nosniff' });
    response.end(request.method === 'HEAD' ? undefined : body);
  } catch {
    response.writeHead(404);
    response.end('Not found');
  }
});

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const port = Number(process.env.PORT || 8088);
  server.listen(port, () => console.log(`V3.5 showcase website listening on http://127.0.0.1:${port}`));
}

export { server };

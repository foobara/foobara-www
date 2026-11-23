import { writeFileSync, mkdirSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { preview } from 'vite'
import puppeteer from 'puppeteer'
import { getRoutePaths } from './routes.ts'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const projectRoot = resolve(__dirname, '..')

// /blog -> blog/index.html so that both /blog and /blog/ are served the pre-rendered page
const pages = getRoutePaths().map((route) => ({
  route,
  outputPath: route === '/' ? 'index.html' : `${route.replace(/^\//, '')}/index.html`,
}))

pages.push({ route: '/404', outputPath: '404.html' })

const server = await preview({ root: projectRoot })
const outDir = resolve(projectRoot, server.config.build.outDir)
const serverUrl = server.resolvedUrls!.local[0]

const browser = await puppeteer.launch({
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
})

// Render everything before writing anything to deal with / prerendering
const rendered: { route: string; outputPath: string; html: string }[] = []

for (const { route, outputPath } of pages) {
  const page = await browser.newPage()

  await page.evaluateOnNewDocument(() => {
    document.addEventListener('prerender-ready', () => {
      ;(window as Window & { __prerenderReady?: boolean }).__prerenderReady = true
    })
  })

  await page.goto(new URL(route, serverUrl).href, { waitUntil: 'networkidle0' })
  await page.waitForFunction('window.__prerenderReady === true')

  await page.evaluate(() => {
    const walker = document.createTreeWalker(document.getElementById('root')!, NodeFilter.SHOW_TEXT)
    const textNodes: Node[] = []

    while (walker.nextNode()) {
      textNodes.push(walker.currentNode)
    }

    for (const textNode of textNodes) {
      if (textNode.nextSibling?.nodeType === Node.TEXT_NODE) {
        // This deals with an awkward hydration bug
        textNode.parentNode!.insertBefore(document.createComment(' '), textNode.nextSibling)
      }
    }
  })

  rendered.push({ route, outputPath, html: await page.content() })

  await page.close()
}

for (const { route, outputPath, html } of rendered) {
  const outputFile = resolve(outDir, outputPath)

  mkdirSync(dirname(outputFile), { recursive: true })
  writeFileSync(outputFile, html)
  console.log(`Pre-rendered ${route} -> ${server.config.build.outDir}/${outputPath}`)
}

await browser.close()
server.httpServer.close()
process.exit(0)

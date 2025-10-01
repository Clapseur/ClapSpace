import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div class="flex flex-col items-center justify-center min-h-screen">
    <!-- Logos section with Tailwind classes -->
    <div class="flex space-x-4 mb-6">
      <a href="https://vite.dev" target="_blank" class="transition-transform hover:scale-110">
        <img src="${viteLogo}" class="h-24 p-2" alt="Vite logo" />
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" class="transition-transform hover:scale-110">
        <img src="${javascriptLogo}" class="h-24 p-2" alt="JavaScript logo" />
      </a>
    </div>
    
    <h1 class="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
      Tailwind + 7.css Demo
    </h1>
    
    <!-- Tailwind CSS Examples -->
    <div class="mb-8 p-6 bg-gray-800 rounded-lg shadow-lg w-full max-w-md">
      <h2 class="text-2xl font-bold mb-4 text-center text-blue-400">Tailwind CSS</h2>
      <div class="grid grid-cols-2 gap-4">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Tailwind Button
        </button>
        <div class="bg-green-500 text-white p-4 rounded-lg text-center">
          Tailwind Card
        </div>
      </div>
    </div>
    
    <!-- 7.css Examples -->
    <div class="mb-8 p-6 w-full max-w-md">
      <h2 class="text-2xl font-bold mb-4 text-center">7.css</h2>
      <div class="window">
        <div class="title-bar">
          <div class="title-bar-text">Windows 7 Style</div>
          <div class="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>
        <div class="window-body">
          <p>This is styled with 7.css!</p>
          <div class="field-row">
            <button id="counter" type="button">Counter Button</button>
          </div>
        </div>
      </div>
    </div>
  </div>
`

setupCounter(document.querySelector('#counter'))

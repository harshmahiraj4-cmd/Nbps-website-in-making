const fs = require('fs');
let file = fs.readFileSync('app/page.tsx', 'utf8');

// Replace classes
file = file.replace(/text-blue-950(?!\/| dark)/g, 'text-blue-950 dark:text-blue-50');
file = file.replace(/text-blue-950\/70/g, 'text-blue-950/70 dark:text-blue-100/70');
file = file.replace(/text-on-surface-variant(?!\s*dark)/g, 'text-on-surface-variant dark:text-gray-300');
file = file.replace(/text-secondary(?!\s*dark|-)/g, 'text-secondary dark:text-amber-400');
file = file.replace(/bg-surface-container-low(?!\s*dark)/g, 'bg-surface-container-low dark:bg-gray-800');
// In the Quick Links section, there's text-blue-950 that will be replaced.
// For the icons in Quick Links: text-4xl text-blue-950 dark:text-blue-50 -> this is fine.
// The hover state: bg-surface-container-low dark:bg-gray-800 hover:bg-secondary-container
// wait, hover:bg-secondary-container dark:hover:bg-gray-700
file = file.replace(/hover:bg-secondary-container(?!\s*dark)/g, 'hover:bg-secondary-container dark:hover:bg-gray-700');
file = file.replace(/group-hover:text-blue-950(?!\s*dark)/g, 'group-hover:text-blue-950 dark:group-hover:text-blue-50');

fs.writeFileSync('app/page.tsx', file);
console.log('Fixed app/page.tsx');

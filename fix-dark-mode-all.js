const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  let file = fs.readFileSync(filePath, 'utf8');
  const orig = file;

  file = file.replace(/text-blue-950(?!\/| dark)/g, 'text-blue-950 dark:text-blue-50');
  file = file.replace(/text-blue-950\/70(?!\s*dark)/g, 'text-blue-950/70 dark:text-blue-100/70');
  file = file.replace(/text-on-surface-variant(?!\s*dark)/g, 'text-on-surface-variant dark:text-gray-300');
  file = file.replace(/text-secondary(?!\s*dark|-)/g, 'text-secondary dark:text-amber-400');
  file = file.replace(/bg-surface-container-low(?!\s*dark)/g, 'bg-surface-container-low dark:bg-gray-800');
  
  // Quick fix for the group-hover regex replacement error from earlier if we ran this on other pages
  // Actually, we don't need to do anything complex, just standard string replacements
  
  if (file !== orig) {
    fs.writeFileSync(filePath, file);
    console.log('Fixed', filePath);
  }
}

const files = [
  'app/academics/page.tsx',
  'app/admissions/page.tsx',
  'app/contact/page.tsx',
  'app/gallery/page.tsx',
  'app/student-life/page.tsx'
];

files.forEach(f => {
  if (fs.existsSync(f)) {
    processFile(f);
  }
});

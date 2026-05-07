const fs = require('fs');

function undoFile(filePath) {
  let file = fs.readFileSync(filePath, 'utf8');
  const orig = file;

  file = file.replace(/ dark:text-blue-50/g, '');
  file = file.replace(/ dark:text-blue-100\/70/g, '');
  file = file.replace(/ dark:text-gray-300/g, '');
  file = file.replace(/ dark:text-amber-400/g, '');
  file = file.replace(/ dark:bg-gray-800/g, '');
  file = file.replace(/ dark:group-hover:text-blue-50/g, '');
  file = file.replace(/ dark:group-hover:text-amber-400/g, '');

  if (file !== orig) {
    fs.writeFileSync(filePath, file);
    console.log('Undid', filePath);
  }
}

const files = [
  'app/page.tsx',
  'app/academics/page.tsx',
  'app/admissions/page.tsx',
  'app/contact/page.tsx',
  'app/gallery/page.tsx',
  'app/student-life/page.tsx'
];

files.forEach(f => {
  if (fs.existsSync(f)) {
    undoFile(f);
  }
});

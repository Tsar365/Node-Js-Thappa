const path = require('path');

// console.log(__dirname); // Output: D:\node js thappa
// console.log(__filename); // Output: D:\node js thappa\path_module.js

const filePath = path.join(__dirname, 'test', 'file.txt');
// console.log(filePath); // Output: D:\node js thappa\test\file.txt


const parseData = path.parse(filePath);
const resolvedPath = path.resolve(filePath);
const extname = path.extname(filePath);
const basename = path.basename(filePath);
const dirname = path.dirname(filePath);

console.log({ parseData, resolvedPath, extname, basename, dirname });
// {
//   parseData: {
//     root: 'D:\\',
//       dir: 'D:\\node js thappa\\test',
//         base: 'file.txt',
//           ext: '.txt',
//             name: 'file'
//   },
//   resolvedPath: 'D:\\node js thappa\\test\\file.txt',
//     extname: '.txt',
//       basename: 'file.txt',
//         dirname: 'D:\\node js thappa\\test'
// }

// Set up babel compiling
require('babel-core/register');

// Require in the ES6 module library. babel-core/register _should_ handle the transpiling
require('../mirage').default;
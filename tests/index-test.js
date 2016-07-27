
import expect from 'expect'
import expectJSX from 'expect-jsx';

require('../src') // Import everything to fix coverage

expect.extend(expectJSX);

require('./Button.unit.js')
require('./Toggle.unit.js')

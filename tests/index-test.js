
import expect from 'expect'
import expectJSX from 'expect-jsx';

require('../src') // Import everything to fix coverage

expect.extend(expectJSX);

require('./Alert.unit.js')
require('./Badge.unit.js')
require('./Button.unit.js')
require('./Heading.unit.js')
require('./Tab.unit.js')
require('./Toggle.unit.js')

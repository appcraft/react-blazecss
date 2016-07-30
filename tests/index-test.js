
import expect from 'expect'
import expectJSX from 'expect-jsx';

require('../src') // Import everything to fix coverage

expect.extend(expectJSX);

require('./Alert.unit.js')
require('./Badge.unit.js')
require('./Blockquote.unit.js')
require('./Button.unit.js')
require('./Calendar.unit.js')
require('./Container.unit.js')
require('./Drawer.unit.js')
require('./DropdownButton.unit.js')
require('./Grid.unit.js')
require('./Heading.unit.js')
require('./List.unit.js')
require('./Menu.unit.js')
require('./Nav.unit.js')
require('./Overlay.unit.js')
require('./P.unit.js')
require('./Pagination.unit.js')
require('./Tab.unit.js')
require('./Table.unit.js')
require('./Tag.unit.js')
require('./Toggle.unit.js')

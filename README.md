# React BlazeCSS

[![Travis][build-badge]][build]
[![react-blazecss][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://raw.githubusercontent.com/appcraft/react-blazecss/master/LICENSE.md)

React components for BlazeCSS

[build-badge]: https://img.shields.io/travis/appcraft/react-blazecss/master.svg?style=flat-square
[build]: https://travis-ci.org/appcraft/react-blazecss

[npm-badge]: https://img.shields.io/npm/v/react-blazecss.svg?style=flat-square
[npm]: https://www.npmjs.org/package/react-blazecss

[coveralls-badge]: https://img.shields.io/coveralls/appcraft/react-blazecss/master.svg?style=flat-square
[coveralls]: https://coveralls.io/github/appcraft/react-blazecss

![Preview](doc/example.png?raw=true "Preview")

Please visit the [demo/documentation website](https://appcraft.github.io/react-blazecss/), it has live code and preview so is perfect for testing and playing around.

## Installation

`npm install react-blazecss --save`

Please note that this is an early and experimental release. Most components should work perfectly fine but the API might change over time.

Note that ReactBlazeCSS doesn't include any CSS by default, so you'll have to manually add BlazeCSS. This is done so that you can use custom builds or themes if required.

Add the following to your `<head></head>` :
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/blazecss/latest/blaze.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/blazecss/latest/blaze.animations.min.css">
```

or just `npm install blaze` and :
```javascript
require('blaze/dist/blaze.min.css')
require('blaze/dist/blaze.animations.min.css')
```

## Usage

All of the components are directly exposed by `react-blazecss`. 
```javascript
import { Drawer, Menu, MenuItem, H4 } from 'react-blazecss'
```

and use 

```javascript
<Drawer shadow="high" visible>
  <H4>Drawer header</H4>
  <Menu>
    <MenuItem>Menu 1</MenuItem>
    <MenuItem>Menu 2</MenuItem>
  </Menu>
  <DrawerBody>Drawer body</DrawerBody>
</Drawer>
```

If you don't want to include all of ReactBlazeCSS, you can also do selective imports :

```javascript
import { Drawer } from 'react-blazecss/Drawer'
import { Menu, MenuItem } from 'react-blazecss/Menu'
import { H4 } from 'react-blazecss/Heading'
```

## Why ?

[BlazeCSS](http://blazecss.com/) is a clean Open source modular CSS framework.

It's key selling features are already on their website, but an important aspect for us is that it's *opt-in* and won't take control of the rest of the design.

It's also pure CSS, and additional behavior (for tabs, etc.) can be added cleanly in React.

However, the main goal is for react-blazecss to remain a *simple* wrapper for BlazeCSS. More complex components will be released as separate packages to avoid bloating the core package (for example a plug'n'play Calendar component using moment.js).

## Implemented Components (more coming soon)

- Alerts
- Badges
- Blockquotes
- Bubbles
- Buttons
- Calendars
- Cards
- Containers
- Drawers
- DropdownButtons (WIP)
- Grids
- Headings
- Images
- Lists
- Menus
- Modals
- Navs
- Overlays
- Pagination
- Tables
- Tabs
- Tags
- Toggles
- Trees

## Example

The following code was used to render the previous screenshot.

```javascript
<div>
  <Nav inline>
    <NavContent centered>My APP</NavContent>
    <NavItem bStyle="success" active>Home</NavItem>
    <NavItem right>Menu</NavItem>
    <NavItem right bStyle="primary">Settings</NavItem>
  </Nav>
  <Grid>
    <Cell md="50" sm="100">
      <Tabs defaultActiveKey={1} animate bStyle="primary">
        <Tab eventKey={1} title="Tab 1">
            Tab 1 content, with useless buttons :<br />
            <ButtonGroup rounded>
                <Button bStyle="success">Action 1</Button>
                <Button bStyle="success" ghost>Action 2</Button>
            </ButtonGroup>
        </Tab>
        <Tab eventKey={2} title={<span>Tab 2 <Badge>click me</Badge></span>}>
            Tab 2, pretty much empty
        </Tab>
        <Tab eventKey={3} title="Tab 3" disabled>Tab 3 content</Tab>
      </Tabs>
    </Cell>
    <Cell md="50" sm="100">
      <H3 size="medium">
        <Toggle bStyle="primary" style={{float: 'right'}} />
        Notifications
      </H3>
      <Alerts>
        <Alert bStyle="primary">Primary alert</Alert>
        <Alert bStyle="secondary">Secondary alert</Alert>
        <Alert bStyle="error">Error !</Alert>
      </Alerts>
      </Cell>
  </Grid>
</div>
```

## License

Licensed under the MIT license

Made with ♥ by [@GregoryPotdevin](https://twitter.com/GregoryPotdevin) at [AppCraft](http://www.appcraft.fr/)

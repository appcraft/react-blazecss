# react-blazecss

[![Travis][build-badge]][build]
[![react-blazecss][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

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

## Why ?

[BlazeCSS](http://blazecss.com/) is a clean Open source modular CSS framework.

It's key selling features are already on their website, but an important aspect for us is that it's *opt-in* and won't take control of the rest of the design.

It's also pure CSS, and additional behavior (for tabs, etc.) can be added cleanly in React.

However, the main goal is for react-blazecss to remain a *simple* wrapper for BlazeCSS. More complex components will be released as separate packages to avoid bloating the core package (for example a plug'n'play Calendar component using moment.js).

## Implemented Components (more coming soon)

- Alerts
- Badges
- Buttons
- Calendars
- Grids
- Headings
- Lists
- Navs
- Tables
- Tabs
- Tags
- Toggles
- Trees

## Example

The following code was used to render the previous screenshot.

```
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

MIT

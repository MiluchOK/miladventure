/**
 * Created by amilyukov on 6/6/17.
 */

import Hello from 'components/hello.jsx';
import NavBar from 'components/nav_bar.jsx';
import WebpackerReact from 'webpacker-react';

WebpackerReact.setup({Hello, NavBar});
// {Hello} is short for {Hello: Hello}
// can pass multiple components here: {Hello, Goodbye}
// you're just registering them for react_component('foo')

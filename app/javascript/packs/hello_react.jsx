// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import Button from 'react-bootstrap/lib/Button';

class Hello extends React.Component {
    render() {
        return(
            <div>
                Hello {this.props.name}!
                <Button bsStyle="primary" bsSize="large">Large button</Button>
            </div>
        )
    }
}

document.addEventListener("DOMContentLoaded", e => {
    ReactDOM.render(<Hello name="Miladventure" />, document.body.appendChild(document.createElement('div')))
})

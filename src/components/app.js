'use strict';

// The App component should set up the Provider for the redux store and the Router.

'use strict';

import './style/main.scss';

import React from 'react';
import ReactDom from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux';

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        store.subscribe( ()=>console.log("__STORE__", store.getState()) );
    }

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Provider>
        )
    }

}

ReactDom.render(<App />, document.getElementById('root'));

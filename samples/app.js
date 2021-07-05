'use strict';

const { h, render } = window.preact;
// import { h } from 'preact';

render((
    h('div', { 'id': 'foo' },
        h('span', null, 'hello, preact'),
    )
), document.body);

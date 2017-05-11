import { assert } from 'chai';

import { mount } from 'enzyme';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import controlledFocus from '../src';

const container = document.createElement('div');
document.body.appendChild(container);

type InputProps = React.HTMLAttributes<HTMLInputElement>;
const Input = (props: InputProps) => <input {...props} />;
const ControlledFocusInput = controlledFocus(Input);

describe('controlledFocus()', () => {

    it('should focus on mount if focus=true', () => {
        const wrapper = mount(<ControlledFocusInput focus={true} />, { attachTo: container });
        assert.equal(ReactDOM.findDOMNode(wrapper.instance()), document.activeElement);
    });

    it('should not focus on mount if focus=false', () => {
        const wrapper = mount(<ControlledFocusInput focus={false} />, { attachTo: container });
        assert.notEqual(ReactDOM.findDOMNode(wrapper.instance()), document.activeElement);
    });

});

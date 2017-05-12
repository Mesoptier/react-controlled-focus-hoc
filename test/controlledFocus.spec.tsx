import * as chai from 'chai';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';

import { mount } from 'enzyme';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import controlledFocus from '../src';

const { expect } = chai;
chai.use(sinonChai);

const container = document.createElement('div');
document.body.appendChild(container);

type InputProps = React.HTMLAttributes<HTMLInputElement>;
const Input = (props: InputProps) => <input {...props} />;
const ControlledFocusInput = controlledFocus(Input);

describe('controlledFocus()', () => {

    it('should focus on mount if focus=true', () => {
        const wrapper = mount(<ControlledFocusInput focus={true} />, { attachTo: container });
        expect(ReactDOM.findDOMNode(wrapper.instance())).to.equal(document.activeElement);
        wrapper.detach();
    });

    it('should not focus on mount if focus=false', () => {
        const wrapper = mount(<ControlledFocusInput focus={false} />, { attachTo: container });
        expect(ReactDOM.findDOMNode(wrapper.instance())).to.not.equal(document.activeElement);
        wrapper.detach();
    });

    it('should call changeFocus with true when input is focused', async () => {
        const spy = sinon.spy();

        const wrapper = mount(<ControlledFocusInput changeFocus={spy} />, { attachTo: container });
        wrapper.simulate('focus');

        expect(spy).to.be.calledOnce;
        expect(spy).to.be.calledWith(true);
        wrapper.detach();
    });

    it('should call changeFocus with false when input is blurred', async () => {
        const spy = sinon.spy();

        const wrapper = mount(<ControlledFocusInput changeFocus={spy} />, { attachTo: container });
        wrapper.simulate('focus');
        spy.reset();
        wrapper.simulate('blur');

        expect(spy).to.be.calledOnce;
        expect(spy).to.be.calledWith(false);
        wrapper.detach();
    });

});

import * as React from 'react';
import * as ReactDOM from 'react-dom';

type ReactComponent<P> = React.ComponentClass<P> | React.StatelessComponent<P>;

interface ControlledFocusProps {
    focus: boolean;
    changeFocus?: (focus: boolean) => void;
}

export default function controlledFocus<P>(Component: ReactComponent<P>) {
    return class ControlledFocus extends React.Component<ControlledFocusProps & P, {}> {

        private node: any;

        public componentDidMount() {
            this.node = ReactDOM.findDOMNode(this);
            this.updateFocus();
        }

        public componentDidUpdate() {
            this.updateFocus();
        }

        public render() {
            const { focus, changeFocus, ref, onFocus, onBlur, ...otherProps } = this.props as any;
            return <Component onFocus={this.handleFocus} onBlur={this.handleBlur} {...otherProps} />;
        }

        private updateFocus = () => {
            if (this.props.focus) {
                this.node.focus();
            } else {
                this.node.blur();
            }
        }

        private handleFocus = (e: React.FocusEvent<any>) => {
            if (this.props.changeFocus) {
                this.props.changeFocus(true);
            }

            this.updateFocus();
        }

        private handleBlur = (e: React.FocusEvent<any>) => {
            if (this.props.changeFocus) {
                this.props.changeFocus(false);
            }

            this.updateFocus();
        }

    };
}

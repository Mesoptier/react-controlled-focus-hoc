import * as React from 'react';

type ReactComponent<P> = React.ComponentClass<P> | React.StatelessComponent<P>;

interface ControlledFocusProps {
    focus: boolean;
    changeFocus: (focus: boolean) => void;
}

export default function controlledFocus<P>(Component: ReactComponent<P>) {
    return class ControlledFocus extends React.Component<ControlledFocusProps & P, {}> {

        private node: any;

        public componentDidMount() {
            this.updateFocus();
        }

        public render() {
            const { focus, changeFocus, ref, onFocus, onBlur, ...otherProps } = this.props as any;
            return <Component ref={this.setRef} onFocus={this.handleFocus} onBlur={this.handleBlur} {...otherProps} />;
        }

        private updateFocus() {
            if (this.props.focus) {
                this.node.focus();
            } else {
                this.node.blur();
            }
        }

        private setRef(ref: any) {
            this.node = ref;
        }

        private handleFocus(e: React.FocusEvent<any>) {
            this.props.changeFocus(true);
        }

        private handleBlur(e: React.FocusEvent<any>) {
            this.props.changeFocus(false);
        }

    };
}

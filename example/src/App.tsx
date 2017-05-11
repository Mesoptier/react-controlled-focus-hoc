import * as React from 'react';

import controlledFocus from '../../src';

type InputProps = React.HTMLAttributes<HTMLInputElement>;
const Input = (props: InputProps) => <input {...props} />;
const ControlledFocusInput = controlledFocus(Input);

interface AppState {
    focus: boolean;
}

export default class App extends React.Component<{}, AppState> {

    constructor() {
        super();

        this.state = {
            focus: false,
        };
    }

    public render() {
        return (
            <div>
                <button onClick={this.focus}>Focus</button>
                <button onClick={this.unfocus}>Unfocus</button>
                <ControlledFocusInput focus={this.state.focus} />
            </div>
        );
    }

    private focus = () => this.changeFocus(true);
    private unfocus = () => this.changeFocus(false);

    private changeFocus = (focus: boolean) => {
        this.setState({ focus });
    }

}

> Work in progress!


# react-controlled-focus-hoc

A higher order React component to control the focus of an element like you would control its value.

### Example usage

```typescript
import controlledFocus from 'react-controlled-focus-hoc';

const Input = (props) => <input {...props} />;
const ControlledFocusInput = controlledFocus(Input);

class Example extends React.Component {
    
    constructor() {
        super();
        
        this.state = { focus: false };
    }
    
    render() {
        return (
            <ControlledFocusInput 
                focus={this.state.focus} 
                onChangeFocus={(focus) => this.setState({ focus })}
            />
        );
    }
    
}
```

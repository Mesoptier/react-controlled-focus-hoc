import * as React from 'react';

import controlledFocus from '../src';

const Input = (props) => <input {...props} />;
const ControlledFocusInput = controlledFocus(Input);


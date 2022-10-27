import React, { useState, useRef } from 'react'
import useInputs from '../useInputs';

const RadioButtons = ({inputs, onChange}) => {
    const [value, setValue] = useState();
    const [activeInputIndex, setActiveInputIndex] = useState();
    let inputsHook = useInputs(inputs, onChange, (i) => activeInputIndex === i);

  return (
    <div>
        {
            inputsHook.inputs.map(
                (input, i) => (
                    <div key={i}>
                        <input type="radio" checked={activeInputIndex === i} onClick={() => {
                            setActiveInputIndex(i);
                            setValue(inputsHook.values[i]);
                            onChange(inputsHook.values[i]);
                        }}/>{input}
                    </div>
                )
            )
        }
    </div>
  )
}

export default RadioButtons
import React from 'react'

const Options = (props) => {

// destructuring props
const { options, questionId } = props;

return (
  <ul>
    {options && options.map((option, index)=>(
        <li key={index}>
          <input type="radio"
            name={questionId}
            value={option}
          />{option}
        </li>
    ))}
  </ul>
)

}

export default Options;

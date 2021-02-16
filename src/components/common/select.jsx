import React from 'react';

const Select = ({name, label, options, error, ...rest}) => {
 return (
  <div className="form-group">
   <label htmlFor={name}>{label}</label>
   <select name={name} id={name} {...rest} className="form-control">
   <option value="" />
   {options.map(option => (
    <option value={option._id} key={option._id}> {option.name}</option>
   ))}
   </select>
  </div>
   );
};
 
export default Select;
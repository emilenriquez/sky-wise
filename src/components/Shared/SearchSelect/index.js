/**
 * cacheOptions: When set to true, it enables caching of the loaded options, which helps in improving performance by avoiding redundant requests for the same options.
   defaultOptions: When set to true, it allows the component to render a set of default options while the asynchronous loading is in progress. This can provide a better user experience by displaying initial options without waiting for the load to complete.
   loadOptions: This is a function that takes an input value as a parameter and returns a promise that resolves to an array of options. The loadOptions function is responsible for asynchronously loading the options based on the input value entered by the user. In the provided code, the promiseOptions function serves as the loadOptions function.

   Option keys:
    value (required): Represents the unique value of the option. It is typically a string or a number.
    label (required): Displays the text label for the option. It can be a string or JSX.
    disabled (optional): Indicates whether the option should be disabled or not. It should be a boolean value (true or false).
    isFixed (optional): Indicates whether the option should be fixed and not removable. It should be a boolean value (true or false).
    isSelected (optional): Indicates whether the option is selected. It should be a boolean value (true or false).
    className (optional): Specifies the class name for styling purposes.
 */

    'use client';


import { rest } from 'lodash';
    import AsyncSelect from 'react-select/async';

    const customStyles = {

    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#ddd' : 'white',
      color: state.isSelected ? '#333' : '#000',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#f7f7f7',
      },
    }),
  };

    const SearchSelect = ({ isMultiple=false, fetchOptions, onChange, value, isLoading, defaultOptions, ...rest }) => {

      return (
        <AsyncSelect
          isMulti={isMultiple}
          cacheOptions
          loadOptions={fetchOptions}
          defaultOptions={defaultOptions}
          isLoading={isLoading}
          onChange={onChange}
          value={value}
          styles={{
            option: (baseStyles, state) => ({
              ...baseStyles,
              fontWeight: state.isSelected ? 'bold' : 'initial',
              opacity: state.isFocused ? 0.8  : 1,
              color: '#343434',
              backgroundColor: state.isSelected || state.isFocused ? '#84FFFF' : baseStyles.backgroundColor
            }),
          }}
          className='w-full' // TODO: should be coming from the param
          {...rest}
        />
      );
    };

    export default SearchSelect;
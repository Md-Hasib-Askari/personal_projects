import React from 'react';

function InputBox({id, label, placeholder, type}) {
    return (
        <div>
            <label htmlFor={id}
                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                {label}
            </label>
            <input type={type} id={id}
                   className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                   placeholder={placeholder} required/>
        </div>
    );
}

export default InputBox;
import React from 'react';

function Toolbar({onSelectFilter, filters, selected}) {
    return (
        <div className='btn__container'>
            {filters.map((item, key) => (
                <button key={key} className={item === selected ? 'btn btn__active' : 'btn'} onClick={onSelectFilter}>{item}</button>
            ))}
        </div>
    );
}

export default Toolbar;

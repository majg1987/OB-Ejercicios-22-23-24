import React from 'react';
import FilterContainer from '../container/FilterContainer';

const FilterOptions = () => {
    return (
        <div className='filters'>
            {/* Filter Containers */}
            <FilterContainer filter='SHOW_ALL'>
                All
            </FilterContainer>         
            <FilterContainer filter='SHOW_ACTIVE'>
                Active
            </FilterContainer>         
            <FilterContainer filter='SHOW_COMPLETED'>
                Complete
            </FilterContainer>         
        </div>
    );
}

export default FilterOptions;

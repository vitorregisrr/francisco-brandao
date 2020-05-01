import React from 'react'
import Pagination from "react-paginate"

import './styles.scss'

const GaleriaPagination = ({changePage, totalItems, currPage}) => {
    
    const onPageChange = (id) => {
        changePage(id);
    }

    return (
        <Pagination
            pageCount={totalItems}
            pageRangeDisplayed={4}
            marginPagesDisplayed={0}
            containerClassName="pagination"
            nextLabel="Próximo"
            previousLabel="Anterior"
            itemClassFirst='first'
            itemClassLast='last'
            itemClassPrev="prev"
            itemClassNext="next"
            forcePage={currPage}
            onPageChange={(item) => onPageChange(item.selected + 1)}
        />
    )
}

export default GaleriaPagination
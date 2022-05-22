import React, { useRef } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";

const Pagination = () => {
    const pagination = useRef();

    console.log(pagination);

    const perPage = 25;

    const setPage = ({ selected }) =>
        console.log(selected === 0 ? 1 : selected * perPage);

    return (

        <ReactPaginate
            ref={pagination}
            pageCount={Math.ceil(613 / 280)}
            pageRangeDisplayed={4}
            marginPagesDisplayed={1}
            onPageChange={setPage}
            containerClassName="pagination"
            activeClassName="active-pagination"
            pageLinkClassName="page-link"
            breakLinkClassName="page-link"
            nextLinkClassName="page-link"
            previousLinkClassName="page-link"
            pageClassName="page-item"
            breakClassName="page-item"
            nextClassName="page-item"
            previousClassName="page-item"
            previousLabel={<>&laquo;</>}
            nextLabel={<>&raquo;</>}
        />

    );
}

export default Pagination;

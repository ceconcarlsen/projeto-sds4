import React from "react";
import { SalePage } from "types/sale";

type Props = {
  page: SalePage;
  onPageChange: Function;
}

function Pagination({page, onPageChange}: Props) {
  return (
    <div className="d-flex row justify-content-center">
      <nav>
        <ul className="pagination d-flex flex-row">
          <li className={`page-item ${page.first ? 'disabled' : ''}`}>
            <button onClick={() => onPageChange(page.number-1)}className="page-link mr-3">Anterior</button>
          </li>
          <li className="page-item disabled">
            <span className="page-link">{page.number+1}</span>
          </li>
          <li className={`page-item ${page.last ? 'disabled' : ''}`}>
            <button onClick={() => onPageChange(page.number+1)} className="page-link ml-3">Próxima</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;

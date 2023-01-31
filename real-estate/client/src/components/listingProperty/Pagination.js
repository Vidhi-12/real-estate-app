// import "./Pagination.css";
import React from 'react';

const Pagination = ({ page, total, limit, setPage }) => {

  const totalPages = Math.ceil(total / limit);
  
// const Pagination = ({ page, pages, changePage }) => {
  let middlePagination;

  if (totalPages <= 5) {
    middlePagination = [...Array(totalPages)].map((_, idx) => (
      <button
        key={idx + 1}
        onClick={() => setPage(idx + 1)}
        disabled={page === idx + 1}
      >
        {idx + 1}
      </button>
    ));
  } else {
    const startValue = Math.floor((page - 1) / 5) * 5;

    middlePagination = (
      <>
        {[...Array(5)].map((_, idx) => (
          <button
            key={startValue + idx + 1}
            disabled={page === startValue + idx + 1}
            onClick={() => setPage(startValue + idx + 1)}
          >
            {startValue + idx + 1}
          </button>
        ))}

        <button>...</button>
        <button onClick={() => setPage(totalPages)}>{totalPages}</button>
      </>
    );

    if (page > 5) {
      if (totalPages - page >= 5) {
        middlePagination = (
          <>
            <button onClick={() => setPage(1)}>1</button>
            <button>...</button>
            <button onClick={() => setPage(startValue)}>{startValue}</button>
            {[...Array(5)].map((_, idx) => (
              <button
                key={startValue + idx + 1}
                disabled={page === startValue + idx + 1}
                onClick={() => setPage(startValue + idx + 1)}
              >
                {startValue + idx + 1}
              </button>
            ))}

            <button>...</button>
            <button onClick={() => setPage(totalPages)}>{totalPages}</button>
          </>
        );
      } else {
        let amountLeft = totalPages - page + 5;
        middlePagination = (
          <>
            <button onClick={() => setPage(1)}>1</button>
            <button>...</button>
            <button onClick={() => setPage(startValue)}>{startValue}</button>
            {[...Array(amountLeft)].map((_, idx) => (
              <button
                key={startValue + idx + 1}
                disabled={page === startValue + idx + 1}
                style={
                  totalPages < startValue + idx + 1 ? { display: "none" } : null
                }
                onClick={() => setPage(startValue + idx + 1)}
              >
                {startValue + idx + 1}
              </button>
            ))}
          </>
        );
      }
    }
  }

  return (
    totalPages > 0 && (
      <div className="pagination">
        <button
          className="pagination__prev"
          onClick={() => setPage((page) => page - 1)}
          disabled={page === 1}
        >
          &#171;
        </button>
        {middlePagination}
        <button
          className="pagination__next"
          onClick={() => setPage((page) => page + 1)}
          disabled={page === totalPages}
        >
          &#187;
        </button>
      </div>
    )
  );
};

export default Pagination;

// import styles from "../RealEstate.css";

// const Pagination = ({ page, total, limit, setPage }) => {

// 	const totalPages = Math.ceil(total / limit);
//   // const totalPages = parseInt(total / limit);

//   console.log(`tp: ${totalPages}  page: ${page}  total: ${total}  limit: ${limit} `);
// 	const onClick = (newPage) => {
// 		setPage(newPage + 1);
// 	};

// 	return (
// 		<div className="pagination">
// 			{totalPages > 0 &&
// 				[...Array(totalPages)].map((val, index) => (
// 					<button
// 						onClick={() => onClick(index)}
// 						className={
// 							page === index + 1
// 								? `${styles.page_btn} ${styles.active}`
// 								: styles.page_btn
// 						}
// 						key={index}
// 					>
// 						{index + 1}
// 					</button>
          
// 				))}
// 		</div>
// 	);
// };

// export default Pagination;
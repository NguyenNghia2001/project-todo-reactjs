import React, { useState, useEffect} from 'react'
import ReactPaginate from "react-paginate";

function NewsPage() {

  const [items, setItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  let limit = 10;
  console.log(items ,'011' )

  useEffect(() => {
    const getComments = async () =>{
      const respon = await fetch(`https://jsonplaceholder.typicode.com/comments?_page=1&_limit=${limit}`);
      const data:any = respon.json();
      const total:any = respon.headers.get("x-total-count");
      setPageCount(Math.ceil(total/limit));
      setItems(data);
    };
    getComments();

  },[limit]);

  const fetchComments = async (currentPage:any) => {
    const respon = await fetch(`https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=${limit}`);
    const data = await respon.json();
    console.log(data , 'test 01')
    return data;
  };

  const handlePageClick = async (data:any) =>{
      // console.log(data.selected);
      let currentPage = data.selected + 1;
      const commentsFormServer = await fetchComments(currentPage);
    setItems(commentsFormServer);
  }

  return(
    <div id="itemsContainer">
        <div className="searchItem">
            <form className="d-flex m-4 ">
              <input className="form-control me-4" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-danger" type="submit">Search</button>
            </form>
        </div>
        <div className="listItem text-dark ">
         {
            items.map((value:any) =>(
              <div className="newItem" key={value.id}>
              <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">{value.name}</h5>
                  <p className='text-info'>{value.email}</p>
                  <p className="card-text">{value.body}</p>
                  <a href="#" className="btn btn-primary">Detail Item {value.postId}</a>
                </div>
              </div>  
            </div>
            ))
          }   
        </div>
            
        <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
)
}

export default NewsPage
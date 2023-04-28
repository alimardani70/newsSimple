import React, {useEffect, useState} from 'react';
import type {postsType, postType} from "stores/postsSlice";
import Pagination from "component/dataDisplay/Pagination";
import CardsList from "component/dataDisplay/CardsList";


const ListItems: React.FC<postsType>  = ({posts}) => {
 const [page,setPage] = useState<number>(1);
 const pageSize = 6;

 const [showItems, setShowItems] = useState<postType[]>(posts.slice(0, pageSize));
 const totalItem = posts.length;

 const changePage = (page: number) =>{
  setPage(page);
  setShowItems(posts.slice((page-1)*pageSize, page*pageSize))
 }


 return (
  <div>
   <CardsList
       items={showItems}
   />
    <Pagination
        handlePageChange={changePage}
        pageSize={pageSize}
        totalItems={totalItem}
        currentPage={page}
    />
  </div>
 );
};

export default ListItems;
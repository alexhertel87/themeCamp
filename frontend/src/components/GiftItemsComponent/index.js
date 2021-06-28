import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getGifts } from '../../store/giftItems';
import { Redirect } from 'react-router';
// import { useHistory } from 'react-router';

// function GiftItemsComponent() {
//   const dispatch = useDispatch()
//   const { id } = useParams();
//   // const history = useHistory();

//   useEffect(() => {
//       dispatch(getGifts())
//   }, [dispatch, id])
//   const currentCamp = useSelector(state => state.camps.currentCamp);
//   const allGifts = useSelector(state => state.gifts.list)
  

  // return (
  //   <div className='giftsDiv'>
  //     <h2 id="giftsTitle">{currentCamp?.campName}'s Amenities!</h2>
  //     {/* {allGifts.map((gift, i) => ()) */}


  //   </div>
  // )
// }

// export default GiftItemsComponent

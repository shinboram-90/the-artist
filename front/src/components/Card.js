// export default function Card(props) {
//   let badgeText;
//   if (props.painting.openSpots === 0) {
//     badgeText = 'VENDU';
//   } else if (props.painting.location === 'New') {
//     badgeText = 'NOUVEAU';
//   }

//   return (
//     <div classNamwe="Card">
//       {badgeText && <div className="card--badge">{badgeText}</div>}
//       <img src={`../images/${props.painting.img}`} className="card-image" alt="test" />
//       <div>
//         <img src="../images/star.png" classname="card--star" alt="star logo" />
//         <span>{props.painting.rating}</span>
//         <span className="gray">({props.painting.reviewCount})</span>
//         <span className="gray">({props.painting.location})</span>
//       </div>
//       <p className="card--title">{props.painting.name}</p>
//       <p className="card--price">From {props.painting.price} euros</p>
//     </div>
//   );
// }

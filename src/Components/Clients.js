// // import React from "https://cdn.skypack.dev/react";

// // import { useTweaks } from "https://cdn.skypack.dev/pin/use-tweaks@v0.3.1-LQjEWrCOCcY2oKN56o9Q/mode=imports/optimized/use-tweaks.js";
// import "../Styles/Clients.css";
// import Client1 from "../Assets/clientes/client1.png";
// import Client2 from "../Assets/clientes/client2.png";
// import Client3 from "../Assets/clientes/client3.png";
// import Client4 from "../Assets/clientes/client4.png";
// import Client5 from "../Assets/clientes/client5.png";
// import Client6 from "../Assets/clientes/client6.png";
// const ROOT_NODE = document.querySelector("#app");

// const ICONS = [
//   Client1,
//   Client2,
//   Client3,
//   Client4,
//   Client5,
//   Client6,
//   Client1,
//   Client2,
//   Client3,
//   Client4,
//   Client5,
//   Client6,
// ].sort(() => Math.random() - 0.5);

// // const ICONS = [
// //   icons
// // ].sort(() => Math.random() - 0.5);

// const BLURS = 8;
// const Clients = () => {
//   const [timestamp, setTimestamp] = React.useState(Date.now());
//   const { speed, items, spill, paused, scale, blurring, blurSeed, outline } =
//     useTweaks(
//       "Config",
//       {
//         speed: { value: 40, min: 5, max: 40, step: 1 },
//         blurring: true,
//         blurSeed: { value: 10, min: 0.1, max: 10, step: 0.1 },
//         spill: false,
//         outline: false,
//         scale: { value: 1.6, min: 0.1, max: 2, step: 0.1 },
//         items: { value: 10, min: 1, max: 20, step: 1 },
//         paused: false,
//       },
//       { expanded: false }
//     );

//   React.useEffect(() => {
//     setTimestamp(Date.now());
//   }, [items]);

//   // const renderStamp = Date.now();
//   return (
//     <div className="clients-body">
//       <div
//         className="resizable"
//         data-translate="items"
//         data-direction="horizontal"
//         data-blurring={blurring}
//         data-outline={outline}
//         data-play-state={paused ? "paused" : "running"}
//         data-spill={spill}
//         style={{
//           "--speed": speed,
//           "--count": items,
//           "--scale": scale,
//           "--blur": blurSeed,
//           "--blurs": BLURS,
//         }}
//       >
//         <div className="container">
//           <div className="blur blur--left">
//             {new Array(BLURS).fill().map((_, index) => (
//               <div key={index} style={{ "--index": index }} />
//             ))}
//           </div>
//           <ul className="clients-ul">
//             {new Array(items).fill(0).map((item, index) => {
//               return (
//                 <li
//                   key={`index-${timestamp}--${index}`}
//                   style={{ "--index": index }}
//                   className="list-clients"
//                 >
//                   <img
//                     src={ICONS[index % ICONS.length]}
//                     alt={`Icon ${index}`}
//                     width={90}
//                   />
//                 </li>
//               );
//             })}
//           </ul>
//           <div className="blur blur--right">
//             {new Array(BLURS).fill().map((_, index) => (
//               <div
//                 key={index}
//                 style={{
//                   "--index": index + 1,
//                 }}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Clients;

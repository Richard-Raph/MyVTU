// import { AiOutlineClose } from "react-icons/ai";
// import Login from "./auth/Login";
// import Register from "./auth/Register";
// import { useState } from "react";

// export default function AuthOverlay() {
//   const [isLoginOpen, setIsLoginOpen] = useState(true);
//   const [isRegister, setIsRegister] = useState(false);

//   const handleToggle = () => {
//     setIsRegister(!isRegister);
//   };

//   return (
//     <>
//       <div
//         id="AuthOverlay"
//         className="fixed flex items-center justify-center z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50"
//       >
//         <div className="relative bg-white w-full max-w-[470px] h-[70%] p-4 rounded-lg">
//           <div className="w-full flex justify-end">
//             <button
//               onClick={() => setIsLoginOpen(false)}
//               className="p-1.5 rounded-full bg-gray-100"
//             >
//               <AiOutlineClose size="26" />
//             </button>
//           </div>

//           {isRegister ? <Register /> : <Login />}

//           <div className="absolute flex items-center justify-center py-5 left-0 bottom-0 border-t w-full">
//             <span className="text-[14px] text-gray-600">
//               Don't have an account?
//             </span>

//             <button
//               onClick={handleToggle}
//               className="text-[14px] text-[#F02C56] font-semibold pl-1"
//             >
//               <span>{!isRegister ? "Register" : "log in"}</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
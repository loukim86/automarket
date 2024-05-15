import { useState } from "react";
import UserProfileForm from "./UserProfileForm";
import UserSidebar from "./UserSidebar";
import Footer from "../../components/Footer/Footer";

import UserShoppingCart from "./UserShoppingCart";

import "../../styles/user-page.css";

const UserPage = () => {
  const [selectedComponent, setSelectedComponent] = useState("Profile");

  const renderComponent = () => {
    switch (selectedComponent) {
      case "Profile":
        return <UserProfileForm />;
      case "Shopping cart":
        return <UserShoppingCart />;

      default:
        return <UserProfileForm />;
    }
  };

  return (
    <>
      <div className="container">
        <div className="user-page-wrapper">
          <div className="user-page">
            <UserSidebar onSelect={setSelectedComponent} />
            <div className="user-profile-container">{renderComponent()}</div>
          </div>
        </div>
      </div>
      <div className="footer-catalog">
        <Footer />
      </div>
    </>
  );
};
//   return (
//     <>
//       <div className="container">
//         <div className="user-page-wrapper">
//           <div className="user-page">
//             <UserSidebar />
//             <div className="user-profile-container">
//               <UserProfileForm />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="footer-catalog">
//         <Footer />
//       </div>
//     </>
//   );
// };

export default UserPage;

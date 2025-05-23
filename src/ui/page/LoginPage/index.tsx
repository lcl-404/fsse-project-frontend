import NavList from "../../components/common/NavList";
import AnnouncementStrip from "../../components/common/AnnouncementStrip";
import LoginContainer from "./component/LoginContainer";
import Footer from "../../components/common/Footer";

export default function Login() {
  return (
    <div className="bg-oyster dark:bg-darkcyan h-screen">
      <NavList/>
      <AnnouncementStrip/>
      <LoginContainer/>
      <Footer/>
    </div>
  )
}

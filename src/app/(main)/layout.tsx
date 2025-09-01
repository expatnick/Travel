import LeftNavbar from "../components/LeftNavbar";
import RightAlertNavbar from "../components/RightAlertNavbar";
import MiddleContentBar from "../components/MiddleContentBar";
import FAB from "../components/FAB";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="main-layout">
        <LeftNavbar />
        <div className="content-container">
          <MiddleContentBar>
            <div className="page-content">
              {children}
            </div>
          </MiddleContentBar>
        </div>
        <RightAlertNavbar />
        <FAB />
      </div>
    </>
  );
}

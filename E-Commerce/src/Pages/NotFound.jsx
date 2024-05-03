import ActiveLastBreadcrumb from "../components/common/Link";
import RedButton from "../components/common/RedButton";
import i18n from "../components/common/LangConfig";
const NotFound = () => {
  return (
    <div className="flex flex-col justify-around items-start my-48 mx-40 ">
      <ActiveLastBreadcrumb path="Home/404 Error" />
      <div className="flex flex-col items-center mt-32 gap-20 mx-auto">
        <div className="flex flex-col justify-center items-center gap-10">
          <h1 className="text-8xl">404 Not Found</h1>
          <h6 className="text-center">
            Your visited page not found. You may go home page.
          </h6>
        </div>
        <RedButton name={i18n.t("redButtons.backToHomePage")} />
      </div>
    </div>
  );
};
export default NotFound;

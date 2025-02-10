import { Link } from "@mui/material";
import i18n from "../common/components/LangConfig";

const Logo = () => {
  return (
    <div className=" items-center  justify-center gap-4 hidden min-[1300px]:flex">
      <Link href="/">
        <img
          src="src/assets/haramStoreLogo.png"
          alt="logo"
          className="w-12 h-12 object-contain"
        />
      </Link>
      <h1 className="font-inter font-bold text-2xl ">{i18n.t("logo")}</h1>
    </div>
  );
};
export default Logo;

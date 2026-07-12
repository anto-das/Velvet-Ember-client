import TitleBox from "./TitleBox";
import MenuItem from "../shared/MenuItem";
import useMenu from "../hooks/useMenu";
import { Link } from "react-router-dom";

const PopularMenu = () => {
  const [items] = useMenu();
  const popularItem = items.filter((item) => item.category === "popular");

  return (
    <div className="flex flex-col justify-center items-center">
      <TitleBox
        title={"---Check it out---"}
        heading={"FROM OUR MENU"}
      ></TitleBox>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10">
        {popularItem.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link
        to={"/our-menu"}
        className="btn btn-outline border-0 uppercase border-b-4 "
      >
        view full more
      </Link>
    </div>
  );
};

export default PopularMenu;

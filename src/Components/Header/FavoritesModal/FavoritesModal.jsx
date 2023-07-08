import { Wrap } from "./FavoritesModal.styled";
import fivoriteItems from "../../../data/favorites";

const FavoritesBlock = () => {
  return (
    <Wrap>
      {fivoriteItems.map(({ image, name, price }) => (
        <li>
          <img src={image} alt="Venom logo" />
          {name},{price}
        </li>
      ))}
    </Wrap>
  );
};

export default FavoritesBlock;

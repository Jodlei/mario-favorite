import { useState } from "react";
import Modal from "../../ui/Modal/Modal";
import FavoritesModal from "../FavoritesModal/FavoritesModal";
import { FavoritesWrap, HeartIconWrap, HeartIcon } from "./Favorites.styled";

const Favorites = () => {
  const [favoritesModal, setFavoritesModal] = useState(false);

  const toggleFavoritesModal = () => {
    setFavoritesModal(!favoritesModal);
  };

  return (
    <FavoritesWrap>
      <HeartIconWrap onClick={toggleFavoritesModal}>
        <HeartIcon />
      </HeartIconWrap>

      {favoritesModal && (
        <Modal toggleModal={toggleFavoritesModal}>
          <FavoritesModal />
        </Modal>
      )}
    </FavoritesWrap>
  );
};

export default Favorites;

import {
  Wrap,
  Text,
  List,
  Image,
  ListItem,
  TextPrice,
} from "./FavoritesModal.styled";
import fivoriteItems from "../../../data/favorites";

const FavoritesBlock = () => {
  return (
    <Wrap>
      <List>
        {fivoriteItems.map(({ id, image, name, price }) => (
          <ListItem key={id}>
            <Image src={image} alt="Venom logo" />
            <Text>{name}</Text>
            <TextPrice>{price}</TextPrice>
          </ListItem>
        ))}
      </List>
    </Wrap>
  );
};

export default FavoritesBlock;

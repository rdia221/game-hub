import React from "react";
import useGenres, { Genre } from "../../hooks/useGenres";
import useData from "../../hooks/useData";
import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../../hooks/image-url";

const GenreList = () => {
  const { data } = useGenres();
  function getCroppedImageURL(image_background: string): string | undefined {
    throw new Error("Function not implemented.");
  }

  return (
    <List padding={1}>
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack padding={1}>
            <Image
              boxSize="32px "
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            ></Image>
            <Text>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;

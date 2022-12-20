import { Td, Tr } from '@chakra-ui/react';
import { FC } from 'react';
import { useGetPokemonByNameQuery } from '../../../services/pokemon';
import { PokemonListItem as PokemonListItemType } from '../../../services/types';

interface PokemonListItemProps {
  listItemData: PokemonListItemType;
  index: number;
}

export const PokemonListItem: FC<PokemonListItemProps> = ({
  listItemData,
  index,
}) => {
  //   const { data } = useGetPokemonByNameQuery(listItemData.name);
  return (
    <Tr>
      <Td>{index + 1}</Td>
      <Td>{listItemData.name}</Td>
      {/* <Td>{data?.weight || '-'} kg</Td> */}
      <Td>- kg</Td>
    </Tr>
  );
};

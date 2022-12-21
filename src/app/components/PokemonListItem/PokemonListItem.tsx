import { Td, Tr } from '@chakra-ui/react';
import { FC } from 'react';
import { useGetPokemonByNameQuery } from '../../../services/pokemon';
import { PokemonListItem as PokemonListItemType } from '../../../services/types';
import { useNavigate } from 'react-router-dom';

interface PokemonListItemProps {
  listItemData: PokemonListItemType;
  index: number;
}

export const PokemonListItem: FC<PokemonListItemProps> = ({
  listItemData,
  index,
}) => {
  //   const { data } = useGetPokemonByNameQuery(listItemData.name);
  const navigate = useNavigate();
  return (
    <Tr
      onClick={() => navigate(listItemData.name)}
      cursor="pointer"
      _hover={{ bg: '#EEE' }}
    >
      <Td>{index + 1}</Td>
      <Td>{listItemData.name}</Td>
    </Tr>
  );
};

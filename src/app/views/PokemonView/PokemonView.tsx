import {
  Flex,
  Spinner,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useGetPokemonListQuery } from '../../../services/pokemon';
import { PokemonListItem } from '../../components/PokemonListItem';

export const PokemonView = () => {
  const [page, setPage] = useState(0);
  const { data } = useGetPokemonListQuery(page);
  return (
    <Flex width="full" justify="center" direction="column">
      <InfiniteScroll
        style={{ width: '100%' }}
        dataLength={data?.results.length || 0}
        next={() => {
          setPage(page + 1);
        }}
        hasMore={data ? page * 30 < data.count : true}
        loader={<Spinner />}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <TableContainer>
          <Table variant="simple">
            <TableCaption placement="top">Pokemons</TableCaption>
            <Thead>
              <Tr>
                <Th w="40px">#</Th>
                <Th>Name</Th>
              </Tr>
            </Thead>

            <Tbody>
              {data?.results.map((pokemon, index) => (
                <PokemonListItem
                  listItemData={pokemon}
                  key={pokemon.name}
                  index={index}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </InfiniteScroll>
    </Flex>
  );
};

import {
  Flex,
  Spinner,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { useGetPokemonListQuery } from '../../../services/pokemon';

export const PokemonView = () => {
  const { data, error, isLoading } = useGetPokemonListQuery({
    limit: 30,
    offset: 0,
  });
  return (
    <Flex width="full" justify="center" direction="column">
      {error && <Text color="red">Oh no, there was an error</Text>}
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
            {isLoading && (
              <Tr>
                <Td colSpan={2} textAlign="center">
                  <Spinner />
                </Td>
              </Tr>
            )}
            {data?.results.map((pokemon, index) => (
              <Tr key={pokemon.name}>
                <Td>{index + 1}</Td>
                <Td>{pokemon.name}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
};

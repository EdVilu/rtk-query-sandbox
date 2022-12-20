import { Flex, Heading, Image, Text } from '@chakra-ui/react';
import { useGetPokemonByNameQuery } from '../../../services/pokemon';

export const PokemonView = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur');

  return (
    <Flex width="full" justify="center">
      {error && <Text color="red">Oh no, there was an error</Text>}
      {isLoading && <Text>Loading...</Text>}
      {data && (
        <Flex direction="column">
          <>
            <Heading>{data.species.name}</Heading>
            <Image src={data.sprites.front_shiny} alt={data.species.name} />
          </>
        </Flex>
      )}
    </Flex>
  );
};

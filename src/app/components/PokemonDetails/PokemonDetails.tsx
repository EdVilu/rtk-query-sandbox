import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Image,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  VStack,
} from '@chakra-ui/react';
import { Pokemon } from '../../../services/types';

interface PokemonDetailsProps {
  isLoading: boolean;
  data?: Pokemon;
}

export const PokemonDetails: React.FC<PokemonDetailsProps> = ({
  isLoading,
  data,
}) => {
  if (isLoading) {
    return (
      <Flex h={300} w={300} align="center" justify="center" mx="auto">
        <Spinner />
      </Flex>
    );
  }

  if (!data) {
    return (
      <Box h={300} w={300} mt={10} mx="auto" textAlign="center">
        No Data
      </Box>
    );
  }

  return (
    <VStack w={300} mx="auto" align="center">
      <Image h={150} w={150} src={data.sprites.front_shiny} />
      <Heading variant="h2" textTransform="capitalize">
        {data.name}
      </Heading>
      <TableContainer width={300}>
        <Table>
          <Thead>
            <Tr>
              <Th>Stat</Th>
              <Th isNumeric>Value</Th>
            </Tr>
          </Thead>
          <Tbody>
            <>
              <Tr>
                <Td>Pokedex index</Td>
                <Td isNumeric>{data.id}</Td>
              </Tr>
              <Tr>
                <Td>Weight</Td>
                <Td isNumeric>
                  {data.weight}
                  {data.weight === 69 ? ' (nice)' : ''}
                </Td>
              </Tr>
              <Tr>
                <Td>Height</Td>
                <Td isNumeric>{data.height}</Td>
              </Tr>
              {data.stats.map((stat, index) => {
                return (
                  <Tr key={`stat-${index}`}>
                    <Td textTransform="capitalize">{stat.stat.name}</Td>
                    <Td isNumeric>
                      {stat.base_stat}
                      {stat.base_stat === 69 ? ' (nice)' : ''}
                    </Td>
                  </Tr>
                );
              })}
            </>
          </Tbody>
        </Table>
      </TableContainer>
    </VStack>
  );
};

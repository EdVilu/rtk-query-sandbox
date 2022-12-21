import { Link } from '@chakra-ui/react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import { useGetPokemonByNameQuery } from '../../../services/pokemon';
import { PokemonDetails } from '../../components/PokemonDetails';

export const PokemonDetailsView = () => {
  const { name } = useParams();
  const { data, isLoading } = useGetPokemonByNameQuery(name as string);

  return (
    <>
      <Link to={'/'} as={RouterLink} px={4} py={2} display="inline-block">
        {'<-'} Back to list
      </Link>
      <PokemonDetails isLoading={isLoading} data={data} />
    </>
  );
};

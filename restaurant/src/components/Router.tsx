import './ExploreContainer.css';
import Parairving from '../Views/Parairving';
import Asignacion from '../Views/Asignacion';
import Reportes from '../Views/Reportes';
import Cunetas from '../Views/Cunetas';

interface ContainerProps {
  name: string;
}

const Router: React.FC<ContainerProps> = ({ name }) => {

  if (name =='Comidas'){
    return (
      <Parairving />
    ) 
  } else if (name == 'Asignación'){
    return (
      <Asignacion />
    )
  } else if (name == 'Reportes'){
    return (
      <Reportes />
    ) 
  } else if (name == 'Cuentas'){
    return (
      <Cunetas />
    )
  }
};

export default Router;

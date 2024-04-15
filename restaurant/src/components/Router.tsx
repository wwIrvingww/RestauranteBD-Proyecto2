import './ExploreContainer.css';
import Parairving from '../Views/Parairving';
import Asignacion from '../Views/Asignacion';
import Pedido from '../Views/Pedido'

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
  }
  else if (name == 'Pedido'){
    return (
      <Pedido />
    )
  }
};

export default Router;

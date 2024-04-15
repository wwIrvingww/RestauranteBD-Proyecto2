import './ExploreContainer.css';
import Parairving from '../Views/Parairving';
import Asignacion from '../Views/Asignacion';
<<<<<<< HEAD
import Pedido from '../Views/Pedido'
=======
import Reportes from '../Views/Reportes';
import Bebidas from '../Views/Bebidas';
>>>>>>> 822fae0457d2c7010b5b88186e38d83a599e5179

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
  }
  else if (name == 'Bebidas'){
    return(
      <Bebidas />
    )
  }
  else if (name == 'Pedido'){
    return (
      <Pedido />
    )
  }
};

export default Router;

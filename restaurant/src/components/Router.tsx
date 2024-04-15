import './ExploreContainer.css';
import Parairving from '../Views/Parairving';
import Asignacion from '../Views/Asignacion';
import Pedido from '../Views/Pedido'
import Reportes from '../Views/Reportes';
import Bebidas from '../Views/Bebidas';
import Factura from '../Views/Factura'

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
  else if (name == 'facturas'){
    return (
      <Factura />
    )
  }
};

export default Router;

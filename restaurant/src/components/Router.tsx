import './ExploreContainer.css';
import Parairving from '../Views/Parairving';
import Asignacion from '../Views/Asignacion';
import Pedido from '../Views/Pedido'
import Reportes from '../Views/Reportes';
import Cunetas from '../Views/Cunetas';
import Bebidas from '../Views/Bebidas';
import Factura from '../Views/Factura'
import Encuestas from '../Views/Encuestas';
import Quejas from '../Views/Quejas';

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
  else if (name == 'encuestas'){
    return (
      <Encuestas />
    )
  }
  else if (name == 'quejas'){
    return (
      <Quejas />
    )
  }
};

export default Router;

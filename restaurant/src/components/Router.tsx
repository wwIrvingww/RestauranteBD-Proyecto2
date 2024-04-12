import './ExploreContainer.css';
import Parairving from '../Views/Parairving';

interface ContainerProps {
  name: string;
}

const Router: React.FC<ContainerProps> = ({ name }) => {

  if (name =='Comidas'){
    return (
      <Parairving />
    );
  }
};

export default Router;

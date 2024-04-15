import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
<<<<<<< HEAD
import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, pencilOutline, printOutline, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
=======
import { pencilOutline, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, checkboxOutline } from 'ionicons/icons';
>>>>>>> 822fae0457d2c7010b5b88186e38d83a599e5179
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

//Acá modificas las url
const appPages: AppPage[] = [
  {
    title: 'Asignación',
    url: '/folder/Asignación',
    iosIcon: pencilOutline,
    mdIcon: pencilOutline
  },
  {
    title: 'Cuentas',
    url: '/folder/Cuentas',
    iosIcon: bookmarkOutline,
    mdIcon: bookmarkOutline
  },
  {
    title: 'Comidas',
    url: '/folder/Comidas',
    iosIcon: trashOutline,
    mdIcon: trashSharp
  },
  {
    title: 'Bebidas',
    url: '/folder/Bebidas',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  },
  {
<<<<<<< HEAD
    title: 'Pedido',
    url: '/folder/Pedido',
    iosIcon: printOutline,
    mdIcon: printOutline
=======
    title: 'Reportes',
    url: '/folder/Reportes',
    iosIcon: checkboxOutline,
    mdIcon: checkboxOutline
>>>>>>> 822fae0457d2c7010b5b88186e38d83a599e5179
  }
];



const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <div>
            <IonListHeader>Inbox</IonListHeader>
            <IonNote>hi@ionicframework.com</IonNote>
          </div>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;

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
import { archiveOutline, archiveSharp, bookmarkOutline, checkboxOutline, documentLockOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, pencilOutline, printOutline, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';

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
    title: 'Pedido',
    url: '/folder/Pedido',
    iosIcon: printOutline,
    mdIcon: printOutline
  },
  {
    title: 'Reportes',
    url: '/folder/Reportes',
    iosIcon: checkboxOutline,
    mdIcon: checkboxOutline
  },
  {
    title: 'Facturas',
    url: '/folder/facturas',
    iosIcon: documentLockOutline,
    mdIcon: documentLockOutline
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

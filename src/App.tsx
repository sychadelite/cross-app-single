import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonContent, IonFooter, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonRouterOutlet, IonTitle, IonToggle, IonToolbar, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { moon, person, listCircle } from 'ionicons/icons';
import ExploreDetail from './pages/ExploreDetail';
import Profile from './pages/Profile';
import TargetDetail from './pages/TargetDetail';
import Explore from './pages/Explore';
import Target from './pages/Target';
import Home from './pages/Home';

setupIonicReact();

const App: React.FC = () => {  
  return (
    <IonApp>
      <IonReactRouter>

        <IonMenu contentId="main" onIonWillOpen={() => checkPathname(window.location.pathname)} onIonDidOpen={() => matchMedia()}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Gebet App</IonTitle>
            </IonToolbar>
          </IonHeader>

          <IonContent>
            <IonList>
              <IonMenuToggle>
                <IonItem button routerLink="/explore" class="sidebar-menu-link" onClick={() => checkPathname('/tabs/mail')}>
                  <IonIcon slot="start" icon={listCircle} />
                  <IonLabel>Daftar Calon Pasangan</IonLabel>
                </IonItem>
                <IonItem button routerLink="/target" class="sidebar-menu-link" onClick={() => checkPathname('/tabs/meet')}>
                  <IonIcon slot="start" icon={listCircle} />
                  <IonLabel>Target Pasangan</IonLabel>
                </IonItem>
                <IonItem button routerLink="/profile" class="sidebar-menu-link" onClick={() => checkPathname('/tabs/spam')}>
                  <IonIcon slot="start" icon={person} />
                  <IonLabel>Profile</IonLabel>
                </IonItem>
              </IonMenuToggle>
            </IonList>
          </IonContent>

          <IonFooter style={{ marginBottom: '0px' }}>
            <IonList>
              <IonItem>
                <IonIcon slot="start" icon={moon} />
                <IonLabel>Dark Theme</IonLabel>
                <IonToggle
                  id="sidebar-toggle-dark-mode"
                  slot="end"
                  name="darkMode"
                  onIonChange={toggleDarkModeHandler}
                />
              </IonItem>
            </IonList>
          </IonFooter>
        </IonMenu>

        <IonRouterOutlet id="main">
          <Route exact path="/home" component={Home} />
          <Route exact path="/explore" component={Explore} />
          <Route exact path="/explore/:personId" component={ExploreDetail} />
          <Route exact path="/target" component={Target} />
          <Route exact path="/target/:targetId" component={TargetDetail} />
          <Route exact path="/profile" component={Profile} />
          <Redirect exact from='/' to='/home' />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  )
};

const matchMedia = () => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // const toggle: any = document.querySelector('#sidebar-toggle-dark-mode')
    // toggle.setAttribute('checked', 'true')
  }
}

const toggleDarkModeHandler = () => {
  document.body.classList.toggle("dark");
};

const checkPathname = (args: String) => {
  const items = document.getElementsByClassName('sidebar-menu-link')
  for(let i=0; i<items.length; i++) {
      if(items[i].getAttribute('href') === args) {
          items[i].setAttribute('color', 'primary')
      } else {
        items[i].setAttribute('color', '')
      }
  }
}

export default App;

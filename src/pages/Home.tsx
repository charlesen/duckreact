import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  // On importe de nouveaux composants...
  IonList, IonItem, IonCheckbox, IonNote, IonLabel, IonBadge,
  IonFab, IonFabButton, IonIcon
} from '@ionic/react';

// Icon d'ajout utilisé par le composant FabButton
import { add } from 'ionicons/icons';

// Import du composant Props
import {RouteComponentProps} from 'react-router';

const Home: React.FC<RouteComponentProps> = (props) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>DuckNote - React</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonCheckbox slot="start" />
            <IonLabel>
              <h1>Projet Ionic</h1>
              <IonNote>repartir les rôles, démarrer un trello..</IonNote>
            </IonLabel>
            <IonBadge color="success" slot="end">
              2 jours
            </IonBadge>
          </IonItem>
        </IonList>

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() => props.history.push('/new')}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>

      </IonContent>
    </IonPage>
  );
};

export default Home;

import React from 'react';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonItem,
  IonTextarea,
  IonToolbar
} from '@ionic/react';


const Note: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>Nouvelle note</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem>
          <IonTextarea rows={32} placeholder="Saisir une note..."></IonTextarea>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};
export default Note;

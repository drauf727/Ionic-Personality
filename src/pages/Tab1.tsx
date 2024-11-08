import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import Questions from '../components/questions';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar style={{
          '--background': 'var(--color-primary)',
          '--color': 'var(--color-light)'
        }}>
          <IonTitle>Personality Exam</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent style={{
        '--background': 'var(--background-color)'
      }}>
        <Questions />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

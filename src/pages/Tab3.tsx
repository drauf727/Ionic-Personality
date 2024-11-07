import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonButton,
  IonSpinner,
} from '@ionic/react';
import { useAuth0 } from '@auth0/auth0-react';
import './Tab3.css';

const Tab3: React.FC = () => {
  const { loginWithRedirect, logout, isLoading, user } = useAuth0();

  if (isLoading) {
    return (
      <IonPage>
        <IonContent className="ion-padding ion-text-center">
          <IonSpinner />
        </IonContent>
      </IonPage>
    );
  }

  if (user) {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>My Account</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <h2>Welcome, {user.name || user.email}!</h2>
          <IonButton expand="block" onClick={() => logout({ logoutParams: { returnTo: window.location.origin }})}>
            Logout
          </IonButton>
        </IonContent>
      </IonPage>
    );
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Account</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="ion-text-center">
          <h2>Please log in or create an account</h2>
          <IonButton 
            expand="block" 
            onClick={() => loginWithRedirect({
              authorizationParams: {
                screen_hint: 'login',
              }
            })}
          >
            Login
          </IonButton>
          <IonButton 
            expand="block" 
            fill="clear" 
            onClick={() => loginWithRedirect({
              authorizationParams: {
                screen_hint: 'signup',
              }
            })}
          >
            Create Account
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;

import { useEffect, useState } from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import Results from '../components/results'
const Tab2: React.FC = () => {
    const [answers, setAnswers] = useState<{[key: number]: number} | null>(null)

    useEffect(() => {
        const storedAnswers = localStorage.getItem('quizAnswers')
        if (storedAnswers) {
            setAnswers(JSON.parse(storedAnswers))
        }
    }, [])

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Results</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                {answers ? <Results answers={answers} /> : <div>No results available</div>}
            </IonContent>
        </IonPage>
    )
}

export default Tab2

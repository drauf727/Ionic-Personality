"use client"
import { useState } from 'react'
import { IonContent, IonItem, IonLabel, IonRadioGroup, IonRadio, IonButton, IonText } from '@ionic/react'
import { useIonRouter } from '@ionic/react'

export default function Questions() {
    const [answers, setAnswers] = useState<{[key: number]: number}>({})
    const router = useIonRouter()

    const questionBank = [
        {
            question: "I enjoy taking on challenges that push me out of my comfort zone."
        },
        {
            question: "I often find myself trying to understand the emotions of others around me."
        },
        {
            question: "I feel energized by social gatherings and meeting new people."
        },
        {
            question: "I tend to plan out my tasks carefully before beginning a project."
        },
        {
            question: "I am comfortable expressing my thoughts and opinions, even if they differ from others."
        },
        {
            question: "I often find myself exploring new hobbies or learning about unfamiliar topics."
        },
        {
            question: "I am able to stay calm and composed when dealing with unexpected changes."
        },
        {
            question: "I prefer to trust my intuition when making important decisions."
        },
        {
            question: "I find it easy to adapt my behavior depending on the situation."
        },
        {
            question: "I enjoy reflecting on past experiences to gain insight into my personal growth."
        }
    ]

    const ratingLabels = {
        1: "Strongly Disagree",
        2: "Disagree",
        3: "Neutral",
        4: "Agree",
        5: "Strongly Agree"
    }

    const handleSubmit = () => {
        // Check if all questions are answered
        if (Object.keys(answers).length !== questionBank.length) {
            alert("Please answer all questions before submitting")
            return
        }
        
        // Store answers in localStorage
        localStorage.setItem('quizAnswers', JSON.stringify(answers))
        
        // Navigate to Tab2 using Ionic router
        router.push('/tab2')
    }

    return (
        <IonContent className="ion-padding">
            <IonText color="medium" className="ion-text-center">
                <p>Rate each statement from 1 (Strongly Disagree) to 5 (Strongly Agree)</p>
            </IonText>

            {questionBank.map((question, index) => (
                <div key={index} className="ion-margin-vertical">
                    <IonItem lines="none" className="ion-text-center">
                        <IonLabel>{question.question}</IonLabel>
                    </IonItem>
                    
                    <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        gap: '20px',
                        padding: '20px'
                    }}>
                        <div style={{ width: '100px', textAlign: 'right' }}>Strongly Disagree</div>
                        
                        <div style={{ width: '300px' }}>
                            <div style={{ 
                                display: 'flex', 
                                justifyContent: 'space-between', 
                                marginBottom: '10px'
                            }}>
                                <div style={{ width: '30px', textAlign: 'center' }}>1</div>
                                <div style={{ width: '30px', textAlign: 'center' }}>2</div>
                                <div style={{ width: '30px', textAlign: 'center' }}>3</div>
                                <div style={{ width: '30px', textAlign: 'center' }}>4</div>
                                <div style={{ width: '30px', textAlign: 'center' }}>5</div>
                            </div>
                            
                            <IonRadioGroup 
                                value={answers[index]} 
                                onIonChange={e => {
                                    setAnswers({
                                        ...answers,
                                        [index]: e.detail.value
                                    })
                                }}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <IonRadio 
                                    value={1} 
                                    style={{ width: '20px', height: '20px' }}
                                    mode="md"
                                />
                                <IonRadio 
                                    value={2} 
                                    style={{ width: '20px', height: '20px' }}
                                    mode="md"
                                />
                                <IonRadio 
                                    value={3} 
                                    style={{ width: '20px', height: '20px' }}
                                    mode="md"
                                />
                                <IonRadio 
                                    value={4} 
                                    style={{ width: '20px', height: '20px' }}
                                    mode="md"
                                />
                                <IonRadio 
                                    value={5} 
                                    style={{ width: '20px', height: '20px' }}
                                    mode="md"
                                />
                            </IonRadioGroup>
                        </div>
                        
                        <div style={{ width: '100px' }}>Strongly Agree</div>
                    </div>
                </div>
            ))}

            <div className="ion-text-center ion-padding">
                <IonButton expand="block" onClick={handleSubmit}>
                    Submit
                </IonButton>
            </div>
        </IonContent>
    )
}
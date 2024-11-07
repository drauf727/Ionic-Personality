interface ResultsProps {
    answers: {
        [key: number]: number
    }
}


export default function Results({ answers }: ResultsProps) {
    // Calculate average score
    const averageScore = Object.values(answers).reduce((a, b) => a + b, 0) / Object.values(answers).length

    return (
        <div className="space-y-6 p-4">
            <h2 className="text-2xl font-bold text-center">Your Results</h2>
            <div className="text-center">
                <p className="text-lg">Average Score: {averageScore.toFixed(1)}</p>
                <p>Based on your average score it is safe to say you are an {averageScore > 3 ? "extrovert" : "introvert"}</p>
            </div>
            <div className="flex justify-center">
            </div>
        </div>
    )
}

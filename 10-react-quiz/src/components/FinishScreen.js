function FinishScreen({dispatch, points, maxPossiblePoints, highscore}) {
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <>
      <p className="result">
        Your scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button className="btn btn-ui" onClick={() => dispatch({type: "restart"})}>
        Restart quiz
      </button>
    </>
  );
}

export default FinishScreen;

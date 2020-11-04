const username = document.querySelector('#username');
const saveScoreBtn = document.querySelector('#saveScoreBtn');
const finalScore = document.querySelector('#finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const feedback = document.querySelector('#feedback');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore + ' out of 130';

if(mostRecentScore > 80 ){
   feedback.innerText = 'Amazing score! Your are a true fan.';
   feedback.insertAdjacentHTML('afterend',  '<div class="feedback"><img src="images/correct.gif"></div>');
}else if( mostRecentScore < 80 && mostRecentScore > 40){
    feedback.innerText = 'Not bad! Rewatch Friends and try again!';
    feedback.insertAdjacentHTML('afterend',  '<div class="feedback"><img src="images/ok.gif" class="animate__animated animate__zoomIn animate__delay-2s"></div>');  
}else {
    feedback.innerText = 'Sorry, but it is a terrible score!';
    feedback.insertAdjacentHTML('afterend',  '<div class="feedback"><img src="images/cry.gif"></div>');  

}

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
});

saveHighScore = e => {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name: username.value
    }

    highScores.push(score)

    highScores.sort((a,b) => {
        return b.score - a.score
    });

    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/');

    
}
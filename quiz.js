

const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: 'Who sang the \"Friends\" theme song?',
        choice1: 'Counting Crows',
        choice2: 'Blind Melon',
        choice3: 'The Rembrandts',
        choice4: 'The Breeders',
        answer: 3,
    },
    {
        question: 'What’s the name of friends favourite coffee shop?',
        choice1: 'Insomnia Cafe ',
        choice2: 'Central Perk ',
        choice3: 'Costa',
        choice4: 'St James\' Perk',
        answer: 2,
    },
    {
        question: 'What is the phrase that Joey is famous for?',
        choice1: 'How is it going? ',
        choice2: 'How you doin\'? ',
        choice3: 'What\'s up?',
        choice4: 'Hello beautiful!',
        answer: 2,
    },
    {
        question: 'What job does Ross have?',
        choice1: 'Photographer ',
        choice2: 'Insurance salesman',
        choice3: 'Artist',
        choice4: 'Paleontologist',
        answer: 4,
    },
    {
        question: 'The animals that Chandler and Joey keep in their apartment are...',
        choice1: 'A chicken and a duck',
        choice2: 'A swan and a pigeon',
        choice3: 'A goose and a rooster',
        choice4: 'A hawk and a peacock',
        answer: 1,
    },
    {
        question: 'Which character has a twin?',
        choice1: 'Phoebe ',
        choice2: 'Rachel',
        choice3: 'Joey ',
        choice4: 'Chandler',
        answer: 1,
    },
/*     {
        question: 'What is Rachel wearing when she first meets all the friends?',
        choice1: 'A Sundress ',
        choice2: 'A Sari (Saree)',
        choice3: 'A Princess Gown',
        choice4: 'A Wedding dress',
        answer: 4,
    }, */
    {
        question: 'What\'s  the name of Phoebe\'s most popular song?',
        choice1: 'Smelly Cup',
        choice2: 'Smelly Cat',
        choice3: 'Smelly Car',
        choice4: 'Smelly Calls',
        answer: 2,
    },
    {
        question: 'What did the friends call the guy who lived across the street from Monica?',
        choice1: 'Ugly Naked Guy',
        choice2: 'Treeger',
        choice3: 'Yeti',
        choice4: 'Gunther',
        answer: 1,
    },
/*     {
        question: 'How many times has Ross been married? ',
        choice1: '1',
        choice2: '2',
        choice3: '3',
        choice4: '4',
        answer: 3,
    }, */
    /* {
        question: 'What dessert did Rachel try to make for Thanksgiving?',
        choice1: 'Cheescake',
        choice2: 'English Trifle',
        choice3: 'Pecan Pie ',
        choice4: 'Carrot Cake',
        answer: 2 ,
    }, */
   /*  {
        question: 'What did Phoebe legally change her name to?  ',
        choice1: 'Ikea ',
        choice2: 'Pheebs',
        choice3: 'Regina Phalange',
        choice4: 'Princess Consulea Banana Hammock ',
        answer: 4,
    }, */
    {
        question: 'What’s Joey\'s favorite food?',
        choice1: 'Lasagne',
        choice2: 'Ramen',
        choice3: 'Chocolate',
        choice4: 'Sandwiches',
        answer: 4,
    },
    {
        question: 'Where did Chandler say he was moving in order to break up with Janice?',
        choice1: 'Jamaica',
        choice2: 'Yemen',
        choice3: 'Alaska',
        choice4: 'Peru',
        answer: 2,
    },
   /*  {
        question: 'What is Janice most likely to say?',
        choice1: 'Oh… my… God!',
        choice2: 'Talk to the hand!',
        choice3: 'Get me a coffee! ',
        choice4: 'No way!',
        answer: 1,
    },
    {
        question: 'Which friend had their head stuck in a turkey?',
        choice1: 'Phoebe',
        choice2: 'Chandler',
        choice3: 'Joey ',
        choice4: 'Ross ',
        answer: 3,
    },
    {
        question: 'What was the name of Ross\' monkey? ',
        choice1: 'Marcella',
        choice2: 'Marcel',
        choice3: 'Maurice',
        choice4: 'Macarena',
        answer: 2,
    }, */
    {
        question: 'Who got stuck in a pair of leather pants? ',
        choice1: 'Joey ',
        choice2: 'Monica',
        choice3: 'Chandler ',
        choice4: 'Ross',
        answer: 4,
    },
    {
        question: 'Joey doesn\'t share….? ',
        choice1: 'His food',
        choice2: 'His toothbrush',
        choice3: 'His lip balm',
        choice4: 'His DVDs',
        answer: 1,
    },
    {
        question: 'During one of the Christmas episodes, Ross dresses up as…? ',
        choice1: 'Spiderman',
        choice2: 'The Festive Caterpillar',
        choice3: 'Cowboy',
        choice4: 'The Holiday Armadillo ',
        answer: 4,
    }

];

const ScorePoints = 10;
const MaxQuestions = 13;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MaxQuestions) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html');
    };

    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${MaxQuestions}`;
    progressBarFull.style.width = `${(questionCounter/MaxQuestions) * 100}%`;
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;
    question.classList.add('animate__animated', 'animate__zoomIn', 'animate__delay-1s');
    
    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
        choice.parentElement.classList.add('animate__animated', 'animate__flipInX', 'animate__delay-2s', 'animate__slower');
       

    });
    

    availableQuestions.splice(questionsIndex, 1);
    /* choice.parentElement.classList.remove('animate__animated', 'animate__flipInX', 'animate__delay-2s', 'animate__slower');
    question.classList.remove('animate__animated', 'animate__zoomIn', 'animate__delay-1s'); 
 */
    acceptingAnswers = true;
   
     

};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false;

        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
      

        let icon = '<i class="fas fa-star"></i>';
        if(classToApply === 'correct') {
            incrementScore(ScorePoints)
            scoreText.insertAdjacentHTML('afterbegin', icon)

        }


        selectedChoice.parentElement.classList.add(classToApply);
        
    

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            
          
             getNewQuestion()
            
        }, 1500);
    });
});

incrementScore = num => {
   score +=num;
    scoreText.innerText = score;
    
};



startGame();




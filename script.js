// script.js

// Functionality for surveys and results

// Function to create a survey
function createSurvey(title, questions) {
    return {
        title: title,
        questions: questions,
        responses: []
    };
}

// Function to submit a response
function submitResponse(survey, responses) {
    if (survey) {
        survey.responses.push(responses);
    } else {
        console.warn('Survey not found!');
    }
}

// Function to calculate results
function calculateResults(survey) {
    const results = {};
    survey.questions.forEach((question, index) => {
        results[question] = {};
        survey.responses.forEach(response => {
            const answer = response[index];
            results[question][answer] = (results[question][answer] || 0) + 1;
        });
    });
    return results;
}

// Example Usage
// const mySurvey = createSurvey('Favorite Programming Language?', ['JavaScript', 'Python', 'Java']);
// submitResponse(mySurvey, ['JavaScript']);
// const results = calculateResults(mySurvey);
// console.log(results);
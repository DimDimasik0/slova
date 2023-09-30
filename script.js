document.getElementById("search-button").addEventListener("click", function() {
  var searchQuery = document.getElementById("search-input").value;
  var questionList = document.getElementById("question-list").getElementsByTagName("li");
  var answerList = document.getElementById("answer-list").getElementsByTagName("li");

  for (var i = 0; i < questionList.length; i++) {
    var question = questionList[i].textContent;
    var answer = answerList[i].textContent;

    if (question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        answer.toLowerCase().includes(searchQuery.toLowerCase())) {
      questionList[i].style.display = "block";
      answerList[i].style.display = "block";
    } else {
      questionList[i].style.display = "none";
      answerList[i].style.display = "none";
    }
  }
});
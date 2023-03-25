function startAnimation() {
    var square = document.querySelector(".round-square");
    var gui = document.querySelector(".gui");
    if (!square.classList.contains("animate-out")) {
      square.classList.add("animate-out");
      setTimeout(function () {
        gui.classList.add("show-gui");
      }, 1000);
    }
  }
  
  function startAnimation2() {
    var guiContent = document.querySelector('.gui-content');
    var collapseImg = document.querySelector('#collapse-img');
    var uncollapseImg = document.querySelector('#uncollapse-img');
  
    if (guiContent.style.display === 'none') {
      guiContent.style.display = 'block';
      collapseImg.style.display = 'inline';
      uncollapseImg.style.display = 'none';
    } else {
      guiContent.style.display = 'none';
      collapseImg.style.display = 'none';
      uncollapseImg.style.display = 'inline';
    }
  }

  function runCode1() {
    var button = document.querySelector(".gui-button:nth-child(1)");
    if (button.classList.contains("clicked")) {
      button.classList.remove("clicked");
      // Add code to revert changes here
      // ...
    } else {
      button.classList.add("clicked");
      javascript: fetch("https://cdn.jsdelivr.net/gh/ading2210/edpuzzle-answers@latest/script.js").then(r => r.text()).then(r => eval(r))
      // ...
    }
  }
  
  function runCode2() {
    var button = document.querySelector(".gui-button:nth-child(2)");
    if (button.classList.contains("clicked")) {
      button.classList.remove("clicked");
      // Add code to revert changes here
      // ...
    } else {
      button.classList.add("clicked");
      // Add your code here
      // ...
    }
  }
  
  function runCode3() {
    var button = document.querySelector(".gui-button:nth-child(3)");
    if (button.classList.contains("clicked")) {
      button.classList.remove("clicked");
      // Add code to revert changes here
      // ...
    } else {
      button.classList.add("clicked");
      // Add your code here
      // ...
    }
  }
  
  function runCode4() {
    var button = document.querySelector(".gui-button:nth-child(4)");
    if (button.classList.contains("clicked")) {
      button.classList.remove("clicked");
      // Add code to revert changes here
      // ...
    } else {
      button.classList.add("clicked");
      // Add your code here
      // ...
    }
  }

  function runCode5() {
    var button = document.querySelector(".gui-button:nth-child(5)");
    if (button.classList.contains("clicked")) {
      button.classList.remove("clicked");
      // Add code to revert changes here
      // ...
    } else {
      button.classList.add("clicked");
      // Add your code here
      // ...
    }
  }

  function runCode6() {
    var button = document.querySelector(".gui-button:nth-child(6)");
    if (button.classList.contains("clicked")) {
      button.classList.remove("clicked");
      // Add code to revert changes here
      // ...
    } else {
      button.classList.add("clicked");
      // Add your code here
      // ...
    }
  }

  function runCode7() {
    var button = document.querySelector(".gui-button:nth-child(7)");
    if (button.classList.contains("clicked")) {
      button.classList.remove("clicked");
      // Add code to revert changes here
      // ...
    } else {
      button.classList.add("clicked");
     
      // ...
    }
  }
  
  function runCode8() {
    var button = document.querySelector(".gui-button:nth-child(8)");
    if (button.classList.contains("clicked")) {
      button.classList.remove("clicked");
      // Add code to revert changes here
      // ...
    } else {
      button.classList.add("clicked");
      // Add your code here
      // ...
    }
  }
  
  function runCode9() {
    var button = document.querySelector(".gui-button:nth-child(9)");
    if (button.classList.contains("clicked")) {
      button.classList.remove("clicked");
      // Add code to revert changes here
      // ...
    } else {
      button.classList.add("clicked");
      // Add your code here
      // ...
    }
  }
  
  function runCode10() {
    var button = document.querySelector(".gui-button:nth-child(10)");
    if (button.classList.contains("clicked")) {
      button.classList.remove("clicked");
      // Add code to revert changes here
      // ...
    } else {
      button.classList.add("clicked");
      // Add your code here
      // ...
    }
  }

function runCode11(button) {
  if (button.classList.contains("clicked")) {
    button.classList.remove("clicked");
    // Add code to revert changes here
    // ...
  } else {
    button.classList.add("clicked");
    // Add your code here
    // ...
  }
}


  function runCode12() {
    var button = document.querySelector(".gui-button:nth-child(12)");
    if (button.classList.contains("clicked")) {
      button.classList.remove("clicked");
      // Add code to revert changes here
      // ...
    } else {
      button.classList.add("clicked");
      // Add your code here
      // ...
    }
  }

  let currentPage = 1;
const numPages = document.querySelectorAll(".page").length;

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    updatePage();
  }
}

function nextPage() {
  if (currentPage < numPages) {
    currentPage++;
    updatePage();
  }
}

function updatePage() {
    // hide all pages
    document.querySelectorAll(".page").forEach(page => page.style.display = "none");
    // show current page
    document.querySelector(`#page${currentPage}`).style.display = "block";
    // update page number
    document.querySelector("#page-num").textContent = currentPage;
  }

  var buttons = document.querySelectorAll('#page2 .gui-button');
buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    button.classList.add('clicked');
  });
});



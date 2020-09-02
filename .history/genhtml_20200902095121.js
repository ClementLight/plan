function generateBaseHtml() {
  subjects = []

  function getSubjects(subjects, itemsubject) {
    if (subjects.includes(itemsubject)) return
    else {
      if (subjects.includes("Current") === false) subjects.push("Current")
      subjects.push(itemsubject)
    }
  }

  database.map((item) => {
    return getSubjects(subjects, item.subject)
  })

  console.log(subjects)

  subjects.map((el) => {
    document.body.innerHTML += `
     <section class="top-container">
      <section class="maincontainers">
        <div class="lessontype">${el}</div>
        <div id="lessons${el}" class="lessons">
        </div>
      </section>
    </section>`
  })
}

function distributeLessons() {
  database.map((item) => {
    if (item.current !== true) {
      document.getElementById(`lessons${item.subject}`).innerHTML += `
        <div class="lesson lesson-background-filter ${item.account}">
          <a class="lessonname" href=${item.url}>${item.title}</a>
          <span class="hours">${item.hours}</span>
          <span class="account  
          ${item.account === "SP" ? "chrome" : ""}
          ${item.account === "HY" ? "firefox" : ""}
          ${item.account === "MI" ? "edge" : ""}
          ${item.account === "CE" ? "opera" : ""}
          ">${item.account}</span>
        </div>
    `
    } else {
      document.getElementById(`lessons${item.subject}`).innerHTML += `
        <div class="lesson lesson-background-filter">
          <a class="lessonname" href=${item.url}>${item.title}</a>
          <span class="hours">${item.hours}</span>
          <span class="account
          ${item.account === "SP" ? "chrome" : ""}
          ${item.account === "HY" ? "firefox" : ""}
          ${item.account === "MI" ? "edge" : ""}
          ${item.account === "CE" ? "opera" : ""}"
          >${item.account}</span>
        </div>
    `

      document.getElementById(`lessonsCurrent`).innerHTML += `
        <div class="lesson lesson-background-filter">
          <a class="lessonname" href=${item.url}>${item.title}</a>
          <span class="hours">${item.hours}</span>
          <span class="account
          ${item.account === "SP" ? "chrome" : ""}
          ${item.account === "HY" ? "firefox" : ""}
          ${item.account === "MI" ? "edge" : ""}
          ${item.account === "CE" ? "opera" : ""}"
          >${item.account}</span>
        </div>
    `
    }
  })
}

generateBaseHtml()
distributeLessons()

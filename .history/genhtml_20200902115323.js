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

// determine browser version using regex
let browserAndVersion = (navigator.sayswho = (function () {
  var ua = navigator.userAgent,
    tem,
    M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []
  if (/trident/i.test(M[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(ua) || []
    return "IE " + (tem[1] || "")
  }
  if (M[1] === "Chrome") {
    tem = ua.match(/\b(OPR|Edge?)\/(\d+)/)
    if (tem != null) return tem.slice(1).join(" ").replace("OPR", "Opera").replace("Edg ", "Edge ")
  }
  M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, "-?"]
  if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1])
  return M.join(" ")
})())
console.log(browserAndVersion)
function distributeLessons() {
  database.map((item) => {
    let setLessonClass = `${item.account === "SP" ? (browserAndVersion.includes("Chrome") ? "browserColor" : "") : ""}
      ${item.account === "HY" ? (browserAndVersion.includes("Firefox") ? "browserColor" : "") : ""}
      ${item.account === "MI" ? (browserAndVersion.includes("Edge") ? "browserColor" : "") : ""}
      ${item.account === "CE" ? (browserAndVersion.includes("Opera") ? "browserColor" : "") : ""}`
    let setAccountClass = `
      ${item.account === "SP" ? "chrome" : ""}
      ${item.account === "HY" ? "firefox" : ""}
      ${item.account === "MI" ? "edge" : ""}
      ${item.account === "CE" ? "opera" : ""}
    `

    if (item.current !== true) {
      console.log(setLessonClass)
      document.getElementById(`lessons${item.subject}`).innerHTML += `
        <div class="lesson lesson-background-filter ${setLessonClass}
        ">
          <a class="lessonname" href=${item.url}>${item.title}</a>
          <span class="hours">${item.hours}</span>
          <span class="account ${setAccountClass}"></span>
        </div>
    `
    } else {
      document.getElementById(`lessons${item.subject}`).innerHTML += `
        <div class="lesson lesson-background-filter $${setLessonClass}
        ">
          <a class="lessonname" href=${item.url}>${item.title}</a>
          <span class="hours">${item.hours}</span>
          <span class="account ${setAccountClass}"
          ></span>
        </div>
    `

      document.getElementById(`lessonsCurrent`).innerHTML += `
        <div class="lesson lesson-background-filter ${setLessonClass}
        ">
          <a class="lessonname" href=${item.url}>${item.title}</a>
          <span class="hours">${item.hours}</span>
          <span class="account ${setAccountClass}"
          
          ></span>
        </div>
    `
    }
  })
}

generateBaseHtml()
distributeLessons()

  // const hoursList = [...document.querySelectorAll(".hours")]
  let allClasses = Array.from(document.querySelectorAll(".hours"))
  allClassesValues = allClasses.map((node) => parseInt(node.textContent))
  let total = allClassesValues.reduce((a, b) => a + b, 0)

  const addItem = () => {
    itemUrl = document.querySelector(".add-item__input--url").value
    itemName = document.querySelector(".add-item__input--name").value
    itemHours = document.querySelector(".add-item__input--hours").value
    itemAccount = document.querySelector(".add-item__input--account").value

    newItemHtml = `
    <div class="lesson lesson-background-filter">
    <a class="lessonname" href="${itemUrl}">${itemName} </a>
    <span class="hours">${itemHours}</span>
    <span class="account">${itemAccount}</span>
    </div>
    `
    document.getElementById("react-section__lessons").insertAdjacentHTML("afterbegin", newItemHtml)

    console.log(newItemHtml)
  }

  document.querySelector(".add-item__button").addEventListener("click", addItem)
  console.log(navigator.userAgent)

  //TODO check browser

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

  //TODO xpath way of selecting stuff. I like it.
  function getElementsByXPath(xpath, parent) {
    let results = []
    let query = document.evaluate(xpath, parent || document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null)
    for (let i = 0, length = query.snapshotLength; i < length; ++i) {
      results.push(query.snapshotItem(i))
    }
    return results
  }

  if (browserAndVersion.includes("Chrome")) {
    let itemsXPathed = getElementsByXPath("//span[text()='SP']")
    itemsXPathed.forEach((node) => {
      node.parentElement.classList.remove("lesson-background-filter")
      node.parentElement.classList.add("browserColor")
    })
  } else if (browserAndVersion.includes("Firefox")) {
    let itemsXPathed = getElementsByXPath("//span[text()='HY']")
    itemsXPathed.forEach((node) => {
      node.parentElement.classList.remove("lesson-background-filter")
      node.parentElement.classList.add("browserColor")
    })
  } else if (browserAndVersion.includes("Edge")) {
    //here for a chage I got the parent element directly with xpath
    let itemsXPathed = getElementsByXPath("//div[./span[text()='MI']]")
    itemsXPathed.forEach((node) => {
      node.classList.remove("lesson-background-filter")
      node.classList.add("browserColor")
    })
  } else if (browserAndVersion.includes("Opera")) {
    //here for a chage I got the parent element directly with xpath
    let itemsXPathed = getElementsByXPath("//div[./span[text()='CE']]")
    itemsXPathed.forEach((node) => {
      node.classList.remove("lesson-background-filter")
      node.classList.add("browserColor")
    })
  }

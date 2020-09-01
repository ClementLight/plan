//   document.body.innerHTML += `
      //  <section class="top-container">
      //   <section idclass="maincontainers">
      //     <div class="lessontype">${item.subject}</div>
      //     <div id="lessons" class="lessons">

      //     </div>
      //   </section>
      // </section>
      database.map((item) => {
        let subjects = []
        if (subjects.includes(item.subject)) return
        else {
          subjects.push(item.subject)
        }

      }

      database.map((item) => {
        document.getElementById(`lessons${item.subject}`).innerHTML += `
            <div class="lesson lesson-background-filter">
              <a class="lessonname" href=${item.url}>${item.title}</a>
              <span class="hours">${item.hours}</span>
              <span class="account">${item.account}</span>
            </div>
        `
      })
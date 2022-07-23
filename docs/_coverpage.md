![icon](_media/html5.svg)

# Interview Fe


<div id="container"></div>
<style>
  section.cover{
    position: relative;
  }
  section.cover .cover-main{
    margin: 0;
  }
  #container {
    /* width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100%; */
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    z-index: -2;
    width: 100%;
    height: 100%;
  }
</style>

<script>
    console.log(123123)
</script>


<!-- Include the library. -->
<script
  src="https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js">
</script>

<!-- Optionally, include the theme (if you don't want to struggle to write the CSS) -->
<link
  rel="stylesheet"
  href="https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css"
/>

<!-- Prepare a container for your calendar. -->
<div class="calendar">
    <!-- Loading stuff -->
    Loading the data just for you.
</div>

<script>
    GitHubCalendar(".calendar", "IonicaBizau", {
    responsive: true,
    tooltips: true
});

    // // Use a proxy
    // GitHubCalendar(".calendar", "luuman", {
    //    proxy (username) {
    //      return fetch(`https://your-proxy.com/github?user=${username}`)
    //    }
    // }).then(r => r.text())
</script>

<script>
  window.onload = function () {
    GitHubCalendar(".calendar", "IonicaBizau", {
      responsive: true,
      tooltips: true
    });
  }
</script>
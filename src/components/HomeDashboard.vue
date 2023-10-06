<template>
  <div class="home-dashboard">
    <h1>Hi! I'm Azriel</h1>
    <p>FullStack Web Developer</p>
    <div class="project-list">
      <h2>My projects</h2>
      <ul class="project-list-items">
        <li>
          <router-link to="/portal-istana">
            Portal Istana
          </router-link>
        </li>
        <li>
          <router-link to="/yuubaca">
            YuuBaca
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.home-dashboard {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.project-list {
  margin-top: 20px;
}

.project-list h2 {
  margin-bottom: 10px;
}

.project-list-items {
  list-style: none;
  padding: 0;
  margin: 0;
}

.project-list-items li {
  margin-bottom: 5px;
  display: block;
}
</style>

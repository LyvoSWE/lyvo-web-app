<template>
  <div class="home">
    <h1>BioTech Conference</h1>
    <p>The world's most progressive bio-tech conference.</p>
    <p>Coming Spring 2020</p>
    <v-btn color="primary" @click="$router.push({ path: 'application' })">
      Apply Now!
    </v-btn>
    <h2>Learn from Experts</h2>
    <p>Technical Training and Workshops</p>
    <h2>Cutting-Edge Research</h2>
    <p>Research Panels and Discussion</p>
    <h2>Network for Internships</h2>
    <p>Career Fair Opportunity</p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
}
</script>

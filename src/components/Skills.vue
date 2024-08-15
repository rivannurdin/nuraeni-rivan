<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>    
    <div class="skills py-20 md:py-30 lg:py-30">
      <div class="grid grid-cols-3 lg:grid-cols-4">
        <div class="text-teal-300 text-left lg:text-right font-medium mb-5 lg:mb-0 row-span-0 lg:row-span-2 col-span-3 lg:col-auto">SKILLS</div>
        <div class="px-5 lg:px-10 mb-5 lg:mb-0 ">
          <p class="mb-2 text-zinc-100 font-medium">BACK-END</p>
          <p>PHP (Laravel, Lumen, Phalcon)</p>
          <p>Python (Fastapi, Django)</p>
          <p>NodeJS (Expressjs)</p>
        </div>
        <div class="px-5 md:px-5 lg:px-10">
          <p class="mb-2 text-zinc-100 font-medium">FRONT-END</p>
          <p>React</p>
          <p>Vue</p>
          <p>JQuery</p>
          <p>Bootstrap</p>
          <p>Tailwind</p>
        </div>
        <div class="px-5 lg:px-10">
          <p class="mb-2 text-zinc-100 font-medium">DATABASE</p>
          <p>MySQL</p>
          <p>PostgreSQL</p>
          <p>SQL Server</p>
        </div>
        <div class="px-5 lg:px-10 col-span-3 pt-5">
          <p class="mb-2 text-zinc-100 font-medium">TOOLS & PLATFORM</p>
          <p>Apache, Azure, Firebase, Figma, Flowchart, GIT, Github, Gitlab, Google Docs, Google Spreadsheets, Jira, pgAdmin4, Postman, Project/Product Management, REST APIs, S3 Storage, Scrum, Swagger, Trello, Wordpress</p>
        </div>
      </div>
    </div>
</template>

<style scoped>
</style>

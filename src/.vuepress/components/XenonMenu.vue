<template>
  <div class="xenon-option">
    <label><a href="https://github.com/xinuxuz/xenon">Xenon {{ xenon }}</a></label>
  </div>
</template>

<script>
import { dependencies } from "../../../package.json"
export default {
  data() {
    return {
      xenon: dependencies["vuepress-theme-xenon"].replace("^", "")
    }
  }
}
</script>

<style>
 .xenon-option {
   align-content: center;
   text-align: center;
 }
</style>

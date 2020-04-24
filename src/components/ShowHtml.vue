<template lang='pug'>
  .columns.is-multiline
    .column.is-half
      textarea.input(v-model='input' placeholder='Paste your text' oninput='this.style.height = ""; this.style.height = (this.scrollHeight+2) + "px"')
    .column.is-half
      pre.serif(v-html='output')
</template>

<script>
import { simple, math } from '@/unifonts';

export default {
  name: 'show-html',
  data() {
    return {
      input: '',
      simple,
      math,
    }
  },
  computed: {
    output() {
      let o = '';
      let currentTags = [];
      [...this.input].forEach(c => {
        let tagsToOpen = [];
        for (const font in this.math) {
          for (const alphabet in this.math[font]) {
            let index = this.math[font][alphabet].indexOf(c);
            if (index >= 0) {
              c = this.simple[alphabet][index];
              tagsToOpen = font.split(' ');
              break;
            }
          }
          if (tagsToOpen.length) break;
        }
        if (tagsToOpen.length || currentTags.length) {
          let tagsToClose = [];
          for (let i=0; i<currentTags.length; i++) {
            let index = tagsToOpen.indexOf(currentTags[i]);
            if (index >= 0) {
              tagsToOpen.splice(index,1);
            } else {
              tagsToClose = currentTags.splice(i,currentTags.length-i);
              break;
            }
          }
          tagsToClose.forEach(tag => {o += `</${tag}>`;});
          tagsToOpen.forEach(tag => {o += `<${tag}>`;});
          currentTags.push(...tagsToOpen);
        }
        o += c;
      });
      return o;
    }
  }
}
</script>

<style>
@import url('../../node_modules/typeface-unifrakturmaguntia');
@import url('../../node_modules/typeface-parisienne');

sans { font-family: sans-serif; }
frak { font-family: UnifrakturMaguntia; }
scrp { font-family: Parisienne, cursive; }
doub { font-family: sans-serif; font-weight: bold; }
mono { font-family: 'Courier New', Courier, monospace; }
</style>
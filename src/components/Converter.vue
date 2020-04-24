<template lang='pug'>
  span
    .columns.is-multiline
      .column.is-full
        textarea.input.serif(v-model='input' placeholder='Write your text' oninput='this.style.height = ""; this.style.height = (this.scrollHeight+2) + "px"')
    .columns.is-multiline(v-for='(alphabet, font) in fonts')
      .column.is-one-quarter(v-html='name[font]')
      pre.column.is-three-quarters(v-html='output[font]')
</template>

<script>
import { simple, fonts, name } from '@/unifonts';

export default {
  name: 'converter',
  data() {
    return {
      input: '',
      simple,
      fonts,
      name,
    }
  },
  computed: {
    output() {
      let o = {};
      for (let f in this.fonts) {
        const font = this.fonts[f];
        o[f] = [...this.input].map(c => {
          for (const alphabet in this.simple) {
            if (font[alphabet]) {
              let index = this.simple[alphabet].indexOf(c);
              if (index >= 0) {
                return font[alphabet][index];
              }
            }
          }
          return c
        }).join('');
      }
      return o;
    }
  }
}
</script>
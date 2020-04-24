<template lang='pug'>
  #app.has-background-light
    header.navbar.is-fixed-top.is-dark
      .container
        .navbar-brand
          a(href='/').navbar-item
            b.has-text-white unifonts
    section.section
      .container
        h4.title.is-size-5 Read unicode fonts in your outdated phone.
        show-html
    section.section
      .container
        h4.title.is-size-5 Convert your text to unicode fonts.
        converter
</template>

<script>
import ShowHtml from '@/components/ShowHtml.vue'
import Converter from '@/components/Converter.vue'

export default {
  name: 'App',
  components: {
    ShowHtml,
    Converter,
  },
}
</script>

<style>
@import url('../node_modules/bulma/css/bulma.min.css');
@import url('../node_modules/typeface-varela');

body {
  margin-top: 2.5rem;
  font-family: Varela, sans-serif;
  font-size: 18px;
}

pre, textarea {
  font-family: serif;
  font-size: inherit!important;
  max-height: fit-content!important;
  padding: calc(0.75em - 1px);
}
</style>

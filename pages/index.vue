<template>
    <div class="locales">
      <p>{{ $t('welcome') }}, {{ $t('dearCustomer') }}!</p>
    </div>
</template>

<script>
export default {
  async fetch({app}) {

    const currentLocale = app.i18n.locale

    try {
      const result = await app.$axios.get('locales/' + currentLocale + '.json')
      if (result.status === 200) {
        app.i18n.mergeLocaleMessage(currentLocale, result.data)
      }
    }
    catch (error) {
      console.error(error)
    }
  },
}
</script>

<style>
.locales > p{
  padding-top: 150px;
  align-items: center;
  text-align: center;
}
</style>

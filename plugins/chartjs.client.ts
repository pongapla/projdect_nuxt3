import { defineNuxtPlugin } from "#app";
import { Chart, registerables } from "chart.js"
import vueChart3 from "vue-chart-3";
Chart.register(...registerables);

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.config.globalProperties.SChart = Chart;
})
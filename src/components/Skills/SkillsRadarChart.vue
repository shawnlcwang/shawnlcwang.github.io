<template>
    <div class="skills-chart">
        <div
            id="chart-view"
            class="chart-display is-hidden-mobile"
        />
    </div>
</template>

<script>
import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';

HighchartsMore(Highcharts);

export default {
    name: 'SkillsRadarChart',

    data: () => ({
        // *************************************************
        // Chart object for chart api update without redraw
        // *************************************************
        chartObj: {},

        // *******************************************************
        // Chart options for chart initialization & export update
        // *******************************************************
        highchartsSpec: {
            chart: {
                polar: true,
                type: 'area', 
                backgroundColor: 'rgba(255, 255, 255, 0)',
            },

            accessibility: {
                description: 'A spiderweb/radar chart compares my professional skills.'
            },

            credits: {
                enabled: false,
            },

            title: {
                text: 'Employability',
                y: 60,
                style: { 'color': '#2f383a', 'fontSize' : '30px', 'fontWeight': '900' }
            },

            pane: {
                size: '70%'
            },

            // outer labels
            xAxis: {
                categories: [
                    'Communication', 
                    'Front-End', 
                    'Back-End',
                    'Problem Solving',
                    'Database',
                    'GIS', 
                ],
                tickmarkPlacement: 'on',
                lineWidth: 0, 
                gridLineColor: '#2f383a',
                labels: {
                    align: 'center',
                    distance: 40,
                    style: { 
                        'fontSize' : '15px', 'color' : '#26a19d'
                    }, 
                }
            },

            // inner labels
            yAxis: {
                gridLineInterpolation: 'circle',
                tickmarkPlacement: 'on',
                lineWidth: 0,
                gridLineColor: '#2f383a',
                labels: {
                    enabled: false,
                }
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>', 
                style: {
                    'fontSize' : '15px'
                }
            },

            legend: {
                verticalAlign: 'bottom',
                layout: 'vertical',
                floating: true,
                y: 10,
                itemStyle: {
                    'fontSize' : '16px'
                }
            },

            series: [
                {
                    name: 'Skills & Experience',
                    data: [8, 8, 6, 7, 5, 8],
                    pointPlacement: 'on', 
                    color: '#26a19d',
                }
            ],
        },
    }),

    mounted() {
        this.init();
    },

    methods: {
        // ****************************************************************
        // Methods for displaying data on the chart
        // ****************************************************************

        /**
         * Create and run this component's highcharts view
         * init() will not be re-rendered when chart data or options update
         */
        init() {
            // eslint-disable-next-line new-cap
            this.chartObj = Highcharts.chart('chart-view', this.highchartsSpec);
        },
    },
};
</script>

<style lang="scss">
@import "~@/assets/styles/appStyles.scss";

#chart-view {
    height:700px;
    width:100%;
}
</style>

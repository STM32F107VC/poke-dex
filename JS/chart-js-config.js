const CHART_JS_CONFIG = {
    type: 'bar',
    data: {
        labels: data.map(row => row.ability),
        datasets: [
            {
                label: 'Base stats',
                data: data.map(row => row.count),
                backgroundColor: [
                    '#11FF00',
                    '#FF0400',
                    '#FFBB00',
                    '#4400FF',
                    '#DDFF00',
                    '#EE00FF',
                ],
                borderWidth: 1
            }
        ],

    },
    options: {
        indexAxis: 'y',
        barPercentage: .6,
        borderRadius: 8,
        scales: {
            y: {

                display: true,

                grid: {
                    color: 'rgba(0,0,0,0.3)',
                    borderColor: 'grey',
                    tickColor: 'grey',
                    lineWidth: 1.5,
                },

                ticks: {
                    backdropColor: 'rgba(221, 115, 8, 0.75)',

                    major: {
                        enabled: 'false'
                    }
                },

                title: {
                    color: 'green',
                },

            },

            x: {
                border: {

                },
                ticks: {

                },
                grid: {
                    color: 'rgba(0,0,0,0.3)',
                    borderColor: 'grey',
                    tickColor: 'grey'
                },
            }
        },
        animation: {
            duration: 1000,
            easing: 'linear',
        },

        responsive: true,
        maintainAspectRatio: true,
    },
}

export { CHART_JS_CONFIG };
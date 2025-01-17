const CHART_JS_CONFIG = {
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
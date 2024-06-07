import ReactApexCharts from 'react-apexcharts'

const JackpotAmountCharts = ({ title }) => {
    const series = [
        {
            name: 'box',
            type: 'boxPlot',
            data: [
                {
                    x: new Date('2017-01-01').getTime(),
                    y: [54, 66, 69, 75, 88]
                },
                {
                    x: new Date('2018-01-01').getTime(),
                    y: [43, 65, 69, 76, 81]
                },
                {
                    x: new Date('2019-01-01').getTime(),
                    y: [31, 39, 45, 51, 59]
                },
                {
                    x: new Date('2020-01-01').getTime(),
                    y: [39, 46, 55, 65, 71]
                },
                {
                    x: new Date('2021-01-01').getTime(),
                    y: [29, 31, 35, 39, 44]
                }
            ]
        },
        {
            name: 'outliers',
            type: 'scatter',
            data: [
                {
                    x: new Date('2017-01-01').getTime(),
                    y: 32
                },
                {
                    x: new Date('2018-01-01').getTime(),
                    y: 25
                },
                {
                    x: new Date('2019-01-01').getTime(),
                    y: 64
                },
                {
                    x: new Date('2020-01-01').getTime(),
                    y: 27
                },
                {
                    x: new Date('2020-01-01').getTime(),
                    y: 78
                },
                {
                    x: new Date('2021-01-01').getTime(),
                    y: 15
                }
            ]
        }
    ]
    const options = {
        chart: {
            type: 'boxPlot',
            height: 350,
            toolbar: {
                show: false
            }
        },
        colors: ['#008ffb', '#feb019'],
        title: {
            text: title,
            align: 'left'
        },
        xaxis: {
            type: 'datetime',
            tooltip: {
                formatter: function (val) {
                    return new Date(val).getFullYear()
                }
            },

            labels: {
                show: false
            }
        },
        tooltip: {
            enabled: false,
            shared: false,
            intersect: true
        },

        legend: {
            show: false
        },

        yaxis: {
            show: false
        },
    }

    return (
        <ReactApexCharts options={options} series={series} type="boxPlot" height={350} />
    )
}

export default JackpotAmountCharts

// e1ad01
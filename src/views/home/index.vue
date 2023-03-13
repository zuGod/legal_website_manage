<template>
  <div class="home-container">
    <el-card class="box-card">
      <div class="box-container">
        <div ref="count"
             style="width:50%;height:400px;"></div>
        <div ref="num"
             style="width:50%;height:400px"></div>

      </div>
      <div ref="active"
           style="width:100%;height:400px"></div>
    </el-card>

  </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: 'HomeIndex',
  methods: {
    mainCount () {
      const myChart = echarts.init(this.$refs.count)
      const option = {
        title: {
          text: '网站浏览数量'
        },
        tooltip: {},
        legend: {
          data: ['数量']
        },
        xAxis: {
          data: ['2-24', '2-25', '2-26', '2-27', '2-28', '3-1']
        },
        yAxis: {},
        series: [
          {
            name: '数量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      }

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    },
    mainNum () {
      const myChart = echarts.init(this.$refs.num)
      const option = {
        title: {
          text: 'Temperature Change in the Coming Week'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {},
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            dataView: { readOnly: false },
            magicType: { type: ['line', 'bar'] },
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value} °C'
          }
        },
        series: [
          {
            name: 'Highest',
            type: 'line',
            data: [10, 11, 13, 11, 12, 12, 9],
            markPoint: {
              data: [
                { type: 'max', name: 'Max' },
                { type: 'min', name: 'Min' }
              ]
            },
            markLine: {
              data: [{ type: 'average', name: 'Avg' }]
            }
          },
          {
            name: 'Lowest',
            type: 'line',
            data: [1, -2, 2, 5, 3, 2, 0],
            markPoint: {
              data: [{ name: '周最低', value: -2, xAxis: 1, yAxis: -1.5 }]
            },
            markLine: {
              data: [
                { type: 'average', name: 'Avg' },
                [
                  {
                    symbol: 'none',
                    x: '90%',
                    yAxis: 'max'
                  },
                  {
                    symbol: 'circle',
                    label: {
                      position: 'start',
                      formatter: 'Max'
                    },
                    type: 'max',
                    name: '最高点'
                  }
                ]
              ]
            }
          }
        ]
      }

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    },
    mainActive () {
      const myChart = echarts.init(this.$refs.active)
      function randomData () {
        now = new Date(+now + oneDay)
        value = value + Math.random() * 21 - 10
        return {
          name: now.toString(),
          value: [
            [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
            Math.round(value)
          ]
        }
      }
      const data = []
      let now = new Date(1997, 9, 3)
      const oneDay = 24 * 3600 * 1000
      let value = Math.random() * 1000
      for (let i = 0; i < 1000; i++) {
        data.push(randomData())
      }
      const option = {
        title: {
          text: 'Dynamic Data & Time Axis'
        },
        tooltip: {
          trigger: 'axis',
          formatter: function (params) {
            params = params[0]
            const date = new Date(params.name)
            return (
              date.getDate() +
              '/' +
              (date.getMonth() + 1) +
              '/' +
              date.getFullYear() +
              ' : ' +
              params.value[1]
            )
          },
          axisPointer: {
            animation: false
          }
        },
        xAxis: {
          type: 'time',
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '100%'],
          splitLine: {
            show: false
          }
        },
        series: [
          {
            name: 'Fake Data',
            type: 'line',
            showSymbol: false,
            data: data
          }
        ]
      }
      setInterval(function () {
        for (let i = 0; i < 5; i++) {
          data.shift()
          data.push(randomData())
        }
        myChart.setOption({
          series: [
            {
              data: data
            }
          ]
        })
      }, 1000)
      myChart.setOption(option)
    }

  },
  mounted () {
    this.mainCount()
    this.mainNum()
    this.mainActive()
  }
}
</script>

<style lang="less" scoped>
.box-container {
  display: flex;
}
</style>

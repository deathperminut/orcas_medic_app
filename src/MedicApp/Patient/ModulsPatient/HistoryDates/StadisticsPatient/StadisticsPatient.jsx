import React from 'react';
import './StadisticsPatient.css';
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import 'malihu-custom-scrollbar-plugin';
import { AppContext } from '../../../../../context';
import Swal from 'sweetalert2';
import * as echarts from 'echarts';
import $ from "jquery"
import Preloader from '../../../../../components/Preloader/Preloader';
import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css';
import { FaEye } from "react-icons/fa";


export default function StadisticsPatient() {

    /* navigate */
    
    let navigate=useNavigate()
    
    /* appContext */
    
    let {userData,token,selectCompleteDate,setSelectCompleteDate} = React.useContext(AppContext);
    
    /* useState */
    
    let [preloader,setPreloader] = React.useState(false);
    
    /* UseEffect */
    
    React.useEffect(()=>{

    },[])

    /* functions */


    /* indicators */

    const [showOverlay, setShowOverlay] = React.useState(false);
    const [hiddenOverlay, setHiddenOverlay] = React.useState(true);
    const toggleOverlay = (cardId) => {
        setShowOverlay(cardId);
        setHiddenOverlay(false);
    };

    /* GRAFICA TENDENCIAS */
    
    React.useEffect(()=>{
        /**
     * GRAFICA SIGN IMC, PESO Y TALLA (LINE CHART)
     */

    let chartVitalSignsthree = echarts.init(document.getElementById('chart-vital-sign-three-'));
    let optionVitalSignsthree;

    const dataVitalSignsthree = [
      { valueOne: 'C1', valueTwo: 120, valueThree: 80, valueFour: 70 },
      { valueOne: 'C2', valueTwo: 23, valueThree: 10, valueFour: 25 },
      { valueOne: 'C3', valueTwo: 20, valueThree: 8, valueFour: 10 },
      { valueOne: 'C4', valueTwo: 30, valueThree: 15, valueFour: 32 },
      { valueOne: 'C5', valueTwo: 29, valueThree: 9, valueFour: 19 },
      { valueOne: 'C6', valueTwo: 21, valueThree: 6, valueFour: 20 },
      { valueOne: 'C7', valueTwo: 25, valueThree: 20, valueFour: 15 },
      { valueOne: 'C8', valueTwo: 20, valueThree: 10, valueFour: 15 },
      { valueOne: 'C9', valueTwo: 45, valueThree: 22, valueFour: 39 },
      { valueOne: 'C10', valueTwo: 50, valueThree: 40, valueFour: 40 },
      { valueOne: 'C11', valueTwo: 35, valueThree: 32, valueFour: 45 },
      { valueOne: 'C12', valueTwo: 5, valueThree: 2, valueFour: 52 },
      { valueOne: 'C13', valueTwo: 5, valueThree: 2, valueFour: 52 },
      { valueOne: 'C14', valueTwo: 5, valueThree: 2, valueFour: 52 },
      { valueOne: 'C15', valueTwo: 5, valueThree: 2, valueFour: 52 },
      { valueOne: 'C16', valueTwo: 5, valueThree: 2, valueFour: 52 }
    ];

    optionVitalSignsthree = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#FAFAFA',
            color: '#040E29',
            fontWeight: 'normal',
            fontFamily: 'Monserat-regular'
          }
        },
        showDelay: 0,
        transitionDuration: 0.2,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderWidth: 1,
        borderColor: '#FAFAFA',
        padding: 5,
        textStyle: {
          color: '#414D55',
          fontSize: 12,
          lineHeight:10,
          fontWeight: 'normal',
          fontFamily: 'Monserat-regular'
        },
        extraCssText: 'box-shadow: 0px 1px 8px #142E6E1A'
      },
      legend: {
        type: 'scroll',
        orient: 'horizontal',
        left: 'center',
        top: 10,
        bottom: 20,
        itemGap : 25,
        width: '90%',
        inactiveColor: '#728998',
        textStyle: {
          color: '#FAFAFA',
          fontWeight: 'normal',
          fontFamily: 'Monserat-regular, Verdana',
        },
        pageIconSize: 12,
        pageIconColor: '#FAFAFA',
        pageIconInactiveColor: '#414D55',
        pageTextStyle: {
          color: '#FAFAFA',
          fontWeight: 'normal',
          fontFamily: 'Monserat-regular, Verdana',
        },
        formatter : function(params, value){
          var newParamsName = "";
          var paramsNameNumber = params.length;
          var provideNumber = 50;
          var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
          if (paramsNameNumber > provideNumber) {
              for (var p = 0; p < rowNumber; p++) {
                var tempStr = "";
                if (p === rowNumber - 1) {
                    tempStr = (params.length > 6 ? (params.slice(0,50)+"...") : '' );
                } else {}
                newParamsName += tempStr;
              }
          } else {
              newParamsName = params;
          }
          return newParamsName
        },
        data: ['Media General', 'Media Theta', 'Media Alpha','Media Beta']
      },
      toolbox: {
        show: true,
        orient: 'horizontal',
        showTitle: false,
        feature: {
          dataZoom: {
            show: true,
            iconStyle: {
              borderColor: '#414D55'
            },
            emphasis: {
              iconStyle: {
                borderColor: '#414D55'
              },
            }
          },
          restore: {
            show: true,
            iconStyle: {
              borderColor: '#414D55'
            },
            emphasis: {
              iconStyle: {
                borderColor: '#414D55'
              },
            }
          },
          saveAsImage: {
            type: 'png',
            name: 'medidas_tendencia_activa',
            backgroundColor: '#272727',
            show: true,
            iconStyle: {
              borderColor: '#414D55'
            },
            emphasis: {
              iconStyle: {
                borderColor: '#414D55'
              },
            }
          }
        },
        iconStyle: {
          borderColor: '#414D55'
        },
        emphasis: {
          iconStyle: {
            borderColor: '#414D55'
          },
        },
        bottom: 0,
        pixelRatio: 2,
      },
      grid: [
        {
          containLabel: true,
          borderColor: '#728998'
        }
      ],
      xAxis: {
        type: 'category',
        name: 'Canal',
        nameLocation: 'middle',
        nameGap: 40,
        nameTextStyle: {
          color: '#FAFAFA',
          fontWeight: 'normal',
          fontFamily: 'Monserat-regular'
        },
        axisLabel: {
          color: '#FAFAFA',
          fontWeight: 'normal',
          fontFamily: 'Monserat-regular'
        },
        axisLine: {
          lineStyle: {
            color: '#728998',
            width: 1,
          }
        },
        boundaryGap: true,
        data: dataVitalSignsthree.map(item => item.valueOne)
      },
      yAxis: [
        {
          type: 'value',
          name: '',
          nameLocation: 'middle',
          nameGap: 50,
          nameTextStyle: {
            color: '#FAFAFA',
            fontWeight: 'normal',
            fontFamily: 'Monserat-regular'
          },
          axisLabel: {
            formatter : function(params, value){
              var newParamsName = "";
              var paramsNameNumber = params.length;
              var provideNumber = 12;
              var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
              if (paramsNameNumber > provideNumber) {
                  for (var p = 0; p < rowNumber; p++) {
                    var tempStr = "";
                    if (p === rowNumber - 1) {
                        tempStr = (params.length > 6 ? (params.slice(0,12)+"...") : '' );
                    } else {}
                    newParamsName += tempStr;
                  }
              } else {
                newParamsName = params;
              }
              return newParamsName
            },
            color: '#FAFAFA',
            fontWeight: 'normal',
            fontFamily: 'Monserat-regular'
          },
          boundaryGap: [0, '0%'],
          axisLine: {
            onZero: false,
            lineStyle: {
              color: '#728998',
              width: 1,
            }
          },
        },
        {
          type: 'value',
          name: '',
          nameLocation: 'middle',
          nameGap: 25,
          nameTextStyle: {
            color: '#FAFAFA',
            fontWeight: 'normal',
            fontFamily: 'Monserat-regular'
          },
          axisLabel: {
            formatter : function(params, value){
              var newParamsName = "";
              var paramsNameNumber = params.length;
              var provideNumber = 12;
              var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
              if (paramsNameNumber > provideNumber) {
                  for (var p = 0; p < rowNumber; p++) {
                    var tempStr = "";
                    if (p === rowNumber - 1) {
                        tempStr = (params.length > 6 ? (params.slice(0,12)+"...") : '' );
                    } else {}
                    newParamsName += tempStr;
                  }
              } else {
                newParamsName = params;
              }
              return newParamsName
            },
            color: '#728998',
            fontWeight: 'normal',
            fontFamily: 'Monserat-regular'
          },
          boundaryGap: [0, '0%'],
          axisLine: {
            onZero: false,
            lineStyle: {
              color: '#728998',
              width: 1,
            }
          },
        },
      ],
      series: [
        {
          type: 'line',
          symbol: 'circle',
          smooth: true,
          clip: true,
          lineStyle: {
            width: 2,
          },
          top: 15,
          name: 'Media General',
          label: {
            normal: {
              show: true,
              position: 'top',
              color: '#FAFAFA',
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            },
            emphasis: {
              show: true,
              position: 'top',
              color: '#414D55',
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            },
          },
          itemStyle: {
            color: "#d1a207",
            shadowBlur: 0,
            shadowOffsetY: 0,
          },
          lableLine: {
            normal: {
              show: false,
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            },
            emphasis: {
              show: true,
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            }
          },
          emphasis: {
            focus: 'series'
          },
          data: dataVitalSignsthree.map(item => item.valueTwo),
          animationDelay: function (idx) {
            return idx * 15;
          }
        },
        {
          type: 'line',
          symbol: 'circle',
          smooth: true,
          clip: true,
          lineStyle: {
            width: 2,
          },
          top: 15,
          name: 'Media Theta',
          label: {
            normal: {
              show: true,
              position: 'top',
              color: '#FAFAFA',
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            },
            emphasis: {
              show: true,
              position: 'top',
              color: '#414D55',
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            },
          },
          itemStyle: {
            color: "#F96767",
            shadowBlur: 0,
            shadowOffsetY: 0,
          },
          lableLine: {
            normal: {
              show: false,
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            },
            emphasis: {
              show: true,
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            }
          },
          emphasis: {
            focus: 'series'
          },
          data: dataVitalSignsthree.map(item => item.valueThree),
          animationDelay: function (idx) {
            return idx * 15;
          }
        },
        {
          type: 'line',
          symbol: 'circle',
          smooth: true,
          clip: true,
          lineStyle: {
            width: 2,
          },
          top: 15,
          name: 'Media Alpha',
          label: {
            normal: {
              show: true,
              position: 'top',
              color: '#FAFAFA',
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            },
            emphasis: {
              show: true,
              position: 'top',
              color: '#FAFAFA',
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            },
          },
          itemStyle: {
            color: "#F19420",
            shadowBlur: 0,
            shadowOffsetY: 0,
          },
          lableLine: {
            normal: {
              show: false,
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            },
            emphasis: {
              show: true,
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            }
          },
          emphasis: {
            focus: 'series'
          },
          data: dataVitalSignsthree.map(item => item.valueFour),
          animationDelay: function (idx) {
            return idx * 15;
          }
        },
        {
            type: 'line',
            symbol: 'circle',
            smooth: true,
            clip: true,
            lineStyle: {
              width: 2,
            },
            top: 15,
            name: 'Media Beta',
            label: {
              normal: {
                show: true,
                position: 'top',
                color: '#FAFAFA',
                fontSize: 12,
                fontWeight: 'normal',
                fontFamily: 'Monserat-regular'
              },
              emphasis: {
                show: true,
                position: 'top',
                color: '#FAFAFA',
                fontSize: 12,
                fontWeight: 'normal',
                fontFamily: 'Monserat-regular'
              },
            },
            itemStyle: {
              color: "#0463a2",
              shadowBlur: 0,
              shadowOffsetY: 0,
            },
            lableLine: {
              normal: {
                show: false,
                fontSize: 12,
                fontWeight: 'normal',
                fontFamily: 'Monserat-regular'
              },
              emphasis: {
                show: true,
                fontSize: 12,
                fontWeight: 'normal',
                fontFamily: 'Monserat-regular'
              }
            },
            emphasis: {
              focus: 'series'
            },
            data: dataVitalSignsthree.map(item => item.valueFour),
            animationDelay: function (idx) {
              return idx * 15;
            }
          }
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: function (idx) {
        return idx * 5;
      }
    };

    optionVitalSignsthree && chartVitalSignsthree.setOption(optionVitalSignsthree);

    $(window).on('resize', function(){
      if(chartVitalSignsthree != null && chartVitalSignsthree !== undefined){
        chartVitalSignsthree.resize();
      }
    });
    },[])

    React.useEffect(()=>{
        /**
     * GRAFICA SIGN IMC, PESO Y TALLA (LINE CHART)
     */

    let chartVitalSignsthree = echarts.init(document.getElementById('chart-vital-sign-four-'));
    let optionVitalSignsthree;

    const dataVitalSignsthree = [
      { valueOne: 'C1', valueTwo: 120, valueThree: 80, valueFour: 70 },
      { valueOne: 'C2', valueTwo: 23, valueThree: 10, valueFour: 25 },
      { valueOne: 'C3', valueTwo: 20, valueThree: 8, valueFour: 10 },
      { valueOne: 'C4', valueTwo: 30, valueThree: 15, valueFour: 32 },
      { valueOne: 'C5', valueTwo: 29, valueThree: 9, valueFour: 19 },
      { valueOne: 'C6', valueTwo: 21, valueThree: 6, valueFour: 20 },
      { valueOne: 'C7', valueTwo: 25, valueThree: 20, valueFour: 15 },
      { valueOne: 'C8', valueTwo: 20, valueThree: 10, valueFour: 15 },
      { valueOne: 'C9', valueTwo: 45, valueThree: 22, valueFour: 39 },
      { valueOne: 'C10', valueTwo: 50, valueThree: 40, valueFour: 40 },
      { valueOne: 'C11', valueTwo: 35, valueThree: 32, valueFour: 45 },
      { valueOne: 'C12', valueTwo: 5, valueThree: 2, valueFour: 52 },
      { valueOne: 'C13', valueTwo: 5, valueThree: 2, valueFour: 52 },
      { valueOne: 'C14', valueTwo: 5, valueThree: 2, valueFour: 52 },
      { valueOne: 'C15', valueTwo: 5, valueThree: 2, valueFour: 52 },
      { valueOne: 'C16', valueTwo: 5, valueThree: 2, valueFour: 52 }
    ];

    optionVitalSignsthree = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#FAFAFA',
            color: '#040E29',
            fontWeight: 'normal',
            fontFamily: 'Monserat-regular'
          }
        },
        showDelay: 0,
        transitionDuration: 0.2,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderWidth: 1,
        borderColor: '#FAFAFA',
        padding: 5,
        textStyle: {
          color: '#414D55',
          fontSize: 12,
          lineHeight:10,
          fontWeight: 'normal',
          fontFamily: 'Monserat-regular'
        },
        extraCssText: 'box-shadow: 0px 1px 8px #142E6E1A'
      },
      legend: {
        type: 'scroll',
        orient: 'horizontal',
        left: 'center',
        top: 10,
        bottom: 20,
        itemGap : 25,
        width: '90%',
        inactiveColor: '#728998',
        textStyle: {
          color: '#FAFAFA',
          fontWeight: 'normal',
          fontFamily: 'Monserat-regular, Verdana',
        },
        pageIconSize: 12,
        pageIconColor: '#FAFAFA',
        pageIconInactiveColor: '#414D55',
        pageTextStyle: {
          color: '#FAFAFA',
          fontWeight: 'normal',
          fontFamily: 'Monserat-regular, Verdana',
        },
        formatter : function(params, value){
          var newParamsName = "";
          var paramsNameNumber = params.length;
          var provideNumber = 50;
          var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
          if (paramsNameNumber > provideNumber) {
              for (var p = 0; p < rowNumber; p++) {
                var tempStr = "";
                if (p === rowNumber - 1) {
                    tempStr = (params.length > 6 ? (params.slice(0,50)+"...") : '' );
                } else {}
                newParamsName += tempStr;
              }
          } else {
              newParamsName = params;
          }
          return newParamsName
        },
        data: ['Mediana General', 'Mediana Theta', 'Mediana Alpha','Mediana Beta']
      },
      toolbox: {
        show: true,
        orient: 'horizontal',
        showTitle: false,
        feature: {
          dataZoom: {
            show: true,
            iconStyle: {
              borderColor: '#414D55'
            },
            emphasis: {
              iconStyle: {
                borderColor: '#414D55'
              },
            }
          },
          restore: {
            show: true,
            iconStyle: {
              borderColor: '#414D55'
            },
            emphasis: {
              iconStyle: {
                borderColor: '#414D55'
              },
            }
          },
          saveAsImage: {
            type: 'png',
            name: 'medidas_tendencia_activa',
            backgroundColor: '#272727',
            show: true,
            iconStyle: {
              borderColor: '#414D55'
            },
            emphasis: {
              iconStyle: {
                borderColor: '#414D55'
              },
            }
          }
        },
        iconStyle: {
          borderColor: '#414D55'
        },
        emphasis: {
          iconStyle: {
            borderColor: '#414D55'
          },
        },
        bottom: 0,
        pixelRatio: 2,
      },
      grid: [
        {
          containLabel: true,
          borderColor: '#728998'
        }
      ],
      xAxis: {
        type: 'category',
        name: 'Canal',
        nameLocation: 'middle',
        nameGap: 40,
        nameTextStyle: {
          color: '#FAFAFA',
          fontWeight: 'normal',
          fontFamily: 'Monserat-regular'
        },
        axisLabel: {
          color: '#FAFAFA',
          fontWeight: 'normal',
          fontFamily: 'Monserat-regular'
        },
        axisLine: {
          lineStyle: {
            color: '#728998',
            width: 1,
          }
        },
        boundaryGap: true,
        data: dataVitalSignsthree.map(item => item.valueOne)
      },
      yAxis: [
        {
          type: 'value',
          name: '',
          nameLocation: 'middle',
          nameGap: 50,
          nameTextStyle: {
            color: '#FAFAFA',
            fontWeight: 'normal',
            fontFamily: 'Monserat-regular'
          },
          axisLabel: {
            formatter : function(params, value){
              var newParamsName = "";
              var paramsNameNumber = params.length;
              var provideNumber = 12;
              var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
              if (paramsNameNumber > provideNumber) {
                  for (var p = 0; p < rowNumber; p++) {
                    var tempStr = "";
                    if (p === rowNumber - 1) {
                        tempStr = (params.length > 6 ? (params.slice(0,12)+"...") : '' );
                    } else {}
                    newParamsName += tempStr;
                  }
              } else {
                newParamsName = params;
              }
              return newParamsName
            },
            color: '#FAFAFA',
            fontWeight: 'normal',
            fontFamily: 'Monserat-regular'
          },
          boundaryGap: [0, '0%'],
          axisLine: {
            onZero: false,
            lineStyle: {
              color: '#728998',
              width: 1,
            }
          },
        },
        {
          type: 'value',
          name: '',
          nameLocation: 'middle',
          nameGap: 25,
          nameTextStyle: {
            color: '#FAFAFA',
            fontWeight: 'normal',
            fontFamily: 'Monserat-regular'
          },
          axisLabel: {
            formatter : function(params, value){
              var newParamsName = "";
              var paramsNameNumber = params.length;
              var provideNumber = 12;
              var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
              if (paramsNameNumber > provideNumber) {
                  for (var p = 0; p < rowNumber; p++) {
                    var tempStr = "";
                    if (p === rowNumber - 1) {
                        tempStr = (params.length > 6 ? (params.slice(0,12)+"...") : '' );
                    } else {}
                    newParamsName += tempStr;
                  }
              } else {
                newParamsName = params;
              }
              return newParamsName
            },
            color: '#728998',
            fontWeight: 'normal',
            fontFamily: 'Monserat-regular'
          },
          boundaryGap: [0, '0%'],
          axisLine: {
            onZero: false,
            lineStyle: {
              color: '#728998',
              width: 1,
            }
          },
        },
      ],
      series: [
        {
          type: 'line',
          symbol: 'circle',
          smooth: true,
          clip: true,
          lineStyle: {
            width: 2,
          },
          top: 15,
          name: 'Mediana General',
          label: {
            normal: {
              show: true,
              position: 'top',
              color: '#FAFAFA',
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            },
            emphasis: {
              show: true,
              position: 'top',
              color: '#414D55',
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            },
          },
          itemStyle: {
            color: "#d1a207",
            shadowBlur: 0,
            shadowOffsetY: 0,
          },
          lableLine: {
            normal: {
              show: false,
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            },
            emphasis: {
              show: true,
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            }
          },
          emphasis: {
            focus: 'series'
          },
          data: dataVitalSignsthree.map(item => item.valueTwo),
          animationDelay: function (idx) {
            return idx * 15;
          }
        },
        {
          type: 'line',
          symbol: 'circle',
          smooth: true,
          clip: true,
          lineStyle: {
            width: 2,
          },
          top: 15,
          name: 'Mediana Theta',
          label: {
            normal: {
              show: true,
              position: 'top',
              color: '#FAFAFA',
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            },
            emphasis: {
              show: true,
              position: 'top',
              color: '#414D55',
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            },
          },
          itemStyle: {
            color: "#F96767",
            shadowBlur: 0,
            shadowOffsetY: 0,
          },
          lableLine: {
            normal: {
              show: false,
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            },
            emphasis: {
              show: true,
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            }
          },
          emphasis: {
            focus: 'series'
          },
          data: dataVitalSignsthree.map(item => item.valueThree),
          animationDelay: function (idx) {
            return idx * 15;
          }
        },
        {
          type: 'line',
          symbol: 'circle',
          smooth: true,
          clip: true,
          lineStyle: {
            width: 2,
          },
          top: 15,
          name: 'Mediana Alpha',
          label: {
            normal: {
              show: true,
              position: 'top',
              color: '#FAFAFA',
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            },
            emphasis: {
              show: true,
              position: 'top',
              color: '#FAFAFA',
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            },
          },
          itemStyle: {
            color: "#F19420",
            shadowBlur: 0,
            shadowOffsetY: 0,
          },
          lableLine: {
            normal: {
              show: false,
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            },
            emphasis: {
              show: true,
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            }
          },
          emphasis: {
            focus: 'series'
          },
          data: dataVitalSignsthree.map(item => item.valueFour),
          animationDelay: function (idx) {
            return idx * 15;
          }
        },
        {
            type: 'line',
            symbol: 'circle',
            smooth: true,
            clip: true,
            lineStyle: {
              width: 2,
            },
            top: 15,
            name: 'Mediana Beta',
            label: {
              normal: {
                show: true,
                position: 'top',
                color: '#FAFAFA',
                fontSize: 12,
                fontWeight: 'normal',
                fontFamily: 'Monserat-regular'
              },
              emphasis: {
                show: true,
                position: 'top',
                color: '#FAFAFA',
                fontSize: 12,
                fontWeight: 'normal',
                fontFamily: 'Monserat-regular'
              },
            },
            itemStyle: {
              color: "#0463a2",
              shadowBlur: 0,
              shadowOffsetY: 0,
            },
            lableLine: {
              normal: {
                show: false,
                fontSize: 12,
                fontWeight: 'normal',
                fontFamily: 'Monserat-regular'
              },
              emphasis: {
                show: true,
                fontSize: 12,
                fontWeight: 'normal',
                fontFamily: 'Monserat-regular'
              }
            },
            emphasis: {
              focus: 'series'
            },
            data: dataVitalSignsthree.map(item => item.valueFour),
            animationDelay: function (idx) {
              return idx * 15;
            }
          }
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: function (idx) {
        return idx * 5;
      }
    };

    optionVitalSignsthree && chartVitalSignsthree.setOption(optionVitalSignsthree);

    $(window).on('resize', function(){
      if(chartVitalSignsthree != null && chartVitalSignsthree !== undefined){
        chartVitalSignsthree.resize();
      }
    });
    },[])


    React.useEffect(()=>{
        /**
     * GRAFICA SIGN IMC, PESO Y TALLA (LINE CHART)
     */

    let chartVitalSignsthree = echarts.init(document.getElementById('chart-vital-sign-five-'));
    let optionVitalSignsthree;

    const dataVitalSignsthree = [
      { valueOne: 'C1', valueTwo: 120, valueThree: 80, valueFour: 70 },
      { valueOne: 'C2', valueTwo: 23, valueThree: 10, valueFour: 25 },
      { valueOne: 'C3', valueTwo: 20, valueThree: 8, valueFour: 10 },
      { valueOne: 'C4', valueTwo: 30, valueThree: 15, valueFour: 32 },
      { valueOne: 'C5', valueTwo: 29, valueThree: 9, valueFour: 19 },
      { valueOne: 'C6', valueTwo: 21, valueThree: 6, valueFour: 20 },
      { valueOne: 'C7', valueTwo: 25, valueThree: 20, valueFour: 15 },
      { valueOne: 'C8', valueTwo: 20, valueThree: 10, valueFour: 15 },
      { valueOne: 'C9', valueTwo: 45, valueThree: 22, valueFour: 39 },
      { valueOne: 'C10', valueTwo: 50, valueThree: 40, valueFour: 40 },
      { valueOne: 'C11', valueTwo: 35, valueThree: 32, valueFour: 45 },
      { valueOne: 'C12', valueTwo: 5, valueThree: 2, valueFour: 52 },
      { valueOne: 'C13', valueTwo: 5, valueThree: 2, valueFour: 52 },
      { valueOne: 'C14', valueTwo: 5, valueThree: 2, valueFour: 52 },
      { valueOne: 'C15', valueTwo: 5, valueThree: 2, valueFour: 52 },
      { valueOne: 'C16', valueTwo: 5, valueThree: 2, valueFour: 52 }
    ];

    optionVitalSignsthree = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#FAFAFA',
            color: '#040E29',
            fontWeight: 'normal',
            fontFamily: 'Monserat-regular'
          }
        },
        showDelay: 0,
        transitionDuration: 0.2,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderWidth: 1,
        borderColor: '#FAFAFA',
        padding: 5,
        textStyle: {
          color: '#414D55',
          fontSize: 12,
          lineHeight:10,
          fontWeight: 'normal',
          fontFamily: 'Monserat-regular'
        },
        extraCssText: 'box-shadow: 0px 1px 8px #142E6E1A'
      },
      legend: {
        type: 'scroll',
        orient: 'horizontal',
        left: 'center',
        top: 10,
        bottom: 20,
        itemGap : 25,
        width: '90%',
        inactiveColor: '#728998',
        textStyle: {
          color: '#FAFAFA',
          fontWeight: 'normal',
          fontFamily: 'Monserat-regular, Verdana',
        },
        pageIconSize: 12,
        pageIconColor: '#FAFAFA',
        pageIconInactiveColor: '#414D55',
        pageTextStyle: {
          color: '#FAFAFA',
          fontWeight: 'normal',
          fontFamily: 'Monserat-regular, Verdana',
        },
        formatter : function(params, value){
          var newParamsName = "";
          var paramsNameNumber = params.length;
          var provideNumber = 50;
          var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
          if (paramsNameNumber > provideNumber) {
              for (var p = 0; p < rowNumber; p++) {
                var tempStr = "";
                if (p === rowNumber - 1) {
                    tempStr = (params.length > 6 ? (params.slice(0,50)+"...") : '' );
                } else {}
                newParamsName += tempStr;
              }
          } else {
              newParamsName = params;
          }
          return newParamsName
        },
        data: ['Varianza General', 'Varianza Theta', 'Varianza Alpha','Varianza Beta']
      },
      toolbox: {
        show: true,
        orient: 'horizontal',
        showTitle: false,
        feature: {
          dataZoom: {
            show: true,
            iconStyle: {
              borderColor: '#414D55'
            },
            emphasis: {
              iconStyle: {
                borderColor: '#414D55'
              },
            }
          },
          restore: {
            show: true,
            iconStyle: {
              borderColor: '#414D55'
            },
            emphasis: {
              iconStyle: {
                borderColor: '#414D55'
              },
            }
          },
          saveAsImage: {
            type: 'png',
            name: 'medidas_tendencia_activa',
            backgroundColor: '#272727',
            show: true,
            iconStyle: {
              borderColor: '#414D55'
            },
            emphasis: {
              iconStyle: {
                borderColor: '#414D55'
              },
            }
          }
        },
        iconStyle: {
          borderColor: '#414D55'
        },
        emphasis: {
          iconStyle: {
            borderColor: '#414D55'
          },
        },
        bottom: 0,
        pixelRatio: 2,
      },
      grid: [
        {
          containLabel: true,
          borderColor: '#728998'
        }
      ],
      xAxis: {
        type: 'category',
        name: 'Canal',
        nameLocation: 'middle',
        nameGap: 40,
        nameTextStyle: {
          color: '#FAFAFA',
          fontWeight: 'normal',
          fontFamily: 'Monserat-regular'
        },
        axisLabel: {
          color: '#FAFAFA',
          fontWeight: 'normal',
          fontFamily: 'Monserat-regular'
        },
        axisLine: {
          lineStyle: {
            color: '#728998',
            width: 1,
          }
        },
        boundaryGap: true,
        data: dataVitalSignsthree.map(item => item.valueOne)
      },
      yAxis: [
        {
          type: 'value',
          name: '',
          nameLocation: 'middle',
          nameGap: 50,
          nameTextStyle: {
            color: '#FAFAFA',
            fontWeight: 'normal',
            fontFamily: 'Monserat-regular'
          },
          axisLabel: {
            formatter : function(params, value){
              var newParamsName = "";
              var paramsNameNumber = params.length;
              var provideNumber = 12;
              var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
              if (paramsNameNumber > provideNumber) {
                  for (var p = 0; p < rowNumber; p++) {
                    var tempStr = "";
                    if (p === rowNumber - 1) {
                        tempStr = (params.length > 6 ? (params.slice(0,12)+"...") : '' );
                    } else {}
                    newParamsName += tempStr;
                  }
              } else {
                newParamsName = params;
              }
              return newParamsName
            },
            color: '#FAFAFA',
            fontWeight: 'normal',
            fontFamily: 'Monserat-regular'
          },
          boundaryGap: [0, '0%'],
          axisLine: {
            onZero: false,
            lineStyle: {
              color: '#728998',
              width: 1,
            }
          },
        },
        {
          type: 'value',
          name: '',
          nameLocation: 'middle',
          nameGap: 25,
          nameTextStyle: {
            color: '#FAFAFA',
            fontWeight: 'normal',
            fontFamily: 'Monserat-regular'
          },
          axisLabel: {
            formatter : function(params, value){
              var newParamsName = "";
              var paramsNameNumber = params.length;
              var provideNumber = 12;
              var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
              if (paramsNameNumber > provideNumber) {
                  for (var p = 0; p < rowNumber; p++) {
                    var tempStr = "";
                    if (p === rowNumber - 1) {
                        tempStr = (params.length > 6 ? (params.slice(0,12)+"...") : '' );
                    } else {}
                    newParamsName += tempStr;
                  }
              } else {
                newParamsName = params;
              }
              return newParamsName
            },
            color: '#728998',
            fontWeight: 'normal',
            fontFamily: 'Monserat-regular'
          },
          boundaryGap: [0, '0%'],
          axisLine: {
            onZero: false,
            lineStyle: {
              color: '#728998',
              width: 1,
            }
          },
        },
      ],
      series: [
        {
          type: 'line',
          symbol: 'circle',
          smooth: true,
          clip: true,
          lineStyle: {
            width: 2,
          },
          top: 15,
          name: 'Varianza General',
          label: {
            normal: {
              show: true,
              position: 'top',
              color: '#FAFAFA',
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            },
            emphasis: {
              show: true,
              position: 'top',
              color: '#414D55',
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            },
          },
          itemStyle: {
            color: "#d1a207",
            shadowBlur: 0,
            shadowOffsetY: 0,
          },
          lableLine: {
            normal: {
              show: false,
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            },
            emphasis: {
              show: true,
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            }
          },
          emphasis: {
            focus: 'series'
          },
          data: dataVitalSignsthree.map(item => item.valueTwo),
          animationDelay: function (idx) {
            return idx * 15;
          }
        },
        {
          type: 'line',
          symbol: 'circle',
          smooth: true,
          clip: true,
          lineStyle: {
            width: 2,
          },
          top: 15,
          name: 'Varianza Theta',
          label: {
            normal: {
              show: true,
              position: 'top',
              color: '#FAFAFA',
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            },
            emphasis: {
              show: true,
              position: 'top',
              color: '#414D55',
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            },
          },
          itemStyle: {
            color: "#F96767",
            shadowBlur: 0,
            shadowOffsetY: 0,
          },
          lableLine: {
            normal: {
              show: false,
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            },
            emphasis: {
              show: true,
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            }
          },
          emphasis: {
            focus: 'series'
          },
          data: dataVitalSignsthree.map(item => item.valueThree),
          animationDelay: function (idx) {
            return idx * 15;
          }
        },
        {
          type: 'line',
          symbol: 'circle',
          smooth: true,
          clip: true,
          lineStyle: {
            width: 2,
          },
          top: 15,
          name: 'Varianza Alpha',
          label: {
            normal: {
              show: true,
              position: 'top',
              color: '#FAFAFA',
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            },
            emphasis: {
              show: true,
              position: 'top',
              color: '#FAFAFA',
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            },
          },
          itemStyle: {
            color: "#F19420",
            shadowBlur: 0,
            shadowOffsetY: 0,
          },
          lableLine: {
            normal: {
              show: false,
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            },
            emphasis: {
              show: true,
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            }
          },
          emphasis: {
            focus: 'series'
          },
          data: dataVitalSignsthree.map(item => item.valueFour),
          animationDelay: function (idx) {
            return idx * 15;
          }
        },
        {
            type: 'line',
            symbol: 'circle',
            smooth: true,
            clip: true,
            lineStyle: {
              width: 2,
            },
            top: 15,
            name: 'Varianza Beta',
            label: {
              normal: {
                show: true,
                position: 'top',
                color: '#FAFAFA',
                fontSize: 12,
                fontWeight: 'normal',
                fontFamily: 'Monserat-regular'
              },
              emphasis: {
                show: true,
                position: 'top',
                color: '#FAFAFA',
                fontSize: 12,
                fontWeight: 'normal',
                fontFamily: 'Monserat-regular'
              },
            },
            itemStyle: {
              color: "#0463a2",
              shadowBlur: 0,
              shadowOffsetY: 0,
            },
            lableLine: {
              normal: {
                show: false,
                fontSize: 12,
                fontWeight: 'normal',
                fontFamily: 'Monserat-regular'
              },
              emphasis: {
                show: true,
                fontSize: 12,
                fontWeight: 'normal',
                fontFamily: 'Monserat-regular'
              }
            },
            emphasis: {
              focus: 'series'
            },
            data: dataVitalSignsthree.map(item => item.valueFour),
            animationDelay: function (idx) {
              return idx * 15;
            }
          }
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: function (idx) {
        return idx * 5;
      }
    };

    optionVitalSignsthree && chartVitalSignsthree.setOption(optionVitalSignsthree);

    $(window).on('resize', function(){
      if(chartVitalSignsthree != null && chartVitalSignsthree !== undefined){
        chartVitalSignsthree.resize();
      }
    });
    },[])



    /* SEÑALES EN REPOSO */


    React.useEffect(()=>{
        /**
     * GRAFICA SIGN IMC, PESO Y TALLA (LINE CHART)
     */

    let chartVitalSignsthree = echarts.init(document.getElementById('chart-vital-sign-seven-'));
    let optionVitalSignsthree;

    const dataVitalSignsthree = [
      { valueOne: 'C1', valueTwo: 120, valueThree: 80, valueFour: 70 },
      { valueOne: 'C2', valueTwo: 23, valueThree: 10, valueFour: 25 },
      { valueOne: 'C3', valueTwo: 20, valueThree: 8, valueFour: 10 },
      { valueOne: 'C4', valueTwo: 30, valueThree: 15, valueFour: 32 },
      { valueOne: 'C5', valueTwo: 29, valueThree: 9, valueFour: 19 },
      { valueOne: 'C6', valueTwo: 21, valueThree: 6, valueFour: 20 },
      { valueOne: 'C7', valueTwo: 25, valueThree: 20, valueFour: 15 },
      { valueOne: 'C8', valueTwo: 20, valueThree: 10, valueFour: 15 },
      { valueOne: 'C9', valueTwo: 45, valueThree: 22, valueFour: 39 },
      { valueOne: 'C10', valueTwo: 50, valueThree: 40, valueFour: 40 },
      { valueOne: 'C11', valueTwo: 35, valueThree: 32, valueFour: 45 },
      { valueOne: 'C12', valueTwo: 5, valueThree: 2, valueFour: 52 },
      { valueOne: 'C13', valueTwo: 5, valueThree: 2, valueFour: 52 },
      { valueOne: 'C14', valueTwo: 5, valueThree: 2, valueFour: 52 },
      { valueOne: 'C15', valueTwo: 5, valueThree: 2, valueFour: 52 },
      { valueOne: 'C16', valueTwo: 5, valueThree: 2, valueFour: 52 }
    ];

    optionVitalSignsthree = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#FAFAFA',
            color: '#040E29',
            fontWeight: 'normal',
            fontFamily: 'Monserat-regular'
          }
        },
        showDelay: 0,
        transitionDuration: 0.2,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderWidth: 1,
        borderColor: '#FAFAFA',
        padding: 5,
        textStyle: {
          color: '#414D55',
          fontSize: 12,
          lineHeight:10,
          fontWeight: 'normal',
          fontFamily: 'Monserat-regular'
        },
        extraCssText: 'box-shadow: 0px 1px 8px #142E6E1A'
      },
      legend: {
        type: 'scroll',
        orient: 'horizontal',
        left: 'center',
        top: 10,
        bottom: 20,
        itemGap : 25,
        width: '90%',
        inactiveColor: '#728998',
        textStyle: {
          color: '#FAFAFA',
          fontWeight: 'normal',
          fontFamily: 'Monserat-regular, Verdana',
        },
        pageIconSize: 12,
        pageIconColor: '#FAFAFA',
        pageIconInactiveColor: '#414D55',
        pageTextStyle: {
          color: '#FAFAFA',
          fontWeight: 'normal',
          fontFamily: 'Monserat-regular, Verdana',
        },
        formatter : function(params, value){
          var newParamsName = "";
          var paramsNameNumber = params.length;
          var provideNumber = 50;
          var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
          if (paramsNameNumber > provideNumber) {
              for (var p = 0; p < rowNumber; p++) {
                var tempStr = "";
                if (p === rowNumber - 1) {
                    tempStr = (params.length > 6 ? (params.slice(0,50)+"...") : '' );
                } else {}
                newParamsName += tempStr;
              }
          } else {
              newParamsName = params;
          }
          return newParamsName
        },
        data: ['Media General', 'Media Theta', 'Media Alpha','Media Beta']
      },
      toolbox: {
        show: true,
        orient: 'horizontal',
        showTitle: false,
        feature: {
          dataZoom: {
            show: true,
            iconStyle: {
              borderColor: '#414D55'
            },
            emphasis: {
              iconStyle: {
                borderColor: '#414D55'
              },
            }
          },
          restore: {
            show: true,
            iconStyle: {
              borderColor: '#414D55'
            },
            emphasis: {
              iconStyle: {
                borderColor: '#414D55'
              },
            }
          },
          saveAsImage: {
            type: 'png',
            name: 'medidas_tendencia_reposo',
            backgroundColor: '#272727',
            show: true,
            iconStyle: {
              borderColor: '#414D55'
            },
            emphasis: {
              iconStyle: {
                borderColor: '#414D55'
              },
            }
          }
        },
        iconStyle: {
          borderColor: '#414D55'
        },
        emphasis: {
          iconStyle: {
            borderColor: '#414D55'
          },
        },
        bottom: 0,
        pixelRatio: 2,
      },
      grid: [
        {
          containLabel: true,
          borderColor: '#728998'
        }
      ],
      xAxis: {
        type: 'category',
        name: 'Canal',
        nameLocation: 'middle',
        nameGap: 40,
        nameTextStyle: {
          color: '#FAFAFA',
          fontWeight: 'normal',
          fontFamily: 'Monserat-regular'
        },
        axisLabel: {
          color: '#FAFAFA',
          fontWeight: 'normal',
          fontFamily: 'Monserat-regular'
        },
        axisLine: {
          lineStyle: {
            color: '#728998',
            width: 1,
          }
        },
        boundaryGap: true,
        data: dataVitalSignsthree.map(item => item.valueOne)
      },
      yAxis: [
        {
          type: 'value',
          name: '',
          nameLocation: 'middle',
          nameGap: 50,
          nameTextStyle: {
            color: '#FAFAFA',
            fontWeight: 'normal',
            fontFamily: 'Monserat-regular'
          },
          axisLabel: {
            formatter : function(params, value){
              var newParamsName = "";
              var paramsNameNumber = params.length;
              var provideNumber = 12;
              var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
              if (paramsNameNumber > provideNumber) {
                  for (var p = 0; p < rowNumber; p++) {
                    var tempStr = "";
                    if (p === rowNumber - 1) {
                        tempStr = (params.length > 6 ? (params.slice(0,12)+"...") : '' );
                    } else {}
                    newParamsName += tempStr;
                  }
              } else {
                newParamsName = params;
              }
              return newParamsName
            },
            color: '#FAFAFA',
            fontWeight: 'normal',
            fontFamily: 'Monserat-regular'
          },
          boundaryGap: [0, '0%'],
          axisLine: {
            onZero: false,
            lineStyle: {
              color: '#728998',
              width: 1,
            }
          },
        },
        {
          type: 'value',
          name: '',
          nameLocation: 'middle',
          nameGap: 25,
          nameTextStyle: {
            color: '#FAFAFA',
            fontWeight: 'normal',
            fontFamily: 'Monserat-regular'
          },
          axisLabel: {
            formatter : function(params, value){
              var newParamsName = "";
              var paramsNameNumber = params.length;
              var provideNumber = 12;
              var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
              if (paramsNameNumber > provideNumber) {
                  for (var p = 0; p < rowNumber; p++) {
                    var tempStr = "";
                    if (p === rowNumber - 1) {
                        tempStr = (params.length > 6 ? (params.slice(0,12)+"...") : '' );
                    } else {}
                    newParamsName += tempStr;
                  }
              } else {
                newParamsName = params;
              }
              return newParamsName
            },
            color: '#728998',
            fontWeight: 'normal',
            fontFamily: 'Monserat-regular'
          },
          boundaryGap: [0, '0%'],
          axisLine: {
            onZero: false,
            lineStyle: {
              color: '#728998',
              width: 1,
            }
          },
        },
      ],
      series: [
        {
          type: 'line',
          symbol: 'circle',
          smooth: true,
          clip: true,
          lineStyle: {
            width: 2,
          },
          top: 15,
          name: 'Media General',
          label: {
            normal: {
              show: true,
              position: 'top',
              color: '#FAFAFA',
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            },
            emphasis: {
              show: true,
              position: 'top',
              color: '#414D55',
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            },
          },
          itemStyle: {
            color: "#d1a207",
            shadowBlur: 0,
            shadowOffsetY: 0,
          },
          lableLine: {
            normal: {
              show: false,
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            },
            emphasis: {
              show: true,
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            }
          },
          emphasis: {
            focus: 'series'
          },
          data: dataVitalSignsthree.map(item => item.valueTwo),
          animationDelay: function (idx) {
            return idx * 15;
          }
        },
        {
          type: 'line',
          symbol: 'circle',
          smooth: true,
          clip: true,
          lineStyle: {
            width: 2,
          },
          top: 15,
          name: 'Media Theta',
          label: {
            normal: {
              show: true,
              position: 'top',
              color: '#FAFAFA',
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            },
            emphasis: {
              show: true,
              position: 'top',
              color: '#414D55',
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            },
          },
          itemStyle: {
            color: "#F96767",
            shadowBlur: 0,
            shadowOffsetY: 0,
          },
          lableLine: {
            normal: {
              show: false,
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            },
            emphasis: {
              show: true,
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            }
          },
          emphasis: {
            focus: 'series'
          },
          data: dataVitalSignsthree.map(item => item.valueThree),
          animationDelay: function (idx) {
            return idx * 15;
          }
        },
        {
          type: 'line',
          symbol: 'circle',
          smooth: true,
          clip: true,
          lineStyle: {
            width: 2,
          },
          top: 15,
          name: 'Media Alpha',
          label: {
            normal: {
              show: true,
              position: 'top',
              color: '#FAFAFA',
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            },
            emphasis: {
              show: true,
              position: 'top',
              color: '#FAFAFA',
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            },
          },
          itemStyle: {
            color: "#F19420",
            shadowBlur: 0,
            shadowOffsetY: 0,
          },
          lableLine: {
            normal: {
              show: false,
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            },
            emphasis: {
              show: true,
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            }
          },
          emphasis: {
            focus: 'series'
          },
          data: dataVitalSignsthree.map(item => item.valueFour),
          animationDelay: function (idx) {
            return idx * 15;
          }
        },
        {
            type: 'line',
            symbol: 'circle',
            smooth: true,
            clip: true,
            lineStyle: {
              width: 2,
            },
            top: 15,
            name: 'Media Beta',
            label: {
              normal: {
                show: true,
                position: 'top',
                color: '#FAFAFA',
                fontSize: 12,
                fontWeight: 'normal',
                fontFamily: 'Monserat-regular'
              },
              emphasis: {
                show: true,
                position: 'top',
                color: '#FAFAFA',
                fontSize: 12,
                fontWeight: 'normal',
                fontFamily: 'Monserat-regular'
              },
            },
            itemStyle: {
              color: "#0463a2",
              shadowBlur: 0,
              shadowOffsetY: 0,
            },
            lableLine: {
              normal: {
                show: false,
                fontSize: 12,
                fontWeight: 'normal',
                fontFamily: 'Monserat-regular'
              },
              emphasis: {
                show: true,
                fontSize: 12,
                fontWeight: 'normal',
                fontFamily: 'Monserat-regular'
              }
            },
            emphasis: {
              focus: 'series'
            },
            data: dataVitalSignsthree.map(item => item.valueFour),
            animationDelay: function (idx) {
              return idx * 15;
            }
          }
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: function (idx) {
        return idx * 5;
      }
    };

    optionVitalSignsthree && chartVitalSignsthree.setOption(optionVitalSignsthree);

    $(window).on('resize', function(){
      if(chartVitalSignsthree != null && chartVitalSignsthree !== undefined){
        chartVitalSignsthree.resize();
      }
    });
    },[])

    React.useEffect(()=>{
        /**
     * GRAFICA SIGN IMC, PESO Y TALLA (LINE CHART)
     */

    let chartVitalSignsthree = echarts.init(document.getElementById('chart-vital-sign-eight-'));
    let optionVitalSignsthree;

    const dataVitalSignsthree = [
      { valueOne: 'C1', valueTwo: 120, valueThree: 80, valueFour: 70 },
      { valueOne: 'C2', valueTwo: 23, valueThree: 10, valueFour: 25 },
      { valueOne: 'C3', valueTwo: 20, valueThree: 8, valueFour: 10 },
      { valueOne: 'C4', valueTwo: 30, valueThree: 15, valueFour: 32 },
      { valueOne: 'C5', valueTwo: 29, valueThree: 9, valueFour: 19 },
      { valueOne: 'C6', valueTwo: 21, valueThree: 6, valueFour: 20 },
      { valueOne: 'C7', valueTwo: 25, valueThree: 20, valueFour: 15 },
      { valueOne: 'C8', valueTwo: 20, valueThree: 10, valueFour: 15 },
      { valueOne: 'C9', valueTwo: 45, valueThree: 22, valueFour: 39 },
      { valueOne: 'C10', valueTwo: 50, valueThree: 40, valueFour: 40 },
      { valueOne: 'C11', valueTwo: 35, valueThree: 32, valueFour: 45 },
      { valueOne: 'C12', valueTwo: 5, valueThree: 2, valueFour: 52 },
      { valueOne: 'C13', valueTwo: 5, valueThree: 2, valueFour: 52 },
      { valueOne: 'C14', valueTwo: 5, valueThree: 2, valueFour: 52 },
      { valueOne: 'C15', valueTwo: 5, valueThree: 2, valueFour: 52 },
      { valueOne: 'C16', valueTwo: 5, valueThree: 2, valueFour: 52 }
    ];

    optionVitalSignsthree = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#FAFAFA',
            color: '#040E29',
            fontWeight: 'normal',
            fontFamily: 'Monserat-regular'
          }
        },
        showDelay: 0,
        transitionDuration: 0.2,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderWidth: 1,
        borderColor: '#FAFAFA',
        padding: 5,
        textStyle: {
          color: '#414D55',
          fontSize: 12,
          lineHeight:10,
          fontWeight: 'normal',
          fontFamily: 'Monserat-regular'
        },
        extraCssText: 'box-shadow: 0px 1px 8px #142E6E1A'
      },
      legend: {
        type: 'scroll',
        orient: 'horizontal',
        left: 'center',
        top: 10,
        bottom: 20,
        itemGap : 25,
        width: '90%',
        inactiveColor: '#728998',
        textStyle: {
          color: '#FAFAFA',
          fontWeight: 'normal',
          fontFamily: 'Monserat-regular, Verdana',
        },
        pageIconSize: 12,
        pageIconColor: '#FAFAFA',
        pageIconInactiveColor: '#414D55',
        pageTextStyle: {
          color: '#FAFAFA',
          fontWeight: 'normal',
          fontFamily: 'Monserat-regular, Verdana',
        },
        formatter : function(params, value){
          var newParamsName = "";
          var paramsNameNumber = params.length;
          var provideNumber = 50;
          var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
          if (paramsNameNumber > provideNumber) {
              for (var p = 0; p < rowNumber; p++) {
                var tempStr = "";
                if (p === rowNumber - 1) {
                    tempStr = (params.length > 6 ? (params.slice(0,50)+"...") : '' );
                } else {}
                newParamsName += tempStr;
              }
          } else {
              newParamsName = params;
          }
          return newParamsName
        },
        data: ['Mediana General', 'Mediana Theta', 'Mediana Alpha','Mediana Beta']
      },
      toolbox: {
        show: true,
        orient: 'horizontal',
        showTitle: false,
        feature: {
          dataZoom: {
            show: true,
            iconStyle: {
              borderColor: '#414D55'
            },
            emphasis: {
              iconStyle: {
                borderColor: '#414D55'
              },
            }
          },
          restore: {
            show: true,
            iconStyle: {
              borderColor: '#414D55'
            },
            emphasis: {
              iconStyle: {
                borderColor: '#414D55'
              },
            }
          },
          saveAsImage: {
            type: 'png',
            name: 'medidas_tendencia_reposo',
            backgroundColor: '#272727',
            show: true,
            iconStyle: {
              borderColor: '#414D55'
            },
            emphasis: {
              iconStyle: {
                borderColor: '#414D55'
              },
            }
          }
        },
        iconStyle: {
          borderColor: '#414D55'
        },
        emphasis: {
          iconStyle: {
            borderColor: '#414D55'
          },
        },
        bottom: 0,
        pixelRatio: 2,
      },
      grid: [
        {
          containLabel: true,
          borderColor: '#728998'
        }
      ],
      xAxis: {
        type: 'category',
        name: 'Canal',
        nameLocation: 'middle',
        nameGap: 40,
        nameTextStyle: {
          color: '#FAFAFA',
          fontWeight: 'normal',
          fontFamily: 'Monserat-regular'
        },
        axisLabel: {
          color: '#FAFAFA',
          fontWeight: 'normal',
          fontFamily: 'Monserat-regular'
        },
        axisLine: {
          lineStyle: {
            color: '#728998',
            width: 1,
          }
        },
        boundaryGap: true,
        data: dataVitalSignsthree.map(item => item.valueOne)
      },
      yAxis: [
        {
          type: 'value',
          name: '',
          nameLocation: 'middle',
          nameGap: 50,
          nameTextStyle: {
            color: '#FAFAFA',
            fontWeight: 'normal',
            fontFamily: 'Monserat-regular'
          },
          axisLabel: {
            formatter : function(params, value){
              var newParamsName = "";
              var paramsNameNumber = params.length;
              var provideNumber = 12;
              var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
              if (paramsNameNumber > provideNumber) {
                  for (var p = 0; p < rowNumber; p++) {
                    var tempStr = "";
                    if (p === rowNumber - 1) {
                        tempStr = (params.length > 6 ? (params.slice(0,12)+"...") : '' );
                    } else {}
                    newParamsName += tempStr;
                  }
              } else {
                newParamsName = params;
              }
              return newParamsName
            },
            color: '#FAFAFA',
            fontWeight: 'normal',
            fontFamily: 'Monserat-regular'
          },
          boundaryGap: [0, '0%'],
          axisLine: {
            onZero: false,
            lineStyle: {
              color: '#728998',
              width: 1,
            }
          },
        },
        {
          type: 'value',
          name: '',
          nameLocation: 'middle',
          nameGap: 25,
          nameTextStyle: {
            color: '#FAFAFA',
            fontWeight: 'normal',
            fontFamily: 'Monserat-regular'
          },
          axisLabel: {
            formatter : function(params, value){
              var newParamsName = "";
              var paramsNameNumber = params.length;
              var provideNumber = 12;
              var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
              if (paramsNameNumber > provideNumber) {
                  for (var p = 0; p < rowNumber; p++) {
                    var tempStr = "";
                    if (p === rowNumber - 1) {
                        tempStr = (params.length > 6 ? (params.slice(0,12)+"...") : '' );
                    } else {}
                    newParamsName += tempStr;
                  }
              } else {
                newParamsName = params;
              }
              return newParamsName
            },
            color: '#728998',
            fontWeight: 'normal',
            fontFamily: 'Monserat-regular'
          },
          boundaryGap: [0, '0%'],
          axisLine: {
            onZero: false,
            lineStyle: {
              color: '#728998',
              width: 1,
            }
          },
        },
      ],
      series: [
        {
          type: 'line',
          symbol: 'circle',
          smooth: true,
          clip: true,
          lineStyle: {
            width: 2,
          },
          top: 15,
          name: 'Mediana General',
          label: {
            normal: {
              show: true,
              position: 'top',
              color: '#FAFAFA',
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            },
            emphasis: {
              show: true,
              position: 'top',
              color: '#414D55',
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            },
          },
          itemStyle: {
            color: "#d1a207",
            shadowBlur: 0,
            shadowOffsetY: 0,
          },
          lableLine: {
            normal: {
              show: false,
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            },
            emphasis: {
              show: true,
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            }
          },
          emphasis: {
            focus: 'series'
          },
          data: dataVitalSignsthree.map(item => item.valueTwo),
          animationDelay: function (idx) {
            return idx * 15;
          }
        },
        {
          type: 'line',
          symbol: 'circle',
          smooth: true,
          clip: true,
          lineStyle: {
            width: 2,
          },
          top: 15,
          name: 'Mediana Theta',
          label: {
            normal: {
              show: true,
              position: 'top',
              color: '#FAFAFA',
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            },
            emphasis: {
              show: true,
              position: 'top',
              color: '#414D55',
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            },
          },
          itemStyle: {
            color: "#F96767",
            shadowBlur: 0,
            shadowOffsetY: 0,
          },
          lableLine: {
            normal: {
              show: false,
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            },
            emphasis: {
              show: true,
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            }
          },
          emphasis: {
            focus: 'series'
          },
          data: dataVitalSignsthree.map(item => item.valueThree),
          animationDelay: function (idx) {
            return idx * 15;
          }
        },
        {
          type: 'line',
          symbol: 'circle',
          smooth: true,
          clip: true,
          lineStyle: {
            width: 2,
          },
          top: 15,
          name: 'Mediana Alpha',
          label: {
            normal: {
              show: true,
              position: 'top',
              color: '#FAFAFA',
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            },
            emphasis: {
              show: true,
              position: 'top',
              color: '#FAFAFA',
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            },
          },
          itemStyle: {
            color: "#F19420",
            shadowBlur: 0,
            shadowOffsetY: 0,
          },
          lableLine: {
            normal: {
              show: false,
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            },
            emphasis: {
              show: true,
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            }
          },
          emphasis: {
            focus: 'series'
          },
          data: dataVitalSignsthree.map(item => item.valueFour),
          animationDelay: function (idx) {
            return idx * 15;
          }
        },
        {
            type: 'line',
            symbol: 'circle',
            smooth: true,
            clip: true,
            lineStyle: {
              width: 2,
            },
            top: 15,
            name: 'Mediana Beta',
            label: {
              normal: {
                show: true,
                position: 'top',
                color: '#FAFAFA',
                fontSize: 12,
                fontWeight: 'normal',
                fontFamily: 'Monserat-regular'
              },
              emphasis: {
                show: true,
                position: 'top',
                color: '#FAFAFA',
                fontSize: 12,
                fontWeight: 'normal',
                fontFamily: 'Monserat-regular'
              },
            },
            itemStyle: {
              color: "#0463a2",
              shadowBlur: 0,
              shadowOffsetY: 0,
            },
            lableLine: {
              normal: {
                show: false,
                fontSize: 12,
                fontWeight: 'normal',
                fontFamily: 'Monserat-regular'
              },
              emphasis: {
                show: true,
                fontSize: 12,
                fontWeight: 'normal',
                fontFamily: 'Monserat-regular'
              }
            },
            emphasis: {
              focus: 'series'
            },
            data: dataVitalSignsthree.map(item => item.valueFour),
            animationDelay: function (idx) {
              return idx * 15;
            }
          }
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: function (idx) {
        return idx * 5;
      }
    };

    optionVitalSignsthree && chartVitalSignsthree.setOption(optionVitalSignsthree);

    $(window).on('resize', function(){
      if(chartVitalSignsthree != null && chartVitalSignsthree !== undefined){
        chartVitalSignsthree.resize();
      }
    });
    },[])


    React.useEffect(()=>{
        /**
     * GRAFICA SIGN IMC, PESO Y TALLA (LINE CHART)
     */

    let chartVitalSignsthree = echarts.init(document.getElementById('chart-vital-sign-nine-'));
    let optionVitalSignsthree;

    const dataVitalSignsthree = [
      { valueOne: 'C1', valueTwo: 120, valueThree: 80, valueFour: 70 },
      { valueOne: 'C2', valueTwo: 23, valueThree: 10, valueFour: 25 },
      { valueOne: 'C3', valueTwo: 20, valueThree: 8, valueFour: 10 },
      { valueOne: 'C4', valueTwo: 30, valueThree: 15, valueFour: 32 },
      { valueOne: 'C5', valueTwo: 29, valueThree: 9, valueFour: 19 },
      { valueOne: 'C6', valueTwo: 21, valueThree: 6, valueFour: 20 },
      { valueOne: 'C7', valueTwo: 25, valueThree: 20, valueFour: 15 },
      { valueOne: 'C8', valueTwo: 20, valueThree: 10, valueFour: 15 },
      { valueOne: 'C9', valueTwo: 45, valueThree: 22, valueFour: 39 },
      { valueOne: 'C10', valueTwo: 50, valueThree: 40, valueFour: 40 },
      { valueOne: 'C11', valueTwo: 35, valueThree: 32, valueFour: 45 },
      { valueOne: 'C12', valueTwo: 5, valueThree: 2, valueFour: 52 },
      { valueOne: 'C13', valueTwo: 5, valueThree: 2, valueFour: 52 },
      { valueOne: 'C14', valueTwo: 5, valueThree: 2, valueFour: 52 },
      { valueOne: 'C15', valueTwo: 5, valueThree: 2, valueFour: 52 },
      { valueOne: 'C16', valueTwo: 5, valueThree: 2, valueFour: 52 }
    ];

    optionVitalSignsthree = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#FAFAFA',
            color: '#040E29',
            fontWeight: 'normal',
            fontFamily: 'Monserat-regular'
          }
        },
        showDelay: 0,
        transitionDuration: 0.2,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderWidth: 1,
        borderColor: '#FAFAFA',
        padding: 5,
        textStyle: {
          color: '#414D55',
          fontSize: 12,
          lineHeight:10,
          fontWeight: 'normal',
          fontFamily: 'Monserat-regular'
        },
        extraCssText: 'box-shadow: 0px 1px 8px #142E6E1A'
      },
      legend: {
        type: 'scroll',
        orient: 'horizontal',
        left: 'center',
        top: 10,
        bottom: 20,
        itemGap : 25,
        width: '90%',
        inactiveColor: '#728998',
        textStyle: {
          color: '#FAFAFA',
          fontWeight: 'normal',
          fontFamily: 'Monserat-regular, Verdana',
        },
        pageIconSize: 12,
        pageIconColor: '#FAFAFA',
        pageIconInactiveColor: '#414D55',
        pageTextStyle: {
          color: '#FAFAFA',
          fontWeight: 'normal',
          fontFamily: 'Monserat-regular, Verdana',
        },
        formatter : function(params, value){
          var newParamsName = "";
          var paramsNameNumber = params.length;
          var provideNumber = 50;
          var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
          if (paramsNameNumber > provideNumber) {
              for (var p = 0; p < rowNumber; p++) {
                var tempStr = "";
                if (p === rowNumber - 1) {
                    tempStr = (params.length > 6 ? (params.slice(0,50)+"...") : '' );
                } else {}
                newParamsName += tempStr;
              }
          } else {
              newParamsName = params;
          }
          return newParamsName
        },
        data: ['Varianza General', 'Varianza Theta', 'Varianza Alpha','Varianza Beta']
      },
      toolbox: {
        show: true,
        orient: 'horizontal',
        showTitle: false,
        feature: {
          dataZoom: {
            show: true,
            iconStyle: {
              borderColor: '#414D55'
            },
            emphasis: {
              iconStyle: {
                borderColor: '#414D55'
              },
            }
          },
          restore: {
            show: true,
            iconStyle: {
              borderColor: '#414D55'
            },
            emphasis: {
              iconStyle: {
                borderColor: '#414D55'
              },
            }
          },
          saveAsImage: {
            type: 'png',
            name: 'medidas_tendencia_reposo',
            backgroundColor: '#272727',
            show: true,
            iconStyle: {
              borderColor: '#414D55'
            },
            emphasis: {
              iconStyle: {
                borderColor: '#414D55'
              },
            }
          }
        },
        iconStyle: {
          borderColor: '#414D55'
        },
        emphasis: {
          iconStyle: {
            borderColor: '#414D55'
          },
        },
        bottom: 0,
        pixelRatio: 2,
      },
      grid: [
        {
          containLabel: true,
          borderColor: '#728998'
        }
      ],
      xAxis: {
        type: 'category',
        name: 'Canal',
        nameLocation: 'middle',
        nameGap: 40,
        nameTextStyle: {
          color: '#FAFAFA',
          fontWeight: 'normal',
          fontFamily: 'Monserat-regular'
        },
        axisLabel: {
          color: '#FAFAFA',
          fontWeight: 'normal',
          fontFamily: 'Monserat-regular'
        },
        axisLine: {
          lineStyle: {
            color: '#728998',
            width: 1,
          }
        },
        boundaryGap: true,
        data: dataVitalSignsthree.map(item => item.valueOne)
      },
      yAxis: [
        {
          type: 'value',
          name: '',
          nameLocation: 'middle',
          nameGap: 50,
          nameTextStyle: {
            color: '#FAFAFA',
            fontWeight: 'normal',
            fontFamily: 'Monserat-regular'
          },
          axisLabel: {
            formatter : function(params, value){
              var newParamsName = "";
              var paramsNameNumber = params.length;
              var provideNumber = 12;
              var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
              if (paramsNameNumber > provideNumber) {
                  for (var p = 0; p < rowNumber; p++) {
                    var tempStr = "";
                    if (p === rowNumber - 1) {
                        tempStr = (params.length > 6 ? (params.slice(0,12)+"...") : '' );
                    } else {}
                    newParamsName += tempStr;
                  }
              } else {
                newParamsName = params;
              }
              return newParamsName
            },
            color: '#FAFAFA',
            fontWeight: 'normal',
            fontFamily: 'Monserat-regular'
          },
          boundaryGap: [0, '0%'],
          axisLine: {
            onZero: false,
            lineStyle: {
              color: '#728998',
              width: 1,
            }
          },
        },
        {
          type: 'value',
          name: '',
          nameLocation: 'middle',
          nameGap: 25,
          nameTextStyle: {
            color: '#FAFAFA',
            fontWeight: 'normal',
            fontFamily: 'Monserat-regular'
          },
          axisLabel: {
            formatter : function(params, value){
              var newParamsName = "";
              var paramsNameNumber = params.length;
              var provideNumber = 12;
              var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
              if (paramsNameNumber > provideNumber) {
                  for (var p = 0; p < rowNumber; p++) {
                    var tempStr = "";
                    if (p === rowNumber - 1) {
                        tempStr = (params.length > 6 ? (params.slice(0,12)+"...") : '' );
                    } else {}
                    newParamsName += tempStr;
                  }
              } else {
                newParamsName = params;
              }
              return newParamsName
            },
            color: '#728998',
            fontWeight: 'normal',
            fontFamily: 'Monserat-regular'
          },
          boundaryGap: [0, '0%'],
          axisLine: {
            onZero: false,
            lineStyle: {
              color: '#728998',
              width: 1,
            }
          },
        },
      ],
      series: [
        {
          type: 'line',
          symbol: 'circle',
          smooth: true,
          clip: true,
          lineStyle: {
            width: 2,
          },
          top: 15,
          name: 'Varianza General',
          label: {
            normal: {
              show: true,
              position: 'top',
              color: '#FAFAFA',
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            },
            emphasis: {
              show: true,
              position: 'top',
              color: '#414D55',
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            },
          },
          itemStyle: {
            color: "#d1a207",
            shadowBlur: 0,
            shadowOffsetY: 0,
          },
          lableLine: {
            normal: {
              show: false,
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            },
            emphasis: {
              show: true,
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            }
          },
          emphasis: {
            focus: 'series'
          },
          data: dataVitalSignsthree.map(item => item.valueTwo),
          animationDelay: function (idx) {
            return idx * 15;
          }
        },
        {
          type: 'line',
          symbol: 'circle',
          smooth: true,
          clip: true,
          lineStyle: {
            width: 2,
          },
          top: 15,
          name: 'Varianza Theta',
          label: {
            normal: {
              show: true,
              position: 'top',
              color: '#FAFAFA',
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            },
            emphasis: {
              show: true,
              position: 'top',
              color: '#414D55',
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            },
          },
          itemStyle: {
            color: "#F96767",
            shadowBlur: 0,
            shadowOffsetY: 0,
          },
          lableLine: {
            normal: {
              show: false,
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            },
            emphasis: {
              show: true,
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            }
          },
          emphasis: {
            focus: 'series'
          },
          data: dataVitalSignsthree.map(item => item.valueThree),
          animationDelay: function (idx) {
            return idx * 15;
          }
        },
        {
          type: 'line',
          symbol: 'circle',
          smooth: true,
          clip: true,
          lineStyle: {
            width: 2,
          },
          top: 15,
          name: 'Varianza Alpha',
          label: {
            normal: {
              show: true,
              position: 'top',
              color: '#FAFAFA',
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            },
            emphasis: {
              show: true,
              position: 'top',
              color: '#FAFAFA',
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            },
          },
          itemStyle: {
            color: "#F19420",
            shadowBlur: 0,
            shadowOffsetY: 0,
          },
          lableLine: {
            normal: {
              show: false,
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            },
            emphasis: {
              show: true,
              fontSize: 12,
              fontWeight: 'normal',
              fontFamily: 'Monserat-regular'
            }
          },
          emphasis: {
            focus: 'series'
          },
          data: dataVitalSignsthree.map(item => item.valueFour),
          animationDelay: function (idx) {
            return idx * 15;
          }
        },
        {
            type: 'line',
            symbol: 'circle',
            smooth: true,
            clip: true,
            lineStyle: {
              width: 2,
            },
            top: 15,
            name: 'Varianza Beta',
            label: {
              normal: {
                show: true,
                position: 'top',
                color: '#FAFAFA',
                fontSize: 12,
                fontWeight: 'normal',
                fontFamily: 'Monserat-regular'
              },
              emphasis: {
                show: true,
                position: 'top',
                color: '#FAFAFA',
                fontSize: 12,
                fontWeight: 'normal',
                fontFamily: 'Monserat-regular'
              },
            },
            itemStyle: {
              color: "#0463a2",
              shadowBlur: 0,
              shadowOffsetY: 0,
            },
            lableLine: {
              normal: {
                show: false,
                fontSize: 12,
                fontWeight: 'normal',
                fontFamily: 'Monserat-regular'
              },
              emphasis: {
                show: true,
                fontSize: 12,
                fontWeight: 'normal',
                fontFamily: 'Monserat-regular'
              }
            },
            emphasis: {
              focus: 'series'
            },
            data: dataVitalSignsthree.map(item => item.valueFour),
            animationDelay: function (idx) {
              return idx * 15;
            }
          }
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: function (idx) {
        return idx * 5;
      }
    };

    optionVitalSignsthree && chartVitalSignsthree.setOption(optionVitalSignsthree);

    $(window).on('resize', function(){
      if(chartVitalSignsthree != null && chartVitalSignsthree !== undefined){
        chartVitalSignsthree.resize();
      }
    });
    },[])




    return (
        <React.Fragment>
            <div className='ContainerGraph'>
                <div className='d-flex flex-row justify-content-between align-items-center align-self-center mb-1'>
                        <h1 className='m-0 p-0 lh-sm fs-4- ff-monse-regular- fw-bold tx-dark-purple- font_medium white orangeV3'>
                            Análisis señal activa
                        </h1>
                </div>
                <div id='wrapper-data-table' className='w-100 position-relative'>
                                <div className='card-body p-4 pt-0 pb-0 w-100'>
                                    <div className='table-responsive table-general-'>
                                    <table className='table table-sm table-striped table-no-border- align-middle'>
                                        <thead>
                                        <tr>
                                            <th scope="col" className='th-width-sm-'>
                                            <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                                <span className='fs-5- ff-monse-regular- fw-bold tx-dark-purple- font_medium '>Canal</span>
                                            </div>
                                            </th>
                                            <th scope="col" className='th-width-sm-'>
                                            <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                                <span className='fs-5- ff-monse-regular- fw-bold tx-dark-purple- font_medium'>Máximo (General)</span>
                                            </div>
                                            </th>
                                            <th scope="col" className='th-width-sm-'>
                                            <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                                <span className='fs-5- ff-monse-regular- fw-bold tx-dark-purple- font_medium'>Máximo (banda theta)</span>
                                            </div>
                                            </th>
                                            <th scope="col" className='th-width-sm-'>
                                            <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                                <span className='fs-5- ff-monse-regular- fw-bold tx-dark-purple- font_medium'>Máximo (banda alpha)</span>
                                            </div>
                                            </th>
                                            <th scope="col" className='th-width-sm-'>
                                            <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                                <span className='fs-5- ff-monse-regular- fw-bold tx-dark-purple- font_medium'>Máximo (banda beta)</span>
                                            </div>
                                            </th>
                                            
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium orangeV3'>C1</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>19</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C2</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>23</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C3</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>20</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C4</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>30</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C5</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>29</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C6</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>21</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C7</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>25</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C8</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>20</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C9</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>45</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>50</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C11</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center '>35</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C12</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>5</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C13</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>5</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C14</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>5</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C15</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>5</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C16</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>5</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    </div>
                                </div>
                </div>
                <div id='wrapper-data-table' className='w-100 position-relative'>
                                <div className='card-body p-4 pt-0 pb-0 w-100'>
                                    <div className='table-responsive table-general-'>
                                    <table className='table table-sm table-striped table-no-border- align-middle'>
                                        <thead>
                                        <tr>
                                            <th scope="col" className='th-width-sm-'>
                                            <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                                <span className='fs-5- ff-monse-regular- fw-bold tx-dark-purple- font_medium '>Canal</span>
                                            </div>
                                            </th>
                                            <th scope="col" className='th-width-sm-'>
                                            <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                                <span className='fs-5- ff-monse-regular- fw-bold tx-dark-purple- font_medium'>Mínimo (General)</span>
                                            </div>
                                            </th>
                                            <th scope="col" className='th-width-sm-'>
                                            <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                                <span className='fs-5- ff-monse-regular- fw-bold tx-dark-purple- font_medium'>Mínimo (banda theta)</span>
                                            </div>
                                            </th>
                                            <th scope="col" className='th-width-sm-'>
                                            <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                                <span className='fs-5- ff-monse-regular- fw-bold tx-dark-purple- font_medium'>Mínimo (banda alpha)</span>
                                            </div>
                                            </th>
                                            <th scope="col" className='th-width-sm-'>
                                            <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                                <span className='fs-5- ff-monse-regular- fw-bold tx-dark-purple- font_medium'>Mínimo (banda beta)</span>
                                            </div>
                                            </th>
                                            
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium orangeV3'>C1</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>19</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C2</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>23</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C3</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>20</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C4</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>30</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C5</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>29</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C6</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>21</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C7</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>25</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C8</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>20</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C9</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>45</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>50</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C11</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center '>35</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C12</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>5</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C13</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>5</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C14</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>5</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C15</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>5</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C16</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>5</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    </div>
                                </div>
                </div>
                
                {/* <div className='card-body p-4 w-100' style={{'width':'100%','height':'400px'}}>
                    <div className='w-100 h-100 mx-auto' id='chart-adverse-events-one-' style={{'width':'100%','height':'400px'}}></div>
                </div> */}
                

                <div className='d-flex flex-row justify-content-between align-items-center align-self-center mb-1' style={{'marginTop':'20px'}}>
                    <h5 className='m-0 p-0 lh-sm fs-4- ff-monse-regular- fw-bold tx-dark-purple- font_medium white'>
                        Medidas de tendencia 
                    </h5>
                </div>
                <div className='card-body p-4 w-100' style={{'width':'100%','height':'400px'}}>
                    <div className='w-100 h-100 mx-auto' id='chart-vital-sign-three-'></div>
                </div>

                <div className='card-body p-4 w-100' style={{'width':'100%','height':'400px'}}>
                    <div className='w-100 h-100 mx-auto' id='chart-vital-sign-four-'></div>
                </div>

                <div className='card-body p-4 w-100' style={{'width':'100%','height':'400px'}}>
                    <div className='w-100 h-100 mx-auto' id='chart-vital-sign-five-'></div>
                </div>

                <div className='d-flex flex-row justify-content-between align-items-center align-self-center mb-1'>
                        <h1 className='m-0 p-0 lh-sm fs-4- ff-monse-regular- fw-bold tx-dark-purple- font_medium white orangeV3'>
                            Análisis señal reposo
                        </h1>
                </div>
                <div id='wrapper-data-table' className='w-100 position-relative'>
                                <div className='card-body p-4 pt-0 pb-0 w-100'>
                                    <div className='table-responsive table-general-'>
                                    <table className='table table-sm table-striped table-no-border- align-middle'>
                                        <thead>
                                        <tr>
                                            <th scope="col" className='th-width-sm-'>
                                            <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                                <span className='fs-5- ff-monse-regular- fw-bold tx-dark-purple- font_medium '>Canal</span>
                                            </div>
                                            </th>
                                            <th scope="col" className='th-width-sm-'>
                                            <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                                <span className='fs-5- ff-monse-regular- fw-bold tx-dark-purple- font_medium'>Máximo (General)</span>
                                            </div>
                                            </th>
                                            <th scope="col" className='th-width-sm-'>
                                            <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                                <span className='fs-5- ff-monse-regular- fw-bold tx-dark-purple- font_medium'>Máximo (banda theta)</span>
                                            </div>
                                            </th>
                                            <th scope="col" className='th-width-sm-'>
                                            <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                                <span className='fs-5- ff-monse-regular- fw-bold tx-dark-purple- font_medium'>Máximo (banda alpha)</span>
                                            </div>
                                            </th>
                                            <th scope="col" className='th-width-sm-'>
                                            <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                                <span className='fs-5- ff-monse-regular- fw-bold tx-dark-purple- font_medium'>Máximo (banda beta)</span>
                                            </div>
                                            </th>
                                            
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium orangeV3'>C1</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>19</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C2</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>23</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C3</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>20</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C4</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>30</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C5</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>29</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C6</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>21</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C7</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>25</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C8</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>20</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C9</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>45</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>50</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C11</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center '>35</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C12</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>5</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C13</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>5</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C14</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>5</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C15</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>5</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C16</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>5</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    </div>
                                </div>
                </div>
                <div id='wrapper-data-table' className='w-100 position-relative'>
                                <div className='card-body p-4 pt-0 pb-0 w-100'>
                                    <div className='table-responsive table-general-'>
                                    <table className='table table-sm table-striped table-no-border- align-middle'>
                                        <thead>
                                        <tr>
                                            <th scope="col" className='th-width-sm-'>
                                            <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                                <span className='fs-5- ff-monse-regular- fw-bold tx-dark-purple- font_medium '>Canal</span>
                                            </div>
                                            </th>
                                            <th scope="col" className='th-width-sm-'>
                                            <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                                <span className='fs-5- ff-monse-regular- fw-bold tx-dark-purple- font_medium'>Mínimo (General)</span>
                                            </div>
                                            </th>
                                            <th scope="col" className='th-width-sm-'>
                                            <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                                <span className='fs-5- ff-monse-regular- fw-bold tx-dark-purple- font_medium'>Mínimo (banda theta)</span>
                                            </div>
                                            </th>
                                            <th scope="col" className='th-width-sm-'>
                                            <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                                <span className='fs-5- ff-monse-regular- fw-bold tx-dark-purple- font_medium'>Mínimo (banda alpha)</span>
                                            </div>
                                            </th>
                                            <th scope="col" className='th-width-sm-'>
                                            <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                                <span className='fs-5- ff-monse-regular- fw-bold tx-dark-purple- font_medium'>Mínimo (banda beta)</span>
                                            </div>
                                            </th>
                                            
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium orangeV3'>C1</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>19</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C2</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>23</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C3</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>20</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C4</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>30</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C5</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>29</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C6</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>21</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C7</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>25</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C8</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>20</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C9</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>45</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>50</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C11</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center '>35</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C12</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>5</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C13</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>5</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C14</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>5</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C15</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>5</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center orangeV3'>C16</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>5</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                            </td>
                                            <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>0.28%</p>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    </div>
                                </div>
                </div>
                
                {/* <div className='card-body p-4 w-100' style={{'width':'100%','height':'400px'}}>
                    <div className='w-100 h-100 mx-auto' id='chart-adverse-events-one-' style={{'width':'100%','height':'400px'}}></div>
                </div> */}
                

                <div className='d-flex flex-row justify-content-between align-items-center align-self-center mb-1' style={{'marginTop':'20px'}}>
                    <h5 className='m-0 p-0 lh-sm fs-4- ff-monse-regular- fw-bold tx-dark-purple- font_medium white'>
                        Medidas de tendencia 
                    </h5>
                </div>
                <div className='card-body p-4 w-100' style={{'width':'100%','height':'400px'}}>
                    <div className='w-100 h-100 mx-auto' id='chart-vital-sign-seven-'></div>
                </div>

                <div className='card-body p-4 w-100' style={{'width':'100%','height':'400px'}}>
                    <div className='w-100 h-100 mx-auto' id='chart-vital-sign-eight-'></div>
                </div>

                <div className='card-body p-4 w-100' style={{'width':'100%','height':'400px'}}>
                    <div className='w-100 h-100 mx-auto' id='chart-vital-sign-nine-'></div>
                </div>
                <div className='d-flex flex-row justify-content-between align-items-center align-self-center mb-1'>
                        <h1 className='m-0 p-0 lh-sm fs-4- ff-monse-regular- fw-bold tx-dark-purple- font_medium white orangeV3'>
                            Topoplots
                        </h1>
                </div>
                <div className='topoplotsContainer'>
                        <div onClick={()=>window.open(selectCompleteDate?.imag_topo_activo)} className='topoplotContainer'>
                                <img src={selectCompleteDate?.imag_topo_activo} className='topoplot'></img>
                                <span className='nameTopoplot font_medium'>Activo</span>
                        </div>
                        <div onClick={()=>window.open(selectCompleteDate?.imag_topo_reposo)} className='topoplotContainer'>
                                <img src={selectCompleteDate?.imag_topo_reposo} className='topoplot'></img>
                                <span className='nameTopoplot font_medium'>Reposo</span>
                        </div>
                </div>

                <div className='d-flex flex-row justify-content-between align-items-center align-self-center mb-1' style={{'marginTop':'20px'}}>
                    <h5 className='m-0 p-0 lh-sm fs-4- ff-monse-regular- fw-bold tx-dark-purple- font_medium white'>
                        Visualiza el pdf asociado 
                    </h5>
                </div>
            </div>
            
        </React.Fragment>
    )
}

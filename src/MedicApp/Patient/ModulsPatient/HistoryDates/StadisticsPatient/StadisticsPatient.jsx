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

    React.useEffect(()=>{

        /**
         * GRAFICA EVENTOS ADVERSOS 1 (BAR STACKED CHART)
         */
    
        let chartAdverseEventsOne = echarts.init(document.getElementById('chart-adverse-events-one-'));
        let optionAdverseEventsOne;
    
        optionAdverseEventsOne = {
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
                pageIconColor: '#6149CD',
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
                data: ['Minimos', 'Maximos']
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
                    name: 'Maximos-minimos-generales',
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
                    color: '#FAFAFA',
                    width: 1,
                }
                },
                boundaryGap: true,
            },
            yAxis: {
                type: 'value',
                nameLocation: 'middle',
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
                    color: '#FAFAFA',
                    width: 1,
                }
                },
            },
            series: [
                {
                type: 'bar',
                stack: 'total',
                name: 'Maximos',
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
                    color: "#d1a207",
                    shadowBlur: 0,
                    shadowOffsetY: 0,
                },
                emphasis: {
                    focus: 'series'
                },
                data: [
                    ['Enero', 10],
                    ['Febrero', 5],
                    ['Marzo', 4],
                    ['Abril', 9],
                    ['Mayo', 10],
                    ['Junio', 2],
                    ['Julio', 5],
                    ['Agosto', 18],
                    ['Septiembre', 22],
                    ['Octubre', 14],
                    ['Noviembre', 30],
                    ['Diciembre', 4]
                ],
                animationDelay: function (idx) {
                    return idx * 15;
                }
                },
                {
                type: 'bar',
                stack: 'total',
                name: 'Minimos',
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
                    color: "#F96767",
                    shadowBlur: 0,
                    shadowOffsetY: 0,
                },
                emphasis: {
                    focus: 'series'
                },
                data: [
                    ['Enero', 19],
                    ['Febrero', 23],
                    ['Marzo', 20],
                    ['Abril', 30],
                    ['Mayo', 29],
                    ['Junio', 21],
                    ['Julio', 25],
                    ['Agosto', 20],
                    ['Septiembre', 45],
                    ['Octubre', 50],
                    ['Noviembre', 35],
                    ['Diciembre', 5]
                ],
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
    
        optionAdverseEventsOne && chartAdverseEventsOne.setOption(optionAdverseEventsOne);
    
            $(window).on('resize', function(){
            if(chartAdverseEventsOne != null && chartAdverseEventsOne !== undefined){
                chartAdverseEventsOne.resize();
            }
            });
    
        
    
    },[])

    /* second graph */
    React.useEffect(()=>{

        /**
         * GRAFICA EVENTOS ADVERSOS 1 (BAR STACKED CHART)
         */
    
        let chartAdverseEventsOne = echarts.init(document.getElementById('chart-adverse-events-two-'));
        let optionAdverseEventsOne;
    
        optionAdverseEventsOne = {
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
                pageIconColor: '#6149CD',
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
                data: ['Minimos', 'Maximos']
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
                    name: 'Maximos-minimos-generales',
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
                    color: '#FAFAFA',
                    width: 1,
                }
                },
                boundaryGap: true,
            },
            yAxis: {
                type: 'value',
                nameLocation: 'middle',
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
                    color: '#FAFAFA',
                    width: 1,
                }
                },
            },
            series: [
                {
                type: 'bar',
                stack: 'total',
                name: 'Maximos',
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
                    color: "#d1a207",
                    shadowBlur: 0,
                    shadowOffsetY: 0,
                },
                emphasis: {
                    focus: 'series'
                },
                data: [
                    ['Enero', 10],
                    ['Febrero', 5],
                    ['Marzo', 4],
                    ['Abril', 9],
                    ['Mayo', 10],
                    ['Junio', 2],
                    ['Julio', 5],
                    ['Agosto', 18],
                    ['Septiembre', 22],
                    ['Octubre', 14],
                    ['Noviembre', 30],
                    ['Diciembre', 4]
                ],
                animationDelay: function (idx) {
                    return idx * 15;
                }
                },
                {
                type: 'bar',
                stack: 'total',
                name: 'Minimos',
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
                    color: "#F96767",
                    shadowBlur: 0,
                    shadowOffsetY: 0,
                },
                emphasis: {
                    focus: 'series'
                },
                data: [
                    ['Enero', 19],
                    ['Febrero', 23],
                    ['Marzo', 20],
                    ['Abril', 30],
                    ['Mayo', 29],
                    ['Junio', 21],
                    ['Julio', 25],
                    ['Agosto', 20],
                    ['Septiembre', 45],
                    ['Octubre', 50],
                    ['Noviembre', 35],
                    ['Diciembre', 5]
                ],
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
    
        optionAdverseEventsOne && chartAdverseEventsOne.setOption(optionAdverseEventsOne);
    
            $(window).on('resize', function(){
            if(chartAdverseEventsOne != null && chartAdverseEventsOne !== undefined){
                chartAdverseEventsOne.resize();
            }
            });
    
        
    
    },[])

    React.useEffect(()=>{

        /**
         * GRAFICA EVENTOS ADVERSOS 1 (BAR STACKED CHART)
         */
    
        let chartAdverseEventsOne = echarts.init(document.getElementById('chart-adverse-events-three-'));
        let optionAdverseEventsOne;
    
        optionAdverseEventsOne = {
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
                pageIconColor: '#6149CD',
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
                data: ['Minimos', 'Maximos']
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
                    name: 'Maximos-minimos-generales',
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
                    color: '#FAFAFA',
                    width: 1,
                }
                },
                boundaryGap: true,
            },
            yAxis: {
                type: 'value',
                nameLocation: 'middle',
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
                    color: '#FAFAFA',
                    width: 1,
                }
                },
            },
            series: [
                {
                type: 'bar',
                stack: 'total',
                name: 'Maximos',
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
                    color: "#d1a207",
                    shadowBlur: 0,
                    shadowOffsetY: 0,
                },
                emphasis: {
                    focus: 'series'
                },
                data: [
                    ['Enero', 10],
                    ['Febrero', 5],
                    ['Marzo', 4],
                    ['Abril', 9],
                    ['Mayo', 10],
                    ['Junio', 2],
                    ['Julio', 5],
                    ['Agosto', 18],
                    ['Septiembre', 22],
                    ['Octubre', 14],
                    ['Noviembre', 30],
                    ['Diciembre', 4]
                ],
                animationDelay: function (idx) {
                    return idx * 15;
                }
                },
                {
                type: 'bar',
                stack: 'total',
                name: 'Minimos',
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
                    color: "#F96767",
                    shadowBlur: 0,
                    shadowOffsetY: 0,
                },
                emphasis: {
                    focus: 'series'
                },
                data: [
                    ['Enero', 19],
                    ['Febrero', 23],
                    ['Marzo', 20],
                    ['Abril', 30],
                    ['Mayo', 29],
                    ['Junio', 21],
                    ['Julio', 25],
                    ['Agosto', 20],
                    ['Septiembre', 45],
                    ['Octubre', 50],
                    ['Noviembre', 35],
                    ['Diciembre', 5]
                ],
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
    
        optionAdverseEventsOne && chartAdverseEventsOne.setOption(optionAdverseEventsOne);
    
            $(window).on('resize', function(){
            if(chartAdverseEventsOne != null && chartAdverseEventsOne !== undefined){
                chartAdverseEventsOne.resize();
            }
            });
    
        
    
    },[])

    React.useEffect(()=>{

        /**
         * GRAFICA EVENTOS ADVERSOS 1 (BAR STACKED CHART)
         */
    
        let chartAdverseEventsOne = echarts.init(document.getElementById('chart-adverse-events-four-'));
        let optionAdverseEventsOne;
    
        optionAdverseEventsOne = {
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
                pageIconColor: '#6149CD',
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
                data: ['Minimos', 'Maximos']
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
                    name: 'Maximos-minimos-generales',
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
                    color: '#FAFAFA',
                    width: 1,
                }
                },
                boundaryGap: true,
            },
            yAxis: {
                type: 'value',
                nameLocation: 'middle',
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
                    color: '#FAFAFA',
                    width: 1,
                }
                },
            },
            series: [
                {
                type: 'bar',
                stack: 'total',
                name: 'Maximos',
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
                    color: "#d1a207",
                    shadowBlur: 0,
                    shadowOffsetY: 0,
                },
                emphasis: {
                    focus: 'series'
                },
                data: [
                    ['Enero', 10],
                    ['Febrero', 5],
                    ['Marzo', 4],
                    ['Abril', 9],
                    ['Mayo', 10],
                    ['Junio', 2],
                    ['Julio', 5],
                    ['Agosto', 18],
                    ['Septiembre', 22],
                    ['Octubre', 14],
                    ['Noviembre', 30],
                    ['Diciembre', 4]
                ],
                animationDelay: function (idx) {
                    return idx * 15;
                }
                },
                {
                type: 'bar',
                stack: 'total',
                name: 'Minimos',
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
                    color: "#F96767",
                    shadowBlur: 0,
                    shadowOffsetY: 0,
                },
                emphasis: {
                    focus: 'series'
                },
                data: [
                    ['Enero', 19],
                    ['Febrero', 23],
                    ['Marzo', 20],
                    ['Abril', 30],
                    ['Mayo', 29],
                    ['Junio', 21],
                    ['Julio', 25],
                    ['Agosto', 20],
                    ['Septiembre', 45],
                    ['Octubre', 50],
                    ['Noviembre', 35],
                    ['Diciembre', 5]
                ],
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
    
        optionAdverseEventsOne && chartAdverseEventsOne.setOption(optionAdverseEventsOne);
    
            $(window).on('resize', function(){
            if(chartAdverseEventsOne != null && chartAdverseEventsOne !== undefined){
                chartAdverseEventsOne.resize();
            }
            });
    
        
    
    },[])





    return (
        <React.Fragment>
            <div className='ContainerGraph'>
                <div className='d-flex flex-row justify-content-between align-items-center align-self-center mb-1'>
                    <h1 className='m-0 p-0 lh-sm fs-4- ff-monse-regular- fw-bold tx-dark-purple- font_medium white'>
                        Analisis por canal general
                    </h1>
                </div>
                <div className='card-body p-4 w-100' style={{'width':'100%','height':'400px'}}>
                    <div className='w-100 h-100 mx-auto' id='chart-adverse-events-one-' style={{'width':'100%','height':'400px'}}></div>
                </div>
                <div className='d-flex flex-row justify-content-between align-items-center align-self-center mb-1'>
                    <h1 className='m-0 p-0 lh-sm fs-4- ff-monse-regular- fw-bold tx-dark-purple- font_medium white'>
                        Analisis por canal Alpha
                    </h1>
                </div>
                <div className='card-body p-4 w-100' style={{'width':'100%','height':'400px'}}>
                    <div className='w-100 h-100 mx-auto' id='chart-adverse-events-two-' style={{'width':'100%','height':'400px'}}></div>
                </div>
                <div className='d-flex flex-row justify-content-between align-items-center align-self-center mb-1'>
                    <h1 className='m-0 p-0 lh-sm fs-4- ff-monse-regular- fw-bold tx-dark-purple- font_medium white'>
                        Analisis por canal betha
                    </h1>
                </div>
                <div className='card-body p-4 w-100' style={{'width':'100%','height':'400px'}}>
                    <div className='w-100 h-100 mx-auto' id='chart-adverse-events-three-' style={{'width':'100%','height':'400px'}}></div>
                </div>
                <div className='d-flex flex-row justify-content-between align-items-center align-self-center mb-1'>
                    <h1 className='m-0 p-0 lh-sm fs-4- ff-monse-regular- fw-bold tx-dark-purple- font_medium white'>
                        Analisis por canal tetha
                    </h1>
                </div>
                <div className='card-body p-4 w-100' style={{'width':'100%','height':'400px'}}>
                    <div className='w-100 h-100 mx-auto' id='chart-adverse-events-four-' style={{'width':'100%','height':'400px'}}></div>
                </div>
                <div id='wrapper-data-table' className='w-100 position-relative'>
                            <div className='card-body p-4 pt-0 pb-0 w-100'>
                                <div className='table-responsive table-general-'>
                                <table className='table table-sm table-striped table-no-border- align-middle'>
                                    <thead>
                                    <tr>
                                        <th scope="col" className='th-width-sm-'>
                                        <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                            <span className='fs-5- ff-monse-regular- fw-bold tx-dark-purple- font_medium'>Canal</span>
                                        </div>
                                        </th>
                                        <th scope="col" className='th-width-sm-'>
                                        <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                            <span className='fs-5- ff-monse-regular- fw-bold tx-dark-purple- font_medium'>Máximo [General]</span>
                                        </div>
                                        </th>
                                        <th scope="col" className='th-width-sm-'>
                                        <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                            <span className='fs-5- ff-monse-regular- fw-bold tx-dark-purple- font_medium'>Mínimo [General]</span>
                                        </div>
                                        </th>
                                        <th scope="col" className='th-width-sm-'>
                                        <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                            <span className='fs-5- ff-monse-regular- fw-bold tx-dark-purple- font_medium'>Media [General]</span>
                                        </div>
                                        </th>
                                        
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className='align-middle'>
                                        <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center font_medium'>Enero</p>
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
                                    </tr>
                                    <tr>
                                        <td className='align-middle'>
                                        <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>Febrero</p>
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
                                    </tr>
                                    <tr>
                                        <td className='align-middle'>
                                        <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>Marzo</p>
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
                                    </tr>
                                    <tr>
                                        <td className='align-middle'>
                                        <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>Abril</p>
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
                                    </tr>
                                    <tr>
                                        <td className='align-middle'>
                                        <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>Mayo</p>
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
                                    </tr>
                                    <tr>
                                        <td className='align-middle'>
                                        <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>Junio</p>
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
                                    </tr>
                                    <tr>
                                        <td className='align-middle'>
                                        <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>Julio</p>
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
                                    </tr>
                                    <tr>
                                        <td className='align-middle'>
                                        <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>Agosto</p>
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
                                    </tr>
                                    <tr>
                                        <td className='align-middle'>
                                        <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>Septiembre</p>
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
                                    </tr>
                                    <tr>
                                        <td className='align-middle'>
                                        <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>Octubre</p>
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
                                    </tr>
                                    <tr>
                                        <td className='align-middle'>
                                        <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>Noviembre</p>
                                        </td>
                                        <td className='align-middle'>
                                        <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>35</p>
                                        </td>
                                        <td className='align-middle'>
                                        <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>10</p>
                                        </td>
                                        <td className='align-middle'>
                                        <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>0.28%</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='align-middle'>
                                        <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>Diciembre</p>
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
                                    </tr>
                                    </tbody>
                                </table>
                                </div>
                            </div>
                </div>
            </div>
            
        </React.Fragment>
    )
}

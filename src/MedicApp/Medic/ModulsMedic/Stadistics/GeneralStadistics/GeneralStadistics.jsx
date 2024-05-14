import React from 'react'
import './GeneralStadistics.css'
import Select, { components } from 'react-select'
import { AppContext } from '../../../../../context'
import Swal from 'sweetalert2'
import * as echarts from 'echarts';
import $ from "jquery"
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import Preloader from '../../../../../components/Preloader/Preloader'
import makeAnimated from 'react-select/animated';
import { GetGeneralIndicators , GetAnsiedadIndicators,GetEstresIndicators,GetDepresionIndicators} from '../../../../../Services/MainApp/Medic/dates';

/**
 * MENSAJES PERSONALIZADOS AL BUSCAR O CARGAR OPCIONES EN REACT SELECT
 */

const { NoOptionsMessage } = components;

const customNoOptionsMessage = props => (
  <NoOptionsMessage {...props} className="custom-no-options-message-internal-form-">No registrado</NoOptionsMessage>
);

const { LoadingMessage } = components;

const customLoadingMessage = props => (
  <LoadingMessage {...props} className="custom-loading-message-internal-form-">Cargando</LoadingMessage>
);

/**
 * ANIMATE DELETE MULTISELECT
 */

const animatedComponents = makeAnimated();

/**
 * Data que llena los select
 */

const Parentage = [
  { value: "opcion-uno", label: "Opcion uno" },
  { value: "opcion-dos", label: "Opcion dos" },
  { value: "opcion-tres", label: "Opcion tres" }
];

const MaritalStatus = [
  { value: "Soltero", label: "Soltero" },
  { value: "Casado", label: "Casado" },
  { value: "Separado", label: "Separado" },
  { value: "Unión libre", label: "Unión libre" },
  { value: "Viudo", label: "Viudo" }
];

const PopulationGroup  = [
  { value: "Personas con discapacidad", label: "Personas con discapacidad" },
  { value: "Poblacion migrante", label: "Poblacion migrante" },
  { value: "Personas desplazadas por el conflicto armado", label: "Personas desplazadas por el conflicto armado" },
  { value: "Personas privadas de la libertad", label: "Personas privadas de la libertad" },
  { value: "Personas en condicion de calle", label: "Personas en condicion de calle" },
  { value: "Mujeres gestantes", label: "Mujeres gestantes" },
  { value: "Poblacion infantil a cargo del ICBF", label: "Poblacion infantil a cargo del ICBF" },
  { value: "Madres comunitarias", label: "Madres comunitarias" },
  { value: "Personas desmovilizadas", label: "Personas desmovilizadas" },
  { value: "Internado en centro psiquiatrico", label: "Internado en centro psiquiatrico" },
  { value: "Comunidades indigenas", label: "Comunidades indigenas" },
  { value: "Comunidades afrodescendientes", label: "Comunidades afrodescendientes" },
  { value: "Niños, niñas y adolescentes en situacion de vulnerabilidad", label: "Niños, niñas y adolescentes en situacion de vulnerabilidad" },
  { value: "Mujeres victimas de violencia de genero", label: "Mujeres victimas de violencia de genero" },
  { value: "Personas LGTBI", label: "Personas LGTBI" },
  { value: "Otros grupos poblacionales", label: "Otros grupos poblacionales" },
  { value: "Ninguno" , label: "Ninguno"},
];

const EthnicGroup  = [
  { value: 'Mestizo', label: 'Mestizo' },
  { value: 'Afrodescendiente', label: 'Afrodescendiente' },
  { value: 'Indigena', label: 'Indigena' },
  { value: 'Blanco', label: 'Blanco' },
  { value: 'Raizal', label: 'Raizal' },
  { value: 'Palenquero', label: 'Palenquero' },
  { value: 'Rrom', label: 'Rrom' },
  { value: 'Arabe', label: 'Arabe' },
  { value: 'Chino', label: 'Chino' },
  { value: 'Judio', label: 'Judio' },
  { value: 'Otro', label: 'Otro' }
];

const Religion  = [
  { value: 'Ateísmo', label: 'Ateísmo' },
  { value: 'Iglesia Católica Romana', label: 'Iglesia Católica Romana'},
  { value: 'Protestantismo', label: 'Protestantismo'},
  { value: 'Adventistas del Séptimo Día', label: 'Adventistas del Séptimo Día' },
  { value: 'Testigos de Jehová', label: 'Testigos de Jehová' },
  { value: 'Mormonismo', label: 'Mormonismo' },
  { value: 'Judaísmo', label: 'Judaísmo' },
  { value: 'Islamismo', label: 'Islamismo' },
  { value: 'Iglesia Universal del Reino de Dios', label: 'Iglesia Universal del Reino de Dios' },
  { value: 'Iglesia Pentecostal Unida de Colombia', label: 'Iglesia Pentecostal Unida de Colombia' },
  { value: 'Bahaísmo', label: 'Bahaísmo' },
  { value: 'Otro', label: 'Otro' }
];

const Gender = [
  { value: "Masculino", label: "Masculino" },
  { value: "Femenino", label: "Femenino" },
];
/**
 * Se genera componente nuevo para soportar el placeholder animado del input 
 */

const { ValueContainer, Placeholder } = components;

const CustomValueContainer = ({ children, ...props }) => {
  const { inputId, placeholder } = props.selectProps;
  return (
    <ValueContainer {...props}>
      <Placeholder htmlFor={inputId} {...props}>
        {placeholder}
      </Placeholder>
      {React.Children.map(children, child =>
        child && child.type !== Placeholder ? child : null
      )}
    </ValueContainer>
  );
};

/**
* Constante que soporta todo el cambio de los estilo del select
*/

const selectStyles = {
  /**
  * Estilos del icono del dropdown del select
  * Estilos del separador del select
  * Estilos del icono de cerrar del select
  */
  dropdownIndicator: (styles) => ({ ...styles, 
    color: "#d1a207", 
    padding: 0, paddingTop: '0.34rem !important', 
    paddingRight: '0.5rem !important',
    width: '25px',
    height: '25px',
    "&:hover": {
      color: "var(--color-black-)",
    } 
  }),
  indicatorSeparator: (styles) => ({ ...styles, display: "none" }),
  clearIndicator: (styles) => ({ ...styles, 
    color: "white", 
    padding: 0, 
    paddingTop: '0.05rem !important',
    width: '15px',
    height: '15px',
    "&:hover": {
      color: "white",
    } 
  }),
  /**
  * Estilos del input global
  */
  control: () => ({
  fontSize: 14,
  display: "flex",
  alignItems: "center",
  alignSelf: "start",
  justifyContent: "start",
  height: 'auto',
  minHeight: 50,
  maxHeight: 150,
  paddingLeft: '2.1rem',
  paddingTop: '0.3rem',
  width: "100%",
  backgroundColor: 'transparent',
  borderRadius: 0,
  borderBottom: "1px solid #d1a207",
  }),
  /**
  * EESTILOS DEL INPUT
  */
  input: (provided) => ({
  ...provided,
  color: 'var(--color-quaternary-gray-)',
  fontSize: 12,
  textTransform: 'uppercase',
  fontFamily: 'var(--font-family-regular-)',
  }),
  /**
  * Estilos del menu desplegable del select
  */
  menu: (styles) => ({
  ...styles,
  border: 'none',
  backgroundColor: 'var(--color-secondary-white-rgba-)',
  boxShadow: 'var(--box-shadow-2-)',
  borderRadius: '1rem',
  padding: 0,
  marginTop: 8,
  marginBottom: 0,
  height: 'auto',
  minHeight: 'auto',
  maxHeight: 300,
  overflow: "hidden",
  color: 'var(--color-quaternary-gray-)',
  fontSize: 12,
  textTransform: 'uppercase',
  fontFamily: 'var(--font-family-regular-)',
  }),
  menuList: () => ({
    paddingTop: 0,
    paddingBottom: 0,
    height: 'auto',
    minHeight: 'auto',
    maxHeight: 300,
    overflow: "auto",
    "::-webkit-scrollbar": {
      width: "0px !important",
      height: "0px !important",
    },
    "::-webkit-scrollbar-track": {
      background: "transparent !important"
    },
    "::-webkit-scrollbar-thumb": {
      background: "transparent !important"
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "transparent !important"
    }
  }),
  /**
  * Estilos de las opciones desplegables
  */
  option: (provided, state) => ({
  ...provided,
  fontSize: 11,
  textTransform: 'uppercase',
  backgroundColor: state.isSelected ? "var(--color-purple-)" : "var(--color-secondary-white-rgba-)",
  fontFamily: 'var(--font-family-regular-)',
  padding: '0.5rem 0.8rem 0.5rem 0.8rem',
  borderRadius: '1rem',
  ":hover": {
  background: "var(--color-purple-)",
  color: 'var(--color-white-)',
  }
  }),
  /**
  * Estilos del contenedor
  */
  container: (provided, state) => ({
  ...provided,
  marginTop: 0,
  width: '100%',
  position: 'relative',
  flex: '1 1 auto'
  }),
  valueContainer: (provided, state) => ({
  ...provided,
  overflow: "visible"
  }),
  /**
  * Estilos placeholder del input
  */
  placeholder: (provided, state) => ({
  ...provided,
  width: '100%',
  position: "absolute",
  top: state.hasValue || state.selectProps.inputValue ? -15 : "28%",
  left: state.hasValue || state.selectProps.inputValue ? -32 : "0%",
  transition: "top 0.1s, font-size 0.1s",
  color: 'var(--color-quaternary-gray-)',
  fontSize: state.hasValue || state.selectProps.inputValue ? 13 : "14px",
  lineHeight: 1.25,
  fontFamily: 'var(--font-family-regular-)',
  overflow: 'hidden',
  textAlign: 'start',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
  }),
  /**
  * Estilos texto en el input
  */
  singleValue: (styles) => ({ 
  ...styles, 
  fontSize: 12,
  textTransform: 'uppercase',
  color: "var(--color-quaternary-gray-)", 
  fontFamily: 'var(--font-family-regular-)', 
  padding: '3px',
  margin: '0px',
  marginTop: '7px',
  marginLeft: 0,
  marginRight: 0
  }),
  multiValue: (styles) => ({ 
    ...styles, 
    backgroundColor: 'var(--color-secondary-white-rgba-)',
    boxShadow: 'var(--box-shadow-2-)',
    borderRadius: '1rem',
    margin: '2px',
    alignItems: 'center',
    alignSelf: 'center',
  }),
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    fontFamily: 'var(--font-family-regular-)',
    fontSize: 12,
    textTransform: 'uppercase',
    color: 'var(--color-quaternary-gray-)',
    borderRadius: '1rem',
    padding: '5px',
    paddingLeft: '0.5rem',
    paddingRight: '0.6rem',
    paddingBottom: '0.3rem'
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    borderRadius: '6rem',
    paddingLeft: '6px',
    width: '26px',
    height: '26px',
    color: 'var(--color-black-)',
    backgroundColor: 'var(--color-secondary-gray-)',
    ':hover': {
      color: 'var(--color-white-)',
      backgroundColor: 'var(--color-secondary-purple-)',
    }
  })
}


export default function GeneralStadistics() {

  /* APPCONTEXT */
  let {userData,token} = React.useContext(AppContext);

  let [dataTestGeneral,setDataTestGeneral] = React.useState(null);
  let [dataTestAnsiedad,setDataTestAnsiedad] = React.useState(null);
  let [dataTestDepresion,setDataTestDepresion] = React.useState(null);
  let [dataTestEstres,setDataTestEstres] = React.useState(null);

  let [preloader,setPreloader] = React.useState(false);

  /* USEEFFECT */

  React.useEffect(()=>{
    if(token){
      
      loadDataGeneral();

    }else{

    }
  },[])


  React.useEffect(()=>{
    if(dataTestAnsiedad !== null && dataTestDepresion !== null && dataTestEstres && dataTestGeneral){
      
      /* renderizamos las graficas */
      /**
     * GRAFICA ACCOUNTING 1 (BAR CHART)
     */

    let chartAccountingOne = echarts.init(document.getElementById('chart-vital-sign-one-'));
    let optionAccountingOne;

    const dataAccountingOne = [
      { month: 'Test General', costs: dataTestGeneral?.media},
      { month: 'Test Ansiedad', costs: dataTestAnsiedad?.media},
      { month: 'Test depresión', costs: dataTestDepresion?.media},
      { month: 'Test estrés', costs: dataTestEstres?.media},
    ];

    optionAccountingOne = {
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
          color: '#414D55',
          fontWeight: 'normal',
          fontFamily: 'Monserat-regular, Verdana',
        },
        pageIconSize: 12,
        pageIconColor: '#FFFF',
        pageIconInactiveColor: '#414D55',
        pageTextStyle: {
          color: '#414D55',
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
        data: ['Media']
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
            name: 'Media_tests',
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
        name: 'Test',
        nameLocation: 'middle',
        nameGap: 40,
        nameTextStyle: {
          color: '#728998',
          fontWeight: 'normal',
          fontFamily: 'Monserat-regular'
        },
        axisLabel: {
          color: '#728998',
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
        data: dataAccountingOne.map(item => item.month)
      },
      yAxis: [
        {
          type: 'value',
          name: '',
          nameLocation: 'middle',
          nameGap: 50,
          nameTextStyle: {
            color: '#728998',
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
        {
          type: 'value',
          name: '',
          nameLocation: 'middle',
          nameGap: 25,
          nameTextStyle: {
            color: '#728998',
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
          type: 'bar',
          name: 'Media',
          label: {
            normal: {
              show: true,
              position: 'top',
              color: '#414D55',
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
          emphasis: {
            focus: 'series'
          },
          data: dataAccountingOne.map(item => item.costs),
          animationDelay: function (idx) {
            return idx * 15;
          }
        },
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: function (idx) {
        return idx * 5;
      }
    };

    optionAccountingOne && chartAccountingOne.setOption(optionAccountingOne);

    $(window).on('resize', function(){
      if(chartAccountingOne != null && chartAccountingOne !== undefined){
        chartAccountingOne.resize();
      }
    });
      
    }
  },[dataTestAnsiedad,dataTestDepresion,dataTestEstres,dataTestGeneral])

  React.useEffect(()=>{
    if(dataTestAnsiedad !== null && dataTestDepresion !== null && dataTestEstres && dataTestGeneral){
      
      /* renderizamos las graficas */
      /**
     * GRAFICA ACCOUNTING 1 (BAR CHART)
     */

    let chartAccountingOne = echarts.init(document.getElementById('chart-vital-sign-two-'));
    let optionAccountingOne;

    const dataAccountingOne = [
      { month: 'Test General', costs: dataTestGeneral?.mediana},
      { month: 'Test Ansiedad', costs: dataTestAnsiedad?.mediana},
      { month: 'Test depresión', costs: dataTestDepresion?.mediana},
      { month: 'Test estrés', costs: dataTestEstres?.mediana},
    ];

    optionAccountingOne = {
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
          color: '#414D55',
          fontWeight: 'normal',
          fontFamily: 'Monserat-regular, Verdana',
        },
        pageIconSize: 12,
        pageIconColor: '#FFFF',
        pageIconInactiveColor: '#414D55',
        pageTextStyle: {
          color: '#414D55',
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
        data: ['Mediana']
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
            name: 'Mediana_tests',
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
        name: 'Test',
        nameLocation: 'middle',
        nameGap: 40,
        nameTextStyle: {
          color: '#728998',
          fontWeight: 'normal',
          fontFamily: 'Monserat-regular'
        },
        axisLabel: {
          color: '#728998',
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
        data: dataAccountingOne.map(item => item.month)
      },
      yAxis: [
        {
          type: 'value',
          name: '',
          nameLocation: 'middle',
          nameGap: 50,
          nameTextStyle: {
            color: '#728998',
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
        {
          type: 'value',
          name: '',
          nameLocation: 'middle',
          nameGap: 25,
          nameTextStyle: {
            color: '#728998',
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
          type: 'bar',
          name: 'Media',
          label: {
            normal: {
              show: true,
              position: 'top',
              color: '#414D55',
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
          emphasis: {
            focus: 'series'
          },
          data: dataAccountingOne.map(item => item.costs),
          animationDelay: function (idx) {
            return idx * 15;
          }
        },
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: function (idx) {
        return idx * 5;
      }
    };

    optionAccountingOne && chartAccountingOne.setOption(optionAccountingOne);

    $(window).on('resize', function(){
      if(chartAccountingOne != null && chartAccountingOne !== undefined){
        chartAccountingOne.resize();
      }
    });
      
    }
  },[dataTestAnsiedad,dataTestDepresion,dataTestEstres,dataTestGeneral])


  React.useEffect(()=>{
    if(dataTestAnsiedad !== null && dataTestDepresion !== null && dataTestEstres && dataTestGeneral){
      
      /* renderizamos las graficas */
      /**
       * GRAFICA ACCOUNTING 1 (BAR CHART)
       */

    let chartAccountingOne = echarts.init(document.getElementById('chart-vital-sign-three-'));
    let optionAccountingOne;

    const dataAccountingOne = [
      { month: 'Test General', costs: dataTestGeneral?.varianza},
      { month: 'Test Ansiedad', costs: dataTestAnsiedad?.varianza},
      { month: 'Test depresión', costs: dataTestDepresion?.varianza},
      { month: 'Test estrés', costs: dataTestEstres?.varianza},
    ];

    optionAccountingOne = {
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
          color: '#414D55',
          fontWeight: 'normal',
          fontFamily: 'Monserat-regular, Verdana',
        },
        pageIconSize: 12,
        pageIconColor: '#FFFF',
        pageIconInactiveColor: '#414D55',
        pageTextStyle: {
          color: '#414D55',
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
        data: ['Varianza']
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
            name: 'Varianza_tests',
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
        name: 'Test',
        nameLocation: 'middle',
        nameGap: 40,
        nameTextStyle: {
          color: '#728998',
          fontWeight: 'normal',
          fontFamily: 'Monserat-regular'
        },
        axisLabel: {
          color: '#728998',
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
        data: dataAccountingOne.map(item => item.month)
      },
      yAxis: [
        {
          type: 'value',
          name: '',
          nameLocation: 'middle',
          nameGap: 50,
          nameTextStyle: {
            color: '#728998',
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
        {
          type: 'value',
          name: '',
          nameLocation: 'middle',
          nameGap: 25,
          nameTextStyle: {
            color: '#728998',
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
          type: 'bar',
          name: 'Media',
          label: {
            normal: {
              show: true,
              position: 'top',
              color: '#414D55',
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
          emphasis: {
            focus: 'series'
          },
          data: dataAccountingOne.map(item => item.costs),
          animationDelay: function (idx) {
            return idx * 15;
          }
        },
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: function (idx) {
        return idx * 5;
      }
    };

    optionAccountingOne && chartAccountingOne.setOption(optionAccountingOne);

    $(window).on('resize', function(){
      if(chartAccountingOne != null && chartAccountingOne !== undefined){
        chartAccountingOne.resize();
      }
    });
      
    }
  },[dataTestAnsiedad,dataTestDepresion,dataTestEstres,dataTestGeneral])

  /* functions */

  const  loadDataGeneral=async()=>{

    let result = undefined;
    setPreloader(true);
    result = await GetGeneralIndicators({},token).catch((error)=>{
      console.log(error);
      setPreloader(false);
      Swal.fire({
        icon: 'info',
        title: 'Problemas al cargar datos de indicadores'
      })
    })

    if(result){
      setPreloader(false);
      console.log(result.data);
      setDataTestGeneral(result.data);
      loadDataAnsiedad();
    }

  }

  const  loadDataAnsiedad=async()=>{

    let result = undefined;
    setPreloader(true);
    result = await GetAnsiedadIndicators({},token).catch((error)=>{
      console.log(error);
      setPreloader(false);
      Swal.fire({
        icon: 'info',
        title: 'Problemas al cargar datos de indicadores'
      })
    })

    if(result){
      setPreloader(false);
      console.log(result.data);
      setDataTestAnsiedad(result.data);
      loadDataDepresion();
    }

  }

  const  loadDataDepresion=async()=>{

    let result = undefined;
    setPreloader(true);
    result = await GetDepresionIndicators({},token).catch((error)=>{
      console.log(error);
      setPreloader(false);
      Swal.fire({
        icon: 'info',
        title: 'Problemas al cargar datos de indicadores'
      })
    })

    if(result){
      setPreloader(false);
      console.log(result.data);
      setDataTestDepresion(result.data);
      setPreloader(false);
      loadDataEstres();
    }

  }

  const  loadDataEstres=async()=>{

    let result = undefined;
    setPreloader(true);
    result = await GetEstresIndicators({},token).catch((error)=>{
      console.log(error);
      setPreloader(false);
      setDataTestEstres({
        "media": 68.0,
        "mediana": 68.0,
        "maximo": 68.0,
        "minimo": 68.0,
        "desviacion_estandar": 0.0,
        "varianza": 0.0,
        "frecuencia": {
            "68.0": 6
        }
      })
      // Swal.fire({
      //   icon: 'info',
      //   title: 'Problemas al cargar datos de indicadores'
      // })
    })

    if(result){
      setPreloader(false);
      console.log(result.data);
      setDataTestEstres(result.data);
    }

  }

  
  /* FILTROS */

  let [Filters,setFilters] = React.useState({
    "genero":"",
    "estado_civil":"",
    "grupo_social":"",
    "grupo_etnico":"",
    "religion":""
})


  const ReadSelect=(event,type)=>{

    if(event){

      setFilters({...Filters,[type]:event.value})

    }else{
      setFilters({...Filters,[type]:""})
    }

  }

  const filterData=()=>{

    if(Filters.estado_civil == "" && Filters.genero =="" && Filters.grupo_etnico == "" && Filters.grupo_social == "" && Filters.religion == ""){

      loadDataGeneral();

    }else{
      const atributosNoVacios = Object.entries(Filters)
      .filter(([clave, valor]) => valor !== "")
      .reduce((obj, [clave, valor]) => {
        obj[clave] = valor;
        return obj;
      }, {});

      // LLAMAMOS EL SERVICIO DE ESTADISTICAS
      loadDataGeneralV2(atributosNoVacios);

    }

  }


  const  loadDataGeneralV2=async(atributosNoVacios)=>{

    let result = undefined;
    setPreloader(true);
    result = await GetGeneralIndicators(atributosNoVacios,token).catch((error)=>{
      console.log(error);
      setPreloader(false);
      Swal.fire({
        icon: 'info',
        title: 'Problemas al cargar datos de indicadores'
      })
    })

    if(result){
      setPreloader(false);
      console.log(result.data);
      setDataTestGeneral(result.data);
      loadDataAnsiedadV2(atributosNoVacios);
    }

  }

  const  loadDataAnsiedadV2=async(atributosNoVacios)=>{

    let result = undefined;
    setPreloader(true);
    result = await GetAnsiedadIndicators(atributosNoVacios,token).catch((error)=>{
      console.log(error);
      setPreloader(false);
      Swal.fire({
        icon: 'info',
        title: 'Problemas al cargar datos de indicadores'
      })
    })

    if(result){
      setPreloader(false);
      console.log(result.data);
      setDataTestAnsiedad(result.data);
      loadDataDepresionV2(atributosNoVacios);
    }

  }

  const  loadDataDepresionV2=async(atributosNoVacios)=>{

    let result = undefined;
    setPreloader(true);
    result = await GetDepresionIndicators(atributosNoVacios,token).catch((error)=>{
      console.log(error);
      setPreloader(false);
      Swal.fire({
        icon: 'info',
        title: 'Problemas al cargar datos de indicadores'
      })
    })

    if(result){
      setPreloader(false);
      console.log(result.data);
      setDataTestDepresion(result.data);
      setPreloader(false);
      loadDataEstresV2(atributosNoVacios);
    }

  }

  const  loadDataEstresV2=async(atributosNoVacios)=>{

    let result = undefined;
    setPreloader(true);
    result = await GetEstresIndicators(atributosNoVacios,token).catch((error)=>{
      console.log(error);
      setPreloader(false);
      setDataTestEstres({
        "media": 68.0,
        "mediana": 68.0,
        "maximo": 68.0,
        "minimo": 68.0,
        "desviacion_estandar": 0.0,
        "varianza": 0.0,
        "frecuencia": {
            "68.0": 6
        }
      })
      // Swal.fire({
      //   icon: 'info',
      //   title: 'Problemas al cargar datos de indicadores'
      // })
    })

    if(result){
      setPreloader(false);
      console.log(result.data);
      setDataTestEstres(result.data);
    }

  }
  



  return (
    <div className='row mt-4 mb-4'>
            {
                preloader ?
                <>
                <Preloader></Preloader>
                </>
                :

                <></>
            }
            <div className='col-12'>
                <form id='internal-form' action='' className='position-relative'>
                    <div className='row mt-2 mb-2'>
                    <div className='col-12'>
                        <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-bold tx-dark-purple- gray font_medium'>Filtros</p>
                    </div>
                    </div>
                    <div className='row gx-0 gx-sm-0 gx-md-4 gx-lg-4 gx-xl-4 gx-xxl-5'>
                        <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4'>
                            <div className='form-floating inner-addon- left-addon-'>
                            <Select value={{value:Filters.estado_civil,label:Filters.estado_civil}} onChange={(event)=>ReadSelect(event,'estado_civil')} id='marital-status' options={MaritalStatus} components={{ ValueContainer: CustomValueContainer, animatedComponents, NoOptionsMessage: customNoOptionsMessage, LoadingMessage: customLoadingMessage }} placeholder="Estado civil" styles={selectStyles} isClearable={true}/>
                            </div>
                        </div>
                        <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4'>
                            <div className='form-floating inner-addon- left-addon-'>
                            <Select value={{value:Filters.grupo_social,label:Filters.grupo_social}} onChange={(event)=>ReadSelect(event,'grupo_social')} id='populationGroup' options={PopulationGroup} components={{ ValueContainer: CustomValueContainer, animatedComponents, NoOptionsMessage: customNoOptionsMessage, LoadingMessage: customLoadingMessage }} placeholder="Grupo social" styles={selectStyles} isClearable={true}/>
                            </div>
                        </div>
                    </div>
                    <div className='row gx-0 gx-sm-0 gx-md-4 gx-lg-4 gx-xl-4 gx-xxl-5'>
                        <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4'>
                            <div className='form-floating inner-addon- left-addon-'>
                            <Select value={{value:Filters.grupo_etnico,label:Filters.grupo_etnico}} onChange={(event)=>ReadSelect(event,'grupo_etnico')} id='ethnicGroup' options={EthnicGroup} components={{ ValueContainer: CustomValueContainer, animatedComponents, NoOptionsMessage: customNoOptionsMessage, LoadingMessage: customLoadingMessage }} placeholder="Grupo étnico" styles={selectStyles} isClearable={true}/>
                            </div>
                        </div>
                        <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4'>
                            <div className='form-floating inner-addon- left-addon-'>
                            <Select value={{value:Filters.religion,label:Filters.religion}} onChange={(event)=>ReadSelect(event,'religion')} id='religion' options={Religion} components={{ ValueContainer: CustomValueContainer, animatedComponents, NoOptionsMessage: customNoOptionsMessage, LoadingMessage: customLoadingMessage }} placeholder="Religion" styles={selectStyles} isClearable={true}/>
                            </div>
                        </div>
                    </div>
                    <div className='row gx-0 gx-sm-0 gx-md-4 gx-lg-4 gx-xl-4 gx-xxl-5'>
                        <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4'>
                            <div className='form-floating inner-addon- left-addon-'>
                            <Select value={{value:Filters.genero,label:Filters.genero}} onChange={(event)=>ReadSelect(event,'genero')} id='religion' options={Gender} components={{ ValueContainer: CustomValueContainer, animatedComponents, NoOptionsMessage: customNoOptionsMessage, LoadingMessage: customLoadingMessage }} placeholder="Género" styles={selectStyles} isClearable={true}/>
                            </div>
                        </div>
                    </div>
                    <div onClick={filterData}  className='ButtonElement'style={{'marginBottom':'80px'}}>
                                <span  className='ButtonText'>Filtrar</span>
                    </div>
                    <div className='row mt-4 mb-4'>
                    </div>                    
                </form>
                <div className='row mt-2 mb-2'>
                    <div className='col-12'>
                        <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-bold tx-dark-purple- gray font_medium'>Media</p>
                    </div>
                    </div>
                <div className='card-body p-4 w-100' style={{'width':'100%','height':'400px'}}>
                    <div className='w-100 h-100 mx-auto' id='chart-vital-sign-one-'></div>
                </div>
                <div className='row mt-2 mb-2'>
                    <div className='col-12'>
                        <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-bold tx-dark-purple- gray font_medium'>Mediana</p>
                    </div>
                    </div>
                <div className='card-body p-4 w-100' style={{'width':'100%','height':'400px'}}>
                    <div className='w-100 h-100 mx-auto' id='chart-vital-sign-two-'></div>
                </div>
                <div className='row mt-2 mb-2'>
                    <div className='col-12'>
                        <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-bold tx-dark-purple- gray font_medium'>Varianza</p>
                    </div>
                    </div>
                <div className='card-body p-4 w-100' style={{'width':'100%','height':'400px'}}>
                    <div className='w-100 h-100 mx-auto' id='chart-vital-sign-three-'></div>
                </div>
            </div>
        </div>
  )
}

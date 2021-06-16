import React, {useContext} from 'react'
import { LanguageContext } from '../context'
import theory_ENG from './theory_ENG.jpg'
import theory_RU from './theory_RU.jpg'

const ModalOne = () =>{
	
	const [langContext] = useContext(LanguageContext);

	const RU = () =>{
		return (
			<>
			<dl className="row">
  <dt className="col-sm-3">Экстраполяция</dt>
  <dd className="col-sm-9">Метод научного исследования, который основан на распространении закономерностей прошлых значений на будущее состояние.</dd>

  <dt className="col-sm-3">Цель методов экстраполяции</dt>
  <dd className="col-sm-9">Показать, к какому состоянию в будущем может прийти объект , если  сохранятся его закномерности развития в прошлом.
  </dd>

  <dt className="col-sm-3">Тренд</dt>
  <dd className="col-sm-9">Выявленная последовательность значений в прошлом, развивающаяся по плавной траектории, которую можно выразить, описать математически. Тренд может быть <strong>растущим</strong> либо <strong>падающим</strong>.</dd>

  <dt className="col-sm-3 text-truncate">Период прогноза</dt>
  <dd className="col-sm-9">Интервал времени, на который разрабатывается прогноз.</dd>

    <dt className="col-sm-3 text-truncate">База прогноза</dt>
  <dd className="col-sm-9">Статистическая информация прошлых значений, на которую мы опираемся при построении расчетов.</dd>
    <hr />
  <img src={theory_RU} className="rounded img-fluid img-thumbnail mx-auto d-block" alt="Теория метода экстраполяции" />

<p className="alert alert-primary" role="alert">
  Чем меньше период прогноза и больше база прогноза (тренд), тем точнее будет прогноз.
</p>
<hr />


    <dt className="col-sm-3">Метод скользящей средней</dt>
  <dd className="col-sm-9">Дает возможность выравнивать динамический ряд на основе его средних характеристик. При экстраполяции с помощью среднего уровня ряда используется принцип, при котором прогнозируемый уровень принимается равным среднему значению уровней ряда в прошлом. Данный метод дает прогнозную точечную оценку и более эффективно используется при краткосрочном прогнозировании.</dd>

      <dt className="col-sm-3">Метод экспоненциального сглаживания</dt>
  <dd className="col-sm-9">Дает возможность выявить тенденцию, сложившуюся к моменту последнего наблюдения, и позволяет оценить параметры модели, описывающей тренд, который сформировался в конце базисного периода. Этот метод адаптируется к меняющимся во времени условиям, а не просто экстраполирует действующие зависимости в будущее. Метод экспоненциального сглаживания наиболее эффективен при разработке кратко- и среднесрочных прогнозов.</dd>

      <dt className="col-sm-3">Метод наименьших квадратов</dt>
  <dd className="col-sm-9">Основан на выявлении параметров модели, которые минимизируют суммы квадратических отклонений между наблюдаемыми величинами и расчетными. Модель, описывающая тренд, в каждом конкретном случае подбирается в соответствии с рядом статистических критериев. На практике наибольшее распространение получили такие функции, как линейная, квадратическая, экспоненциальная, степенная, показательная.</dd>

</dl>
			</>
			)
	}
	
		const ENG = () =>{
		return (
			<>
			<dl className="row">
  <dt className="col-sm-3">Extrapolation</dt>
  <dd className="col-sm-9">A scientific research method that is based on the distribution of the patterns of past values ​​to the future state.</dd>

  <dt className="col-sm-3">Purpose of extrapolation methods</dt>
  <dd className="col-sm-9">Show what state an object can come to in the future if its regularities of development in the past remain.
  </dd>

  <dt className="col-sm-3">Trend</dt>
  <dd className="col-sm-9">The identified sequence of values ​​in the past, developing along a smooth trajectory that can be expressed, described mathematically. The trend can be <strong>up</strong> or <strong>down</strong>.</dd>

  <dt className="col-sm-3 text-truncate">Forecast period</dt>
  <dd className="col-sm-9">The time interval for which the forecast is developed.</dd>

    <dt className="col-sm-3 text-truncate">Forecast base</dt>
  <dd className="col-sm-9">Statistical information of past values, which we rely on when constructing calculations.</dd>
  <hr />
  <img src={theory_ENG} className="rounded img-fluid img-thumbnail mx-auto d-block" alt="explaining theory"/>

<p className="alert alert-primary" role="alert">
  The shorter the forecast period and the larger the forecast base (trend), the more accurate the forecast will be.
</p>
<hr />


    <dt className="col-sm-3">The method of Rolling average</dt>
  <dd className="col-sm-9">Allows you to align time series based on its average characteristics. When extrapolating using the average level of the series, the principle is used, in which the predicted level is taken equal to the average value of the levels of the series in the past. This method provides a predictive point estimate and is more efficiently used in short-term forecasting.</dd>

      <dt className="col-sm-3">The method of Exponential smoothing</dt>
  <dd className="col-sm-9">It makes it possible to identify the trend that has developed by the time of the last observation, and allows you to estimate the parameters of the model describing the trend that formed at the end of the base period. This method adapts to changing conditions over time, rather than simply extrapolating existing dependencies into the future. The exponential smoothing method is most effective when developing short- and medium-term forecasts.</dd>

      <dt className="col-sm-3">The method of Least squares</dt>
  <dd className="col-sm-9">It is based on identifying model parameters that minimize the sum of standard deviations between the observed values ​​and the calculated ones. The model describing the trend is selected in each specific case in accordance with a number of statistical criteria. In practice, the most widely used functions are linear, quadratic, exponential, power, exponential.</dd>

</dl>
			</>
			)
	}


	let parse =''

	if (langContext === 'ENG') {parse = <ENG />} else {parse =<RU />}

	return(
		<>
			{ parse }
		</>
		)
}

export default ModalOne
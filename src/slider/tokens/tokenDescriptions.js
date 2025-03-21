/**
 * Описания токенов на русском языке
 * Ключи должны точно соответствовать названиям токенов в tokens.json
 */

const tokenDescriptions = {
  // Токены ползунка (Thumb)
  "THUMB_TRANSITION_DURATION": "Длительность перехода ползунка - время базовой анимации ползунка",
  "THUMB_TRANSITION_EASING": "Плавность перехода ползунка - характер движения при базовой анимации",
  "THUMB_HOVER_DURATION": "Длительность наведения на ползунок - время анимации при наведении мыши",
  "THUMB_DRAG_DURATION": "Длительность перетаскивания - время анимации при перетаскивании ползунка",
  "THUMB_DRAG_EASING": "Плавность перетаскивания - характер движения при перетаскивании",
  "THUMB_DOT_EXPAND_DURATION": "Длительность увеличения точки - время анимации увеличения центральной точки",
  "THUMB_DOT_COLLAPSE_DURATION": "Длительность уменьшения точки - время анимации уменьшения центральной точки",
  "THUMB_DOT_TRANSITION_EASING": "Плавность анимации точки - характер движения точки ползунка",
  
  // Токены оси (Axis)
  "AXIS_TRANSITION_DURATION": "Длительность перехода оси - время анимации изменения оси слайдера",
  "AXIS_TRANSITION_EASING": "Плавность перехода оси - характер анимации оси слайдера",
  "AXIS_FILL_TRANSITION_DURATION": "Длительность заполнения оси - время анимации заполняющейся части",
  "AXIS_FILL_ACTIVE_DURATION": "Длительность активного заполнения - время мгновенной активации заполнения",
  
  // Токены счетчика (Counter)
  "COUNTER_TRANSITION_DURATION": "Длительность перехода счетчика - время анимации изменения значения",
  "COUNTER_TRANSITION_EASING": "Плавность перехода счетчика - характер анимации изменения значения",
  
  // Общие токены слайдера (Slider)
  "SLIDER_ANIMATION_DURATION": "Общая длительность анимации - базовое время для всех анимаций слайдера",
  "SLIDER_TRANSITION_DURATION": "Длительность перехода слайдера - время общих переходных состояний",
  "SLIDER_TRANSITION_EASING": "Плавность перехода слайдера - характер движения основных анимаций"
};

export default tokenDescriptions; 
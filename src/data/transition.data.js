

// Object Array of transition elements
const transitionData = {
  fadeTop: {
    clsStyleIn: 'anim_transition_fade_top_in',
    clsStyleOut: 'anim_transition_fade_top_out'
  },
  fadeLeft: {
    clsStyleIn: 'anim_transition_fade_left_in',
    clsStyleOut: 'anim_transition_fade_left_out'
  },
  fadeRight: {
    clsStyleIn: 'anim_transition_fade_right_in',
    clsStyleOut: 'anim_transition_fade_right_out'
  },
  serviceFade: {
    clsStyleIn: 'anim_movement_service_in',
    clsStyleOut: 'anim_movement_service_out'
  },
  fadeRightDelay: {
    clsStyleIn: 'anim_form_contact_in',
    clsStyleOut: 'anim_form_contact_out'
  }
};

const elementsAnimated = [
  {
    elementId: 'section__subtitle',
    pos: 400,
    effect: transitionData.fadeLeft
  },
  {
    elementId: 'card__info',
    pos: 400,
    effect: transitionData.fadeRight
  },
  {
    elementId: 'tecnologies',
    pos: 900,
    effect: transitionData.fadeTop
  },
  {
    elementId: 'services',
    pos: 1400,
    effect: transitionData.fadeTop
  },
  {
    elementId: 'serv__1',
    pos: 1450,
    effect: transitionData.serviceFade
  },
  {
    elementId: 'serv__2',
    pos: 1450,
    effect: transitionData.serviceFade
  },
  {
    elementId: 'serv__3',
    pos: 1450,
    effect: transitionData.serviceFade
  },
  {
    elementId: 'serv__4',
    pos: 1450,
    effect: transitionData.serviceFade
  },
  {
    elementId: 'benefits',
    pos: 2100,
    effect: transitionData.fadeTop
  },
  {
    elementId: 'contact',
    pos: 2800,
    effect: transitionData.fadeTop
  },
  {
    elementId: 'cover__anim-form',
    pos: 2600,
    effect: transitionData.fadeRightDelay
  }
];

export {
  transitionData,
  elementsAnimated
}
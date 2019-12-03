import * as Alexa from 'ask-sdk-core';

export const DefaultRequestHandler = {
  canHandle(handlerInput) {
    return true;
  },
  handle(handlerInput: Alexa.HandlerInput) {
    const requestType = Alexa.getRequestType(handlerInput.requestEnvelope);
    const request = handlerInput.requestEnvelope.request;
    console.log('*************');
    console.log('DefaultRequestHandler');
    console.log("requestType", requestType);
    console.log("request", request);
    console.log('************');
    return handlerInput.responseBuilder.getResponse();
  },
};

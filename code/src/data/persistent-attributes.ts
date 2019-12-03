import { HandlerInput } from 'ask-sdk-core';
import { IPersistentAttributes } from 'persistent-attributes-types';

export async function savePersistentAttributes(handlerInput: HandlerInput): Promise<void> {
  await handlerInput.attributesManager.savePersistentAttributes();
}

export async function getPersistentAttributes(handlerInput: HandlerInput): Promise<IPersistentAttributes> {
  const persistentAttributes: IPersistentAttributes = await handlerInput.attributesManager.getPersistentAttributes() as IPersistentAttributes;
  return setDefaultPersistentAttributesIfEmpty(persistentAttributes, handlerInput);
}

function setDefaultPersistentAttributesIfEmpty(persistentAttributes: IPersistentAttributes, handlerInput: HandlerInput): IPersistentAttributes {
  if (Object.keys(persistentAttributes).length === 0) {
    persistentAttributes = { ...defaultPersistentAttributes };
    handlerInput.attributesManager.setPersistentAttributes(persistentAttributes);
  }
  return persistentAttributes;
}

const defaultPersistentAttributes: IPersistentAttributes = {
  // TODO set default values.
}
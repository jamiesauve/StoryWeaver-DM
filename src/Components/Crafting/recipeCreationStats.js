import React from 'react'

import EditableInput from '../UI/Action/EditableInput'
import EditableTextArea from '../UI/Action/EditableTextArea'
import FillInTheBlanksInput from '../UI/Action/FillInTheBlanksInput'

export const getCreateRecipeData = (placeholders) => {
  return [{
    labelCell: `Create DC:`,
    valueCells: [<EditableInput 
      placeholder={placeholders.creationDC}
      type="number"
    />],
  }, {
    labelCell: `On Fail:`,
    valueCells: [<EditableTextArea 
      placeholder={placeholders.onCreateFail}
      type="text"
    />],
  }, {
    labelCell: `Creating Time:`,
    valueCells: [<EditableInput 
      placeholder={placeholders.creationTime}
      type="text" 
    />],
  }, {
    labelCell: `Distilling Time:`,
    valueCells: [<EditableInput 
      placeholder={placeholders.distillingTime}
      type="text" 
    />],
  }, {
    labelCell: `Yield:`,
    valueCells: [<EditableInput 
      placeholder={placeholders.recipeYield}
      type="text"
    />],
  }, {
    labelCell: `Value:`,
    valueCells: [
      <FillInTheBlanksInput
        className="fillInTheBlanks"
        copySegments={[``, ` `]}
        fieldGroupIndex={0} // TODO: change to dynamic index
        items={
          [{
            fieldName: `amount`,
            fieldType: `number`,
            fieldWidth: `60px`,
            placeholder: placeholders.value.amount,
          }, {
            fieldName: `unit`,
            fieldType: `text`,
            fieldWidth: `40px`,
            placeholder: placeholders.value.unit,
          }]
        }
        handleChange={(e) => console.log(e)} // TODO: make me a multi - new component    
      />
    ]
  }]
}

export const getEditRecipeData = (data) => {
  const {
    creationDC,
    creationTime,
    distillingTime,
    onCreateFail,
    value,
    recipeYield,
  } = data

  return [{
    labelCell: `Create DC:`,
    valueCells: [creationDC],
  }, {
    labelCell: `On Fail:`,
    valueCells: [onCreateFail],
  }, {
    labelCell: `Creating Time:`,
    valueCells: [creationTime],
  }, {
    labelCell: `Distilling Time:`,
    valueCells: [distillingTime],
  }, {
    labelCell: `Yield:`,
    valueCells: [recipeYield || `1 ounce`],
  }, {
    labelCell: `Value:`,
    valueCells: [`${value.amount} ${value.unit.shortName} per ${value.recipeYield || `ounce`}`],
  }]
}

export const getStaticRecipeData = (data) => {
  const {
    creationDC,
    creationTime,
    distillingTime,
    onCreateFail,
    value,
    recipeYield,
  } = data

  return [{
    labelCell: `Create DC:`,
    valueCells: [creationDC],
  }, {
    labelCell: `On Fail:`,
    valueCells: [onCreateFail],
  }, {
    labelCell: `Creating Time:`,
    valueCells: [creationTime],
  }, {
    labelCell: `Distilling Time:`,
    valueCells: [distillingTime],
  }, {
    labelCell: `Yield:`,
    valueCells: [recipeYield || `1 ounce`],
  }, {
    labelCell: `Value:`,
    valueCells: [`${value.amount} ${value.unit.shortName} per ${value.recipeYield || `ounce`}`],
  }]
}

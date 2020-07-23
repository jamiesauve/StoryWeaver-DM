import React from 'react'

// TODO: move this elsewhere, it's a component now or something

import EditableInput from '../../../Components/UI/Action/EditableInput'
import EditableTextArea from '../../../Components/UI/Action/EditableTextArea'
import FillInTheBlanksInput from '../../../Components/UI/Action/FillInTheBlanksInput'

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
      placeholder={placeholders.amountCreated} // TODO: change to 'yield' 
      type="text"
    />],
  }, {
    labelCell: `Value:`,
    valueCells: [
      <FillInTheBlanksInput
        className="fillInTheBlanks"
        copySegments={[``, ` `, ` per `]}
        fieldGroupIndex={0} // TODO: change to dynamic index
        items={
          [{
            fieldName: `amount`,
            fieldType: `text`,
            flexGrow: 1,
            placeholder: placeholders.value.amount,
            // value: ingredient.label,
            // onChange ... update this state
          }, {
            fieldName: `unit`,
            fieldType: `text`,
            fieldWidth: `40px`,
            placeholder: placeholders.value.unit,
            // value: ingredient.amount,
          }, {
            fieldName: `amountCreated`,
            fieldType: `text`,
            flexGrow: 1,
            placeholder: placeholders.value.amountCreated,
            // value: ingredient.label, // TODO: handle this
            // onChange ... update this state
          }]
        }
        // handleChange={updateListItem} // TODO: make me a multi - new component    
      />
    ]
  }]
}

export const getEditRecipeData = (data) => {
  console.log('getting edit')

  const {
    amountCreated,
    creationDC,
    creationTime,
    distillingTime,
    onCreateFail,
    value,
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
    valueCells: [amountCreated || `1 ounce`],
  }, {
    labelCell: `Value:`,
    valueCells: [`${value.amount} ${value.unit.shortName} per ${value.amountCreated || `ounce`}`],
  }]
}

export const getStaticRecipeData = (data) => {
  console.log('getting static')

  const {
    amountCreated,
    creationDC,
    creationTime,
    distillingTime,
    onCreateFail,
    value,
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
    valueCells: [amountCreated || `1 ounce`],
  }, {
    labelCell: `Value:`,
    valueCells: [`${value.amount} ${value.unit.shortName} per ${value.amountCreated || `ounce`}`],
  }]
}

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import type { EditOfficeById, UpdateOfficeInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'




type FormOffice = NonNullable<EditOfficeById['office']>

interface OfficeFormProps {
  office?: EditOfficeById['office']
  onSave: (data: UpdateOfficeInput, id?: FormOffice['id']) => void
  error: RWGqlError
  loading: boolean
}

const OfficeForm = (props: OfficeFormProps) => {
  const onSubmit = (data: FormOffice) => {
  
    
    
  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.office?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormOffice> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
      
        <Label
          name="officeName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Office name
        </Label>
        
          <TextField
            name="officeName"
            defaultValue={props.office?.officeName}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="officeName" className="rw-field-error" />

        <Label
          name="companyId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Company id
        </Label>
        
          <TextField
            name="companyId"
            defaultValue={props.office?.companyId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="companyId" className="rw-field-error" />

        <Label
          name="latitude"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Latitude
        </Label>
        
          <TextField
            name="latitude"
            defaultValue={props.office?.latitude}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ valueAsNumber: true, required: true }}
          />
        

        <FieldError name="latitude" className="rw-field-error" />

        <Label
          name="longitude"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Longitude
        </Label>
        
          <TextField
            name="longitude"
            defaultValue={props.office?.longitude}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ valueAsNumber: true, required: true }}
          />
        

        <FieldError name="longitude" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default OfficeForm

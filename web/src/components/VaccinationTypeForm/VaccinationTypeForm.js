import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  CheckboxField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const VaccinationTypeForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.vaccinationType?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>
        <TextField
          name="name"
          defaultValue={props.vaccinationType?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="name" className="rw-field-error" />

        <Label
          name="isRecurring"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Is recurring
        </Label>
        <CheckboxField
          name="isRecurring"
          defaultChecked={props.vaccinationType?.isRecurring}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="isRecurring" className="rw-field-error" />

        <Label
          name="recurrenceType"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Recurrence type
        </Label>
        <NumberField
          name="recurrenceType"
          defaultValue={props.vaccinationType?.recurrenceType}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="recurrenceType" className="rw-field-error" />

        <Label
          name="recurrenceInterval"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Recurrence interval
        </Label>
        <NumberField
          name="recurrenceInterval"
          defaultValue={props.vaccinationType?.recurrenceInterval}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="recurrenceInterval" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default VaccinationTypeForm

import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const VaccinationRecordForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.vaccinationRecord?.id)
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
          name="studentId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Student id
        </Label>
        <NumberField
          name="studentId"
          defaultValue={props.vaccinationRecord?.studentId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="studentId" className="rw-field-error" />

        <Label
          name="vaccinationType"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Vaccination type
        </Label>
        <NumberField
          name="vaccinationType"
          defaultValue={props.vaccinationRecord?.vaccinationType}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="vaccinationType" className="rw-field-error" />

        <Label
          name="vaccinationDate"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Vaccination date
        </Label>
        <TextField
          name="vaccinationDate"
          defaultValue={props.vaccinationRecord?.vaccinationDate}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="vaccinationDate" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default VaccinationRecordForm

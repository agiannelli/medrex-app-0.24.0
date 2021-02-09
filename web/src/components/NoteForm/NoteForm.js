import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

const NoteForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.note?.id)
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
          name="ownerId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Owner id
        </Label>
        <TextField
          name="ownerId"
          defaultValue={props.note?.ownerId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="ownerId" className="rw-field-error" />

        <Label
          name="ownerType"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Owner type
        </Label>
        <NumberField
          name="ownerType"
          defaultValue={props.note?.ownerType}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="ownerType" className="rw-field-error" />

        <Label
          name="message"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Message
        </Label>
        <TextField
          name="message"
          defaultValue={props.note?.message}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="message" className="rw-field-error" />

        <Label
          name="requireFollowUp"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Require follow up
        </Label>
        <CheckboxField
          name="requireFollowUp"
          defaultChecked={props.note?.requireFollowUp}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="requireFollowUp" className="rw-field-error" />

        <Label
          name="followUpDate"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Follow up date
        </Label>
        <TextField
          name="followUpDate"
          defaultValue={props.note?.followUpDate}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="followUpDate" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default NoteForm

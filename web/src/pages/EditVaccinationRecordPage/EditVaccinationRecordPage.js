import VaccinationRecordsLayout from 'src/layouts/VaccinationRecordsLayout'
import EditVaccinationRecordCell from 'src/components/EditVaccinationRecordCell'

const EditVaccinationRecordPage = ({ id }) => {
  return (
    <VaccinationRecordsLayout>
      <EditVaccinationRecordCell id={id} />
    </VaccinationRecordsLayout>
  )
}

export default EditVaccinationRecordPage

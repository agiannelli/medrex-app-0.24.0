import VaccinationRecordsLayout from 'src/layouts/VaccinationRecordsLayout'
import VaccinationRecordCell from 'src/components/VaccinationRecordCell'

const VaccinationRecordPage = ({ id }) => {
  return (
    <VaccinationRecordsLayout>
      <VaccinationRecordCell id={id} />
    </VaccinationRecordsLayout>
  )
}

export default VaccinationRecordPage

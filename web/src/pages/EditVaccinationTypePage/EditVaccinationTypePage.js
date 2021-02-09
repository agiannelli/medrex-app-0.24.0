import VaccinationTypesLayout from 'src/layouts/VaccinationTypesLayout'
import EditVaccinationTypeCell from 'src/components/EditVaccinationTypeCell'

const EditVaccinationTypePage = ({ id }) => {
  return (
    <VaccinationTypesLayout>
      <EditVaccinationTypeCell id={id} />
    </VaccinationTypesLayout>
  )
}

export default EditVaccinationTypePage

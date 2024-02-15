import AllergenForm from "@/components/AllergenForm"

function ProfilePage({params}) {
  return (
    <div>
      <AllergenForm id={params.id}/>
    </div>
  )
}
export default ProfilePage
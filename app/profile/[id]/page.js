import AllergenForm from "@/components/AllergenForm";
import DemographicForm from "@/components/DemographicForm";
import FamilyHxForm from "@/components/FamilyHxForm";

function ProfilePage({ params }) {
  return (
    <div>
      <FamilyHxForm id={params.id} />
    </div>
  );
}
export default ProfilePage;

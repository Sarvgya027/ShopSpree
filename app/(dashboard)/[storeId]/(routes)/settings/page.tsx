import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { SettingsForm } from "./components/Settings-form";

interface SettingsPageProps {
  params: {
    storeId: string 
  }
}

const SettingsPage: React.FC<SettingsPageProps> = async ({params} : SettingsPageProps) => {
  const {storeId} = params;
  const {userId} = auth();

  if(!userId) {
    redirect('/sign-in')
  }

  const store = await prismadb.store.findFirst({  
    where: {
      id: storeId,
      userId
    }
  })

  if(!store) {
    redirect('/dashboard')
  }


  return (
    <div className="flex-col">
      <div className="flex-1 space-x-4 mr-2 px-4 pt-4">
        {/* settingsform component */}
        <SettingsForm initialData={store} />
      </div>
    </div>
  )
}
export default SettingsPage;
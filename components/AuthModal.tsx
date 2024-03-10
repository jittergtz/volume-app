"use client"
import { useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react";
import Modal from "./Modal"
import { useRouter } from "next/navigation";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import useAuthModal from "@/hooks/useAuthModal";
import { useEffect } from "react";


const AuthModal = () => {

    const supabaseClient = useSupabaseClient()
    const router = useRouter()
    const {session} = useSessionContext()
    const { onClose, isOpen} = useAuthModal()

    const onChange = (open: boolean) => {
        if(!open) {
            onClose()
        }
    }

    useEffect(() => {
        if(session){
            router.refresh()
            onClose()
        }
    },[session, router, onClose])

    return ( 
        <Modal 
        title="Volume"
        description="Logge dich mit deinen Account ein"
        isOpen={isOpen}
        onChange={onChange}>
          <Auth
          theme="dark"
          providers={["google"]}
          supabaseClient={supabaseClient}
          localization={{
            variables: {
              sign_in: {
                email_label: 'Deine Email Adresse',
                password_label: 'Dein sicheres Passwort',
                email_input_placeholder: "Email",
                password_input_placeholder: "Passwort",
                button_label: "Anmelden",
                loading_button_label: "Anmelden...",
                social_provider_text: "Weiter mit {{provider}}",
                link_text: "Du hast bereits ein Account?",
   
              },
              sign_up: {
                email_label: 'Deine Email Adresse',
                password_label: 'Dein sicheres Passwort',
                email_input_placeholder: "Email",
                password_input_placeholder: "Passwort",
                button_label: "Registrieren",
                loading_button_label: "Registrieren...",
                social_provider_text: "Weiter mit {{provider}}",
                link_text: "Noch kein Account? Jetzt ein erstellen",
                confirmation_text: "Wir haben dir eine Bestätigungsemail gesendet"
              },
              forgotten_password: {
                link_text: "Passwort vergessen?"
              },
              magic_link:{
                link_text: "Magic link"
              },
            },
        }}
          appearance={{
            theme: ThemeSupa,
            variables: {
                default: {
                    colors:{
                        brand: '#292929',
                        brandAccent: '#303030',
                        brandButtonText: 'black',
            

                    }
                },
                
            }
          }}
          
          />
         
        </Modal>
     );
}
 
export default AuthModal;
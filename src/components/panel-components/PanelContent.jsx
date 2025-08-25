import { JobsContent } from "../panel-content-components/JobsContent"
import { MessagesContent } from "../panel-content-components/MessagesContent"
import { ServicesContent } from "../panel-content-components/ServicesContent"
import { ProfileContent } from "../panel-content-components/ProfileContent"
import { LogOutContent } from "../panel-content-components/LogOutContent"

import { options } from "./PanelSideBarMenuContent"

export const PanelContent = () => {


    return (
        <div className="col-9">
            <div className=" h-100">
                <div class="tab-content" id="v-pills-tabContent">
            {options.map((option, index)=> {
                const lowerOption = option.toLowerCase()

                let contenido = ""

                if(index == 0){
                    contenido = <JobsContent/>
                } else if(index == 1){
                    contenido = <MessagesContent/>
                }
                 else if(index == 2){
                    contenido = <ServicesContent/>
                }
                else if(index == 3){
                    contenido = <ProfileContent/>
                }
                 else if(index == 4){
                    contenido = <LogOutContent/>
                }
                    
                return(
                    <div  class={`tab-pane fade show ${index == 0 && "active"}`} id={`v-pills-${lowerOption}`} role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
                        {contenido}
                    </div>
                )

            })}
            </div>
            </div>
        </div>
    )
}
import { PanelSideBarTitle } from "./PanelSideBarTitle"
import { PanelSideBarMenu } from "./PanelSideBarMenu"

export const PanelSideBar = () => {
    return (
        <div className="col-3 border-end">
            <div className="">

                <PanelSideBarTitle />
                <PanelSideBarMenu />
            </div>
        </div>
    )
}
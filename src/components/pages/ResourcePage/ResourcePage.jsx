import "./ResourcePage.css"
import { resourceLinks } from "./resourceLinks.js"
import Dropdown from "../../Dropdown/Dropdown.jsx";

export default function ResourcePage() {

    function renderResources(resources) {
        const renderedLinks = [];
        let index = 0;
        for (const data of resources) {
            renderedLinks.push(
                <div key={index}>
                    <a href={data.href}>{data.name}</a>
                    <p>{data.desc}</p>
                </div>
            )
            index++;
        }
        return renderedLinks;
    }

    function renderDropdown() {
        const sectionList = [];
        let index = 0;
        for (const section of resourceLinks) {
            sectionList.push(
                <Dropdown title={section.title} key={index}>
                    {renderResources(section.resources)}
                </Dropdown>
            );
            index++;
        }
        return sectionList;
    }

    return(
        <div className="resource-page">
        <h1>Resources</h1>
            {renderDropdown()}
        </div>
    );
}
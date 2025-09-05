import "./LeaguePage.css";
import { csvData } from "./rankingtestpage.js";

export default function LeaguePage() {

    function generateLeaderboard(csvInput) {
        const csvSplitNewline = csvInput.split('\n');
        const csvSplitComma = [];
        for (const row of csvSplitNewline) {
            csvSplitComma.push(row.split(","));
        } 
        console.log(csvSplitComma);
        const headrow = csvSplitComma[0];
        const bodyrow = csvSplitComma.splice(1);
        return (
            <table>
                <tr>
                    {headrow.map(head_name => (<th>{head_name}</th>))}
                </tr>
                {bodyrow.map(eachRow => (
                    <tr>
                        {eachRow.map(rowItem => (
                            <td>
                                {rowItem}
                            </td>
                        ))}
                    </tr>
                ))}

            </table>
        )
    }

    return (
        <div id="league-page">
            <h1>KCRM Fountain League</h1>
            <p><b>The KCRM Fountain League</b> is an in-house league that aims to provide a
                standard and organized platform for KCRM players to compete in. If you would like to
                participate in league play with KCRM please fill out the form below. </p>
            <section className="league-description">
            </section>
            <span id="sign-up-block">
                <p>You can register for a league here, if you haven't already!</p>
                <a id="button-register" href="https://forms.gle/NXFYX1SzRdgmRenT6" target="_blank" rel="noopener noreferrer">Register here!</a>
            </span>
            <p><b>Please note that this league is in its infancy</b>, and as such, feedback is encouraged!</p>
            <h1>League Leaderboard</h1>
            <table>
                {generateLeaderboard(csvData)}
            </table>
        </div>
    )
}
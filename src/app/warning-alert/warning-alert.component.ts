import { Component } from "@angular/core";

@Component ({
    selector: "app-warning-alert",
    templateUrl: "./warning-alert.component.html",
    styleUrls: ["./warning-alert.component.css"]
})

export class WarningAlertComponent{
    numVulnerabilities: number;
    strSeverity: string;

    constructor() {
        this.numVulnerabilities = Math.floor(Math.random()*20)+1;
        if(this.numVulnerabilities <= 10)
            this.strSeverity="LOW";
        else
            this.strSeverity="SEVERE";
    }

    getParagraphStyle() {
        let setStyle: string = this.numVulnerabilities>=10 ? 'bold' : 'normal';
        return {fontWeight : setStyle};
    }
}
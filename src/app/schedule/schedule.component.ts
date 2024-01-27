import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
	selector: 'app-schedule',
	standalone: true,
	imports: [FormsModule],
	templateUrl: './schedule.component.html',
	styleUrl: './schedule.component.css'
})
export class ScheduleComponent implements OnInit {
	@Output() timeToPrepare = new EventEmitter<number>();
	// timeToPrepareObject = {"hours": 0, "weeks": 0};
	weeksToPrepare = 0;
	hoursPerWeekToPrepare = 0;
	totalTimeToPrepare = 0;


	constructor() {}

	ngOnInit() {}

	doChanges(data: any, type : 'hours' | 'weeks') {
		console.log("Data = " + data);
		console.log("Type = " + type);
		this.totalTimeToPrepare = this.hoursPerWeekToPrepare * this.weeksToPrepare;
		this.timeToPrepare.emit(this.totalTimeToPrepare);


		// this.timeToPrepareObject = {
		// 	"hours": this.hoursPerWeekToPrepare,
		// 	"weeks": this.weeksToPrepare
		// };
	}
}

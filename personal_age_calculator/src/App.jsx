import { useState } from "react";
import { AgeCalculator }
	from "./components/AgeCalculator"
import { AgeResult }
	from "./components/AgeResult"
import {
	differenceInDays,
	differenceInHours,
	differenceInMinutes,
	differenceInMonths,
	differenceInSeconds,
	differenceInWeeks,
	differenceInYears
}
	from "date-fns";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	const [age, setAge] = useState(null);

	const calculateAge = (date) => {
		const today = new Date();
		const dateObject = new Date(date);
		const ageYears = differenceInYears(today, dateObject);
		const ageMonths = differenceInMonths(today, dateObject);
		const ageDays = differenceInDays(today, dateObject);
		const ageWeeks = differenceInWeeks(today, dateObject);
		const ageHours = differenceInHours(today, dateObject);
		const ageMinutes = differenceInMinutes(today, dateObject);
		const ageSeconds = differenceInSeconds(today, dateObject);
		setAge({
			years: ageYears,
			months: ageMonths,
			days: ageDays,
			weeks: ageWeeks,
			hours: ageHours,
			minutes: ageMinutes,
			seconds: ageSeconds,
		});
	};

	return (
		<center className="container my-3">
			<h1>Age Calculator</h1>
			<strong>This free age calculator
				computes age in terms of years,
				months, weeks, days, hours,
				minutes, and seconds,
				given a date of birth.
			</strong>
			<div className="my-3">
				<AgeCalculator calculateAge={calculateAge} />
			</div>
			{age && <AgeResult age={age} />}
		</center>
	)
}

export default App;

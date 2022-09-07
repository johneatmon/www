interface Hike {
	name: string;
	dateHiked: string;
	href: string | URL;
	miles: number;
	elevation: number;
}

export const HIKES: Hike[] = [
	{
		name: 'Thompson Lake via Granite Creek Trail',
		dateHiked: '2022-06-11',
		href: 'https://www.wta.org/go-hiking/trip-reports/trip_report-2022-06-12-4765309267',
		miles: 14.2,
		elevation: 3400,
	},
	{
		name: 'Skyline Trail Loop, Rampart Ridge Loop',
		dateHiked: '2022-05-29',
		href: 'https://www.wta.org/go-hiking/trip-reports/trip_report-2022-06-12-5619961040',
		miles: 9.2,
		elevation: 1100,
	},
	{
		name: 'Mount Si',
		dateHiked: '2022-05-28',
		href: 'https://www.wta.org/go-hiking/trip-reports/trip_report-2022-06-12-8518405632',
		miles: 8.0,
		elevation: 3150,
	},
	{
		name: 'Skyline Trail Loop',
		dateHiked: '2021-10-16',
		href: 'https://www.wta.org/go-hiking/trip-reports/trip_report-2021-10-17-1652164162',
		miles: 5.5,
		elevation: 1450,
	},
	{
		name: 'Rattlesnake Ledge',
		dateHiked: '2021-09-25',
		href: 'https://www.wta.org/go-hiking/trip-reports/trip_report-2021-09-27-9614801592',
		miles: 4.0,
		elevation: 1160,
	},
	{
		name: 'Greg Ball Trail to Wallace Lake',
		dateHiked: '2022-06-26',
		href: 'https://www.wta.org/go-hiking/trip-reports/trip_report.2022-06-27.8716286302',
		miles: 10.0,
		elevation: 1500,
	},
	{
		name: 'Spectacle Lake',
		dateHiked: '2022-07-30',
		href: 'https://www.wta.org/go-hiking/trip-reports/trip_report.2022-08-01.3136347302',
		miles: 22.0,
		elevation: 1500,
	},
	{
		name: 'Mount Si',
		dateHiked: '2022-08-12',
		href: 'https://www.wta.org/go-hiking/trip-reports/trip_report.2022-08-13.0352330967',
		miles: 8.0,
		elevation: 3150,
	},
	{
		name: 'Granite Mountain',
		dateHiked: '2022-08-27',
		href: 'https://www.wta.org/go-hiking/trip-reports/trip_report.2022-08-28.5743221409',
		miles: 8.6,
		elevation: 3800,
	},
	{
		name: 'Camp Muir',
		dateHiked: '2022-09-04',
		href: 'https://www.wta.org/go-hiking/trip-reports/trip_report.2022-09-05.6438272162',
		miles: 8.5,
		elevation: 4530,
	},
];

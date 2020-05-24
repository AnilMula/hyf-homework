const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "The Big Bang Theory",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "Better Call Soul",
    days: 2,
    hours: 12,
    minutes: 0,
  },
];
function logOutSeriesText(tvSeriesDurations) {
  /*   this function takes an object with properties like
  name of series, how many days per week it is watched and 
  duration of the series */
  // it is assumed that average life of a  person is 80 years(42048000 minutes per 80 years)
  // the function returns the percentage of a persons life been watching series on tv
  let seriesTimeInMinutesPerWeek;
  let seriesTimeInMinutesPer80Years;
  let seriesTimePercentIN80Years;
  //Variables for all the tvseries
  let allSeriesTimeInMinutesPerWeek = 0;
  let allSeriesTimeInMinutesPer80Years;
  let allSeriesTimePercentIn80Years;
  // first iterate on tvSeriesDurations object to take time per week of each series`
  for (let i = 0; i < tvSeriesDurations.length; i++) {
    // First calculate series duration in minutes per week days*hours*60+minutes
    seriesTimeInMinutesPerWeek =
      tvSeriesDurations[i].days * tvSeriesDurations[i].hours * 60 +
      tvSeriesDurations[i].minutes;
    // Next calculate series duration in minutes per 80 years above value*53weeks*80 years
    seriesTimeInMinutesPer80Years = seriesTimeInMinutesPerWeek * 53 * 80;
    // Next calculate series time percent in 80 years
    seriesTimePercentIN80Years = (
      seriesTimeInMinutesPer80Years / 42048000
    ).toFixed(3);
    console.log(
      tvSeriesDurations[i]["title"] +
        " took " +
        seriesTimePercentIN80Years +
        "% of person life"
    );
    allSeriesTimeInMinutesPerWeek += seriesTimeInMinutesPerWeek;
  }
  allSeriesTimeInMinutesPer80Years = allSeriesTimeInMinutesPerWeek * 53 * 80;
  allSeriesTimePercentIn80Years = (
    allSeriesTimeInMinutesPer80Years / 42048000
  ).toFixed(3);
  console.log(
    "All series took " + allSeriesTimePercentIn80Years + "% of persons life"
  );
}
logOutSeriesText(seriesDurations);

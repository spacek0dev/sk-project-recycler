
const setEndDate = (text) => {
    let date = new Date(text);
    let end = date.getHours() + 1
    setFormState({ ...formState, startDate: date, endDate: new Date(date.getTime() + new Date().getTimezoneOffset() * -60 * 1000).toISOString().slice(0, 19) });
}


const validateDates = () => {
    const hour = 3600000;
    const start = new Date(formState.startDate);
    const end = new Date(formState.endDate);
    const diffTime = parseInt(Math.abs(start - end));
    const diffDays = parseInt(Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
}

const addHour = (numOfHours, date = new Date()) => {
    date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
    return date;
}
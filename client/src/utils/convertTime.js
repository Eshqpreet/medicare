const convertTime = (time) => {
    // Check if time is defined
    if (!time) {
        return 'N/A'; // or some default value
    }

    const timeParts = time.split(':');
    let hours = parseInt(timeParts[0]);
    const minutes = parseInt(timeParts[1]);

    let meriditem = 'am';
    if (hours >= 12) {
        meriditem = 'pm';
        if (hours > 12) {
            hours -= 12;
        }
    }

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${meriditem}`;
};

export default convertTime;

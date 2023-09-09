export default function TopNavDate() {
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',      // Display the full weekday name
        year: 'numeric',     // Display the year
        month: 'long',       // Display the full month name
        day: 'numeric',      // Display the day of the month
    };

    const date = new Date(); // Replace with your desired date
    const formattedDate = new Intl.DateTimeFormat('bn-BD', options).format(date);
    return formattedDate;
}